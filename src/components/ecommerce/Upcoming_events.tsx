import menu from "../../icons/menu.svg";


export default function Upcoming_events() {
  return (
    <div className="rounded-xl p-4 bg-white shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <p className="text-lg font-medium">Upcoming Schedule</p>
        <p className="text-sm text-gray-500">Date</p>
      </div>

      {/* Announcement Content */}
      <p className="font-poppins text-[12px] font-normal leading-[28px] tracking-normal mt-4">
        Priority
      </p>
      <div className="flex justify-between items-center  my-4 bg-[#FAFAFA] p-2 border-1 rounded-xl">
        <div>
          <p className="font-semibold">Review candidate applications</p>
          <p className="text-sm text-gray-500">Today - 11.30 AM</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={menu} alt="Menu Icon" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <p className="font-poppins text-[12px] font-normal leading-[28px] tracking-normal">
        Other
      </p>
      <div className="flex justify-between items-center my-4 bg-[#FAFAFA] p-2 border-1 rounded-xl">
        <div>
          <p className="font-semibold">Interview with candidates</p>
          <p className="text-sm text-gray-500">Today - 10.30 AM</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={menu} alt="Menu Icon" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between items-center my-4 bg-[#FAFAFA] p-2 border-1 rounded-xl">
        <div>
          <p className="font-semibold">
            Short meeting with product designer from IT Departement
          </p>
          <p className="text-sm text-gray-500">Today - 09.15 AM</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={menu} alt="Menu Icon" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="font-poppins font-medium text-[14px] leading-[20px] text-center text-[#FF5151] border-t pt-2">
        Creat a New Schedule
      </div>
    </div>
  );
}
