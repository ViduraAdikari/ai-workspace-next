import React from "react";
import {SiteLayout} from "@/components/Layout";
import {locales} from "@/localize/config";
import {unstable_setRequestLocale} from "next-intl/server";
import {cookies} from "next/headers";
import {useTranslations} from "next-intl";
import {HomeNavbarDictionary} from "@/components/Navbar/NavbarHome";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default function HomeRootLayout({children, params: {locale}}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale);

  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  const t = useTranslations("Navbar");
  const navDictionary: HomeNavbarDictionary = {
    translate: t("translate"),
    switchTheme: t("switchTheme"),
  }

  return (
    <SiteLayout cookieTheme={theme?.value as ("dark" | "light")}
                locale={locale}
                navBarDictionary={navDictionary}>
      {children}
    </SiteLayout>
  )
}
