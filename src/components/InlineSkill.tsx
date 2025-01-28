import React from "react";

interface Props {
  color?: string;
  id?: string;
  skills: string[];
}

const InlineSkill = ({ color = "primary", id, skills }: Props) => {
  return (
    <>
      <div>
        {skills.map((skill) => (
          <a className={"btn btn-" + color} href="#">
            {skill}
          </a>
        ))}
      </div>
    </>
  );
};

export default InlineSkill;
