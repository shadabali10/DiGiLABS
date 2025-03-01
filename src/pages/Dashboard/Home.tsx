import EcommerceMetrics from "../../components/ecommerce/Main_Menu";
import Announcement from "../../components/ecommerce/Announcement";
import Recently_Activity from "../../components/ecommerce/Recently_Activity";
import PageMeta from "../../components/common/PageMeta";
import Upcoming_events from "../../components/ecommerce/Upcoming_events";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Left Column */}
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
          <Announcement />
        </div>

        {/* Right Column */}
        <div className="col-span-12 xl:col-span-5 space-y-6">
          <Recently_Activity />
          <Upcoming_events />{" "}
          {/* Now placed correctly below Recently Activity */}
        </div>
      </div>
    </>
  );
}
