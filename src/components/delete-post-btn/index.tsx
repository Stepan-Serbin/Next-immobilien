"use client";

import deletePost from "@/app/actions/delete-post";
import { useTransition } from "react";

export default function DeletePostButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      type="button"
      onClick={() => startTransition(() => deletePost(id))}
      disabled={isPending}
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}