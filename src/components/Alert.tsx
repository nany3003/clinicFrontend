import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  description: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}
const Alert = ({ title, description, color = "warning" }: Props) => {
  return (
    <div
      className={`alert alert-${color} alert-dismissible fade show`}
      role="alert"
    >
      <strong> {title} </strong> {description}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
export default Alert;
