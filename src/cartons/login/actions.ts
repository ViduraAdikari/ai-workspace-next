"use server";

// import {redirect} from "@/localize/navigation";
import { redirect } from "next/navigation"; // NOTE we have not used @/localize/navigation
import {dashboardNavItems} from "@/const/values";

/**
 * next/navigation works without locale but @/localize/navigation gives the error not found
 * @param locale
 */
export async function redirectToDashboard(locale: string) {
  redirect(locale + "/" + dashboardNavItems.home.link.substring(1));
}
