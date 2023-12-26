import { useState } from "react";

interface Props {
  children: string;
  maxLetterOnCollapsed?: number;
}

const ExpandableText = ({ children, maxLetterOnCollapsed = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxLetterOnCollapsed) return <p>{children}</p>;

  const text = isExpanded
    ? children
    : children.substring(0, maxLetterOnCollapsed);

  return (
    <>
      <p>
        {" "}
        {text}
        <button
          style={{ marginLeft: "5px" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Less" : "More"}
        </button>
      </p>
    </>
  );
};
export default ExpandableText;
