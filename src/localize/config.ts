// import {Pathnames} from "next-intl/navigation";

export const locales = ["en", "si", "sv"] as const;

export const LocaleLabels: Record<(typeof locales)[number], string> = {
  en: "English",
  si: "Sinhala",
  sv: "Swedish",
};

// export const pathnames = {
//   "/": "/",
//   "/pathnames": {
//     en: "/pathnames",
//     de: "/pfadnamen",
//     cs: "/pathnames",
//   }
// } satisfies Pathnames<typeof locales>;
//
// // Use the default: "always"
export const localePrefix = "always";
//
// export type AppPathnames = keyof typeof pathnames;
