import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button
        className={"btn btn-" + color}
        type="submit"
        value="submit"
        color={color}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
