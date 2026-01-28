import { createReview } from "@/app/actions/create-review";

export default function AddReview() {
  return (
    <section>
      <h2>Leave a review on our services</h2>
      <form action={createReview}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="content" placeholder="content" />

        <button type="submit">Save</button>
      </form>
    </section>
  );
}
