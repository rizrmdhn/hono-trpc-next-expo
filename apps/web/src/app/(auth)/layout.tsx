import type React from "react";
import getCurrentUser from "@rizrmdhn/auth/sessions";
import { redirect } from "next/navigation";

interface AitjLayoutProps {
  children: React.ReactNode;
}

export default async function AitjLayout({ children }: AitjLayoutProps) {
  const { user } = await getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }

  return children;
}
