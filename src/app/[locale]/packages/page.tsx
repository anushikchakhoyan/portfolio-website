import * as React from "react";
import { graphql } from "gatsby";
import loadable from "@loadable/component";
import { useTranslations } from "next-intl";

const MainLayout = loadable(() => import("@features/layout"));
const Packages = loadable(() => import("@features/packages"));
const Seo = loadable(() => import("@features/seo"));

const PackagesPage: React.FC = () => {
  return (
    <MainLayout>
      <Packages />
    </MainLayout>
  )
}

export default PackagesPage;
