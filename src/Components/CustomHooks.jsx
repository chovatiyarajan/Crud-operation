// import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";

const CustomHooks = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  console.log(data)

  return (
    <>
      <div className="bg-gray-500 mt-3 text-center">
          <div className="text-2xl font-bold text-black">bellow Code is working With useFatch hook</div>
        <div className="p-3">
          {loading ? (
            <div className="text-center">
              <p className="text-3xl">
                Data is Loading <span className="spinner-grow"></span>
              </p>
            </div>
          ) : data?.length ? (
            data?.map((item) => <p key={item.id} className="text-white">{item.title} and <span className="text-red-700">{String(item.completed)}</span></p>)
          ) : (
            <div className="text-center text-red-600  space-y-5">
              <h1 className="text-3xl font-bold">Error 404 </h1>
              <p className="text-2xl">Data Not Found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomHooks;
