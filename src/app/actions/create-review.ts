"use server";

import { db } from "@/db";
import { reviewsTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

const ReviewInsertSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Min length must be at least 3 symbols")
    .max(120, "Max length of title is 120 symbols"),
  content: z
    .string()
    .trim()
    .min(3, "Min length must be at least 3 symbols")
    .max(240, "Max length of title is 240 symbols"),
});

export async function createReview(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");
  try {
    const newReview = ReviewInsertSchema.parse({ title, content });
    await db.insert(reviewsTable).values(newReview);
    revalidatePath("/reviews");
    

    // return { success: true };
  } catch (err) {
    if (err instanceof z.ZodError) {
    // return { success: false, fieldErrors: err.flatten().fieldErrors };
    }
  }
  redirect("/reviews"); // NEXT_REDIRECT не использовать внутри try catch
}