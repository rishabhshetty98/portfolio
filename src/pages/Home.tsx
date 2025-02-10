import React from "react";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import InlineSkill from "../components/InlineSkill/InlineSkill";
import "./Home.css";

const Home = () => {
  const intro =
    "I am Rishabh Shetty, a software developer with a penchant for AI.";
  const skillset1 = ["Python", "C++", "FastAPI", "Django", "Flask"];
  const skillset4 = ["Docker", "Kubernetes"];
  const skillset2 = ["Javascript/Typescript", "ReactJS"];
  const skillset3 = ["HTML", "CSS"];

  return (
    <div className="parent">
      <Card title="About Me">{intro}</Card>
      <Card title="Skills">
        <p>Tech Stack</p>
        <InlineSkill section="Backend" skills={skillset1} />
        <InlineSkill section="Scipting" skills={skillset2} />
        <InlineSkill section="Web" skills={skillset3} />
        <InlineSkill section="Containerization" skills={skillset4} />
      </Card>

      <Card title="Experience">{intro}</Card>
      <Card title="Dowload Resume">
        <p>To know more about me, feel free to take a look at my resume.</p>
        <Button children="Download" onClick={() => console.log("Clicked")} />
      </Card>
    </div>
  );
};

export default Home;
