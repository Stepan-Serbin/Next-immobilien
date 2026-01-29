import { getServerSession } from "next-auth";
import Image from "next/image";

const Profile = async () => {
  const session = await getServerSession();
  if (!session) {
    return <div>Please sign in</div>;
  }

  return (
    <div>
      <h1>{session.user?.name}</h1>
      <p>{session.user?.email}</p>
      <Image
        src={session.user?.image || ""}
        alt={session.user?.name || ""}
        width={200}
        height={200}
        unoptimized
      />
    </div>
  );
};

export default Profile;