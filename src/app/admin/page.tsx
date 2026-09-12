import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboardView from "@/components/admin/AdminDashboardView";
import { db } from "@/lib/db";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Console | Indiark Entertainments",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("indiark_admin_session")?.value;

  if (sessionToken !== "authenticated_token_2026") {
    redirect("/admin/login");
  }

  const projects = db.getProjects();
  const submissions = db.getSubmissions();
  const buyerRequirements = db.getBuyerRequirements();
  const contactEnquiries = db.getContactEnquiries();

  return (
    <AdminDashboardView
      initialProjects={projects}
      initialSubmissions={submissions}
      initialBuyerRequirements={buyerRequirements}
      initialContactEnquiries={contactEnquiries}
    />
  );
}
