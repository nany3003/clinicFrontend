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
  onClose: () => void;
}
const Alert = ({ title, description, onClose, color = "warning" }: Props) => {
  return (
    <div
      className={`alert alert-${color} alert-dismissible fade show`}
      role="alert"
    >
      <strong> {title} </strong> {description}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};
export default Alert;
