import menu from "../../icons/menu.svg";
import pinned from "../../icons/pinned.svg";

export default function Announcement() {
  return (
    <div className="rounded-xl p-4 bg-white shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <p className="text-lg font-medium">Announcement</p>
        <p className="text-sm text-gray-500">Date</p>
      </div>

      {/* Announcement Content */}
      <div className="flex justify-between items-center  my-4 bg-[#FAFAFA] p-2 border-1 rounded-xl">
        <div>
          <p className="font-semibold">Outing schedule for every department</p>
          <p className="text-sm text-gray-500">5 Minutes ago</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={pinned} alt="Pinned Icon" className="w-5 h-5" />
          <img src={menu} alt="Menu Icon" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between items-center my-4 bg-[#FAFAFA] p-2 border-1 rounded-xl">
        <div>
          <p className="font-semibold">Meeting HR Department</p>
          <p className="text-sm text-gray-500">Yesterday, 12:30 PM</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={pinned} alt="Pinned Icon" className="w-5 h-5" />
          <img src={menu} alt="Menu Icon" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between items-center my-4 bg-[#FAFAFA] p-2 border-1 rounded-xl">
        <div>
          <p className="font-semibold">
            IT Department need two more talents for UX/UI Designer position
          </p>
          <p className="text-sm text-gray-500">Yesterday, 09:15 AM</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={pinned} alt="Pinned Icon" className="w-5 h-5" />
          <img src={menu} alt="Menu Icon" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="font-poppins font-medium text-[14px] leading-[20px] text-center text-[#FF5151] border-t pt-2">
        see all sections
      </div>
    </div>
  );
}
