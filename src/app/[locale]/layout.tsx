import type {Metadata} from "next";
import {Roboto_Slab} from "next/font/google";
import {cookies} from "next/headers";
import {locales} from "@/localize/config";
import {getMessages, unstable_setRequestLocale} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

const roboto = Roboto_Slab({
  weight: ['300', "400", "500", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "AI Workspace",
  description: "Workspace chat app to communicate with text messages among the teammates using channels.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function RootLayout({children, params: {locale}}: {
  children: React.ReactNode,
  params: { locale: string }
}) {

  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang={locale} data-theme={theme?.value as ("dark" | "light")}>
    <body className={roboto.className}>
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  )
}
