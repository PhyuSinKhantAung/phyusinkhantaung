import React from "react";

const title = ({ title, withUnderline = true, ...props }: any) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold " {...props}>
        {title}
      </h1>

      {withUnderline && <div className="my-2 h-[1px] w-10 bg-foreground"></div>}
    </div>
  );
};

export default title;
