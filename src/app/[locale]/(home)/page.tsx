import Stack from "@mui/material/Stack";
import {useTranslations} from "next-intl";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import Heading from "../../../components/Heading";
import GuestForm from "@/cartons/login/GuestForm";

export async function generateMetadata({params: {locale}}: { params: { locale: string } }) {
  const t = await getTranslations({locale, namespace: "Home.Metadata"});
  return {
    title: t("title"),
    description: t("description")
  };
}

export default function Home({params: {locale}}: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Home");

  return (
    <Stack sx={{
      justifyContent: "center"
    }}>
      <Stack sx={{
        alignItems: 'center',
        my: 5,
        '& h2': {
          textAlign: 'center'
        }
      }}>
        <Heading type="h1" text={t("title")}/>
        <Heading type="h2" text={t("subTitle")}/>
      </Stack>

      <GuestForm/>
    </Stack>
  );
}
