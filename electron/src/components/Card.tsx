import React from "react";

export const Card = ({ content }: { content: string }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md">
      <div className="px-5 pb-5 flex flex-col justify-center items-center">
          Permit Type
          <span className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
          {content}
          </span>
      </div>
    </div>
  );
};
