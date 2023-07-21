const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full relative">
      <article className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div className="text-white">Hello Sidebar</div>
      </article>
    </section>
  );
};

export default DashboardLayout;
