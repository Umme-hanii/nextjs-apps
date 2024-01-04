"use client";
import { Toaster } from "react-hot-toast";

const providers = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default providers;
