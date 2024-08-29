import React from "react";
import {locales} from "@/localize/config";
import {unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";
import {cookies} from "next/headers";
import {DashboardDictionary} from "@/components/Layout/DashboardLayout";
import DashboardStoreWrapper from "@/app/lib/DashboardStoreWrapper";

type WorkspaceLayoutProps = {
  drawer: React.ReactNode,
  children: React.ReactNode,
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({
                                                           drawer,
                                                           children,
                                                           params: {locale}
                                                         }: WorkspaceLayoutProps) => {
  unstable_setRequestLocale(locale);

  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  const t = useTranslations("Navbar");
  const tDashboardActions = useTranslations("DashboardActions");

  const dictionary: DashboardDictionary = {
    translate: t("translate"),
    closeSideBar: tDashboardActions("closeSideBar")
  }

  return (
    <DashboardStoreWrapper switchThemeLocale={t("switchTheme")}
                           locale={locale}
                           dictionary={dictionary}
                           drawer={drawer}
                           cookieTheme={theme?.value as ("light" | "dark")}>
      {children}
    </DashboardStoreWrapper>
  )
}

export default WorkspaceLayout;
