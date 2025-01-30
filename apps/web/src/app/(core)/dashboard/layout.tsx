import { api } from "@/trpc/server";
import type React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  void api.health.get.prefetch();

  return children;
}
