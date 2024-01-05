import React from 'react';
import { Loader } from 'lucide-react';

export const Icons = {
  spinner: Loader,
};

const loading = () => {
  return <Icons.spinner className="w-10 animate-spin mx-auto h-screen" />;
};

export default loading;
