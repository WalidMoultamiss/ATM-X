import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  ProgressSize?: number;
};

export const LoadingDiv: FC<Props> = ({
  children,
  loading = false,
  className = "",
  ProgressSize = 50,
}) => {
  return (
    <div className={` relative ${className}`}>
      {loading && (
        <div className="w-full h-full absolute flex justify-center items-center top-0 left-0 bg-white bg-opacity-50  ">
          <CircularProgress size={ProgressSize} className="m-auto" />
        </div>
      )}
      {children}
    </div>
  );
};
