import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function Main_Menu() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* First Row - 3 Equal Width Divs (Each 33% on md+, full width on sm) */}
      <div className="w-full rounded-2xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 bg-[#ffefe7]">
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Available Position
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              24
            </h4>
            <h4 className="mt-2 text-sm text-[#FF5151]">4 Urgently needed</h4>
          </div>
        </div>
      </div>

      <div className="w-full rounded-2xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 bg-[#E8F0FB]">
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Job Open
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              10
            </h4>
            <h4 className="mt-2 text-sm text-[#3786F1]">4 Active hiring</h4>
          </div>
        </div>
      </div>

      <div className="w-full rounded-2xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 bg-[#FDEBF9]">
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              New Employees
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              24
            </h4>
            <h4 className="mt-2 text-sm text-[#EE61CF]">4 Department</h4>
          </div>
        </div>
      </div>

      {/* Second Row - 2 Equal Width Divs (50% on md+, full width on sm) */}
      <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Total Sales
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                15,890
              </h4>
            </div>
            <Badge color="success">
              <ArrowUpIcon />
              5.98%
            </Badge>
          </div>
        </div>

        <div className="w-full md:w-1/2 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Returns
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                1,298
              </h4>
            </div>
            <Badge color="error">
              <ArrowDownIcon />
              2.89%
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
