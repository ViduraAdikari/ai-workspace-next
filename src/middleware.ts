import {NextRequest, NextResponse} from "next/server";
import {HOME_LINK} from "@/const/values";
import createMiddleware from "next-intl/middleware";
import {localePrefix, locales} from "@/localize/config";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = locales[0];

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
}

/**
 *   return to home with selected locale in the url
 *   eg. request.url = http://localhost:3000/en/workspace
 *   HOME_LINK = /
 */
const getRedirectHomeUrlWithLocale = (request: NextRequest) => {
  return HOME_LINK.split("/")
    .map((slug: string, index: number) => index === 1 ? request.url.split("/")[3] : slug).join("/");
}

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  // Used when no locale matches
  defaultLocale: "en",
  localePrefix,
})

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|si|sv)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
