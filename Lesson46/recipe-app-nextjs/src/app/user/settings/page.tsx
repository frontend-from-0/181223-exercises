import { getSession } from "@auth0/nextjs-auth0";

export default async function UserSettingsPage() {
  const session = await getSession();

  const user = session?.user || null;
  console.log(user);

  if (!session) return <p>Not authenticated</p>;
  
  return (
    <div>
      <h1>User settings</h1>
      <p>Settings for {user?.name || "unknown user"}</p>
      <p>Email: {user?.email} </p>
    </div>
  );
}
