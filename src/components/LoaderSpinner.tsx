import { FC } from "react";

interface LoaderSpinnerProps {
  type?: string;
  color?: string;
  props?: any;
}

export const LoaderSpinner: FC<LoaderSpinnerProps> = ({ type = "spinner-border", color = "text-dark", props }) => {
  return (
    <div className={`${type} ${color}`} role="status" {...props}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
