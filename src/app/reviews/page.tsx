import CreateReviewLink from "@/components/create-review-links";
import { db } from "@/db";
import { reviewsTable } from "@/db/schema";

function formatDate(date: Date) {
//   return `${date.getFullYear()}.${date.getUTCMonth() + 1}.${date.getUTCDate()} ${date.getHours()}: ${date.getMinutes()}`;
    return date.toLocaleDateString()
}

export default async function ReviewsPage() {
  const reviews = await db.select().from(reviewsTable);
  return (
    <div>
      <h2>Review</h2>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>
            <h3>{r.title}</h3>
            <span>{r.content}</span>
            <span>{formatDate(r.createdAt)}</span>
          </li>
        ))}
        <CreateReviewLink />
      </ul>
    </div>
  );
}