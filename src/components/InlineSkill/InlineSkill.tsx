import "./InlineSkill.css";

interface Props {
  color?: string;
  section: string;
  skills: string[];
}

const InlineSkill = ({ color = "primary", section, skills }: Props) => {
  const divStyle = {
    padding: "3px",
  };
  return (
    <>
      <div style={divStyle}>
        {skills.map((skill, index) => (
          <a
            id={`${String(section)}-${index}`}
            className={`btn btn-${color} gradient_backend`}
            key={index}
            href="#"
          >
            {skill}
          </a>
        ))}
      </div>
    </>
  );
};

export default InlineSkill;
