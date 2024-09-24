import React from "react";

export default function NotAvailable() {
  return (
    <div className="flex flex-row items-center justify-center pt-10 px-2">
      <h1 className="font-bold text-2xl md:text-3xl text-black mt-2">
        Sorry! This Service is not available right now... 😢
      </h1>
    </div>
  );
}
