import { headers } from "next/headers";
import { auth } from "../../../lib/auth";

async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <div className="p-10 text-center">Please sign in first.</div>;
  }
  return (
    <div>
      <h1>Welcome, {session.user.name ?? "user"} </h1>
      <p>
        Two-Factor Authentication Status:
        <span>{session.user.twoFactorEnabled ? "Enabled" : "Not Enabled"}</span>
      </p>
    </div>
  );
}

export default DashboardPage;
