"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignInSignOut() {
  const { data: session } = useSession();

  if (session)
    return (
      <div className="p-4 flex gap-2 bg-blue-300 rounded-2xl">
        <Image
          src={session.user?.image || ""}
          alt={session.user?.name || ""}
          width={24}
          height={24}
          unoptimized
          className="rounded-full "
        />
        <button type="button" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    );

  return (
    <button
      className="p-4 flex gap-2 bg-blue-300 rounded-2xl"
      type="button"
      onClick={() => signIn("google")}
    >
      Google Sign In
    </button>
  );
}