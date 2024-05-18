import React from "react";

const title = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold ">{title}</h1>
      <div className="my-2 h-[1px] w-10 bg-foreground"></div>
    </div>
  );
};

export default title;
