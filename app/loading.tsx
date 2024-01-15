import React from "react";
import { Loader } from "lucide-react";

export const Icons = {
  spinner: Loader,
};

const loading = () => {
  return <Icons.spinner className="mx-auto h-screen w-10 animate-spin" />;
};

export default loading;
