import { auth } from "@/services/auth";
import { UserInfo } from "./_components/user-info";

export default async function AppPage() {
  const session = await auth();

  return (
    <main className="flex items-center justify-center h-screen">
      <UserInfo session={session} />
    </main>
  );
}
