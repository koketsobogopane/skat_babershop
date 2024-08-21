import Banner from '@/components/layout/banner';
import Layout from '@/components/layout/layout';
import QuickNav from '@/components/layout/quick-nav';
import ServiceSection from '@/components/layout/service-section';
export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <QuickNav />
        <ServiceSection />
      </Layout>
    </>
  );
}
