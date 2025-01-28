import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  substructure?: "table" | "text";
  title: string;
}

const Card = ({ substructure = "text", title, children }: Props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-body">
          <p className="card-text">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
