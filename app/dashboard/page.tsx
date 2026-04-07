import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Investor Dashboard | JDI Energy Partners",
  description: "Your JDI Energy Partners investor portal.",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return <DashboardClient session={session} />;
}
