export default function Recently_Activity() {
  return (
    <div className="bg-[#161E54] p-4 rounded-xl text-white">
      <h1 className="bg-[#1B204A] ">Recently Activity</h1>
      <h6 className="p-1 my-2 font-roboto font-medium text-[10px] leading-[11.72px] opacity-60 w-[340px] h-[12px]">10:40 AM, Fri 10 Sept 2021</h6>
      <h3 className="p-1 my-2 font-poppins font-medium text-[18px] leading-[28px] tracking-[0%]">You Posted a New Job</h3>
      <h4 className="p-1 my-2 font-roboto font-normal text-[14px] leading-[20px] tracking-[0%]">
        Kindly check the requirements and terms of work and make sure everything is right.
      </h4>
      <div className="p-1 my-4 flex justify-between">
        <p className="font-poppins font-normal text-[14px] leading-[21px] tracking-[0%]">Today you made 12 Activities</p>
        <button  className="py-2 px-4 font-poppins font-medium text-[14px] leading-[21px] text-center bg-[#FF5151] rounded-l">See All Activity</button>
      </div>
    </div>
  );
}
