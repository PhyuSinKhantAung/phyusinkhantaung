import React from "react";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-20 xl:max-w-4xl">{children}</div>;
};

export default ContentLayout;
