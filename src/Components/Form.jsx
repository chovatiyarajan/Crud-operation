import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validation } from "../utils/validationSchema";

const Form = () => {
  const [main, setMain] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(validation),
  });

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    console.log("SUBMIT CALLED 🚨");
    console.log("Submitted Data ✅:", data);
    await delay(4);
    const newData = [...main, data];
    setMain(newData);
    console.log(newData);
    console.log("Updated State 🗂️:", newData);
    reset();
  };

  return (
    <>
      <h1 className="text-3xl text-center mt-2">
        After submitting Data, Open Console
      </h1>
      {isSubmitting ? (
        <div className="text-center text-4xl font-bold mt-5">
          Data is being sent to Admin. Please wait and check the console.
          <span className="spinner-grow"></span>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center flex-col lg:p-5 sm:p-2 px-3 py-2 bg-indigo-200">
            {/* Username Input */}
            <div className="w-full lg:w-[50%] bg-gray-200 p-3 rounded-t-2xl space-y-2">
              <div className="text-xl">Enter Username</div>
              <input
                {...register("username")}
                className="btn bg-white text-2xl w-full"
                type="text"
              />
              {errors.username && (
                <div className="text-red-600 font-bold">
                  {errors.username.message}
                </div>
              )}
            </div>

            {/* Password Input */}
            <div className="w-full lg:w-[50%] bg-gray-200 p-3 space-y-2">
              <div className="text-xl">Enter Password</div>
              <input
                {...register("password")}
                className="btn bg-white text-2xl w-full"
                type="password"
              />
              {errors.password && (
                <div className="text-red-600 font-bold">
                  {errors.password.message}
                </div>
              )}
            </div>

            {/* Date of Birth Input */}
            <div className="w-full lg:w-[50%] bg-gray-200 p-3 space-y-2">
              <div className="text-xl">Enter Birth-Date</div>
              <input
                {...register("DOB")}
                className="btn bg-white text-2xl w-full"
                type="date"
                name="DOB"
              />
              {errors.DOB && (
                <div className="text-red-600 font-bold">
                  {errors.DOB.message} 
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="w-full lg:w-[50%] rounded-b-2xl bg-gray-200 p-3 space-y-2">
              <button
                className="bg-indigo-500 py-2 text-white rounded-xl text-2xl w-full"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="text-center text-2xl font-bold mt-5 space-y-3">
        <p>
          This process is working with{"  "}
          <span className="text-red-500">network speed</span>{" "}
        </p>
        <p>
          but for practice, this process is done with{" "}
          <span className="text-red-500">setTimeout</span>
        </p>
      </div>
    </>
  );
};

export default Form;
