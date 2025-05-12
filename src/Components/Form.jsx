import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [main, setMain] = useState([]);
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
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
        After submiting Data Open Console
      </h1>
      {isSubmitting ? (
        <div className="text-center text-4xl font-bold mt-5">
          Data is being sent to Admin. Please wait and check the console.
          <span className="spinner-grow"></span>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center flex-col lg:p-5 sm:p-2 px-3 py-2 bg-indigo-200">
            <div className="w-full lg:w-[50%] bg-gray-200 p-3 rounded-t-2xl space-y-2">
              <div className="text-xl">Enter Username</div>
              <input
                {...register("username", {
                  required: { value: true, message: "This field is required" },
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letter are required ",
                  },
                  maxLength: {
                    value: 8,
                    message: "Maximum 8 letters are required ",
                  },
                })}
                className="btn bg-white text-2xl w-full"
                type="text"
              />
              {errors.username && (
                <div className="text-red-600 font-bold">
                  {errors.username.message}
                </div>
              )}
            </div>

            <div className="w-full lg:w-[50%] bg-gray-200 p-3 space-y-2">
              <div className="text-xl">Enter Password</div>
              <input
                {...register("password", {
                  required: { value: true, message: "This field is required" },
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters are required!",
                  },
                  maxLength: {
                    value: 8,
                    message: "Maximum 8 letters are allowed!",
                  },
                })}
                className="btn bg-white text-2xl w-full"
                type="password"
              />
              {errors.password && (
                <div className="text-red-600 font-bold">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className="w-full lg:w-[50%] bg-gray-200 p-3 space-y-2">
              <div className="text-xl">Enter Birth-Date</div>
              <input
                {...register("BOD", {
                  required: true,
                })}
                className="btn bg-white text-2xl w-full"
                type="date"
              />
            </div>
            <div className="w-full lg:w-[50%] rounded-b-2xl bg-gray-200 p-3 space-y-2">
              <button
                className="bg-indigo-500 py-2 text-white rounded-xl text-2xl w-full"
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length >= 0}
              >
                Submit
              </button>
            </div>
            {/* {isSubmitting && <div> Loading ... </div>} */}
          </div>
        </form>
      )}

      <div className="text-center text-2xl font-bold mt-5 space-y-3">
        <p>
          This process is working with{" "}
          <span className="text-red-500">network speed</span>{" "}
        </p>
        <p>
          but for practice this process is done with{" "}
          <span className="text-red-500">setTimeout</span>
        </p>
      </div>
    </>
  );
};

export default Form;
