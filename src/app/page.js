import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import WidgetCount from "@/components/sections/WidgetCount";
import Featured from "@/components/sections/Featured";
import Template from "@/components/sections/Template";
import Featured2 from "@/components/sections/Featured2";
import RankingSection from "@/components/sections/RankingSec";

export default function Home() {
  return (
    <>
      <Layout loggedIn>
        <Banner />
        <WidgetCount />
        <Featured />
        <Template/>
        <Featured2/>
        <RankingSection/>
      </Layout>
    </>
  );
}
