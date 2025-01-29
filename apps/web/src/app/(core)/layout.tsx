import type React from "react";
import getCurrentUser from "@rizrmdhn/auth/sessions";
import { redirect } from "next/navigation";

interface CoreLayoutProps {
  children: React.ReactNode;
}

export default async function CoreLayout({ children }: CoreLayoutProps) {
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return children;
}
