import { getApiLimitCount } from "@/lib/api-limit";
import Navbar from "../../components/navbar";
import Sidebar from "@/components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genius | Dashboard",
  description: "AI Dashboard page"
}
const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <section className="relative h-full">
      <article className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount} />
      </article>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
