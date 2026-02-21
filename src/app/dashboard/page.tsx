async function DashboardPage() {
  const session = null;

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
