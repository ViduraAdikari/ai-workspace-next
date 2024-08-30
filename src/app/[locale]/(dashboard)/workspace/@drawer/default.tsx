import {FC, PropsWithChildren} from "react";
import WorkspaceDrawer from "./workspaceDrawer/WorkspaceDrawer";
import {locales} from "@/localize/config";
import {unstable_setRequestLocale} from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

type WorkspaceDrawerProps = {
  params: {locale: string}
}

const DefaultDrawer: FC<WorkspaceDrawerProps> = (props: PropsWithChildren<WorkspaceDrawerProps>) => {
  unstable_setRequestLocale(props.params.locale);

  return <WorkspaceDrawer/>
};

export default DefaultDrawer;
