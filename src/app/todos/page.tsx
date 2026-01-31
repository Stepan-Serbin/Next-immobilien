import { db } from "@/db";
import { todos } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-options";
import { asc, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


async function getTodosByUserId(userId: number) {
  return db.query.todos.findMany({
    where: eq(todos.userId, userId),
    orderBy: asc(todos.createdAt),
  });
}

export default async function TodosPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.id) {
    // throw new Error("Unauthorized");
    redirect("/");
  }

  const todos = await getTodosByUserId(session.user.id);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
