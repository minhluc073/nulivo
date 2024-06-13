import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import WidgetCount from "@/components/sections/WidgetCount";
import Featured from "@/components/sections/Featured";

export default function Home() {
  return (
    <>
      <Layout loggedIn>
        <Banner />
        <WidgetCount />
        <Featured />
      </Layout>
    </>
  );
}
