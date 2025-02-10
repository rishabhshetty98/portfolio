import React, { ReactNode } from "react";
import "./Card.css";

interface Props {
  children: ReactNode;
  className?: string;
  substructure?: "table" | "text";
  title: string;
}

const Card = ({ className, children, substructure = "text", title }: Props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-body">
          <div className="card-text">{children}</div>

          {/* <p className="card-text">{children}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
