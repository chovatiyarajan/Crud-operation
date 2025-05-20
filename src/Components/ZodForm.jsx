import React from "react";

const ZodForm = () => {
  return (
    <div>
      <form> 
        <div className="flex flex-col text-2xl my-4 sm:m-5 space-y-8 py-5 bg-black text-white">
          <div className="flex flex-col sm:flex-row items-center space-x-5">
            <label className="py-2 px-4 lg:w-[15%]" htmlFor="fnmae">Enter Firstname</label>
            <input className="w-[80%] bg-gray-300 form-control text-black " type="text" placeholder="Username" />
          </div>

          <div className="flex flex-col sm:flex-row items-center space-x-5">
            <label className="py-2 px-4 lg:w-[15%]" htmlFor="lname">Enter Lastname</label>
            <input className="w-[80%] bg-gray-300 form-control text-black " type="text" placeholder="Username" />
          </div>

          <div className="flex flex-col sm:flex-row items-center space-x-5">
            <label className="py-2 px-4 lg:w-[15%]" htmlFor="username">Enter DOB</label>
            <input className="w-[80%] bg-gray-300 form-control text-black " type="Date" placeholder="Date Of Birth" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ZodForm;
