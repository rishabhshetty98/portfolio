import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import InlineSkill from "../components/InlineSkill";

const Home = () => {
  const intro =
    "I am Rishabh Shetty, a software developer with a penchant for AI.";
  const skillset1 = ["Python", "FastAPI", "Django", "Flask"];
  const skillset5 = ["Docker", "Kubernetes"];
  const skillset2 = ["Javascript/Typescript", "ReactJS"];
  const skillset3 = ["HTML", "CSS"];
  const skillset4 = ["C++"];

  return (
    <>
      <Card title="About Me">{intro}</Card>
      <Card title="Skills">
        <>
          <p>Tech Stack</p>
          <InlineSkill id="Backend" skills={skillset1} />
          <InlineSkill id="Scipting" skills={skillset2} />
          <InlineSkill id="Web" skills={skillset3} />
          <InlineSkill id="cSkill" skills={skillset4} />
          <InlineSkill id="containerSkill" skills={skillset5} />
        </>
      </Card>

      <Card title="Experience">{intro}</Card>
      <Card title="Dowload Resume">
        <>
          <p>To know more about me, feel free to take a look at my resume.</p>
          <Button children="Download" onClick={() => console.log("Clicked")} />
        </>
      </Card>
    </>

    // <div>
    //   <div className="card">
    //     <div className="card-header">
    //       <h2 className="card-title">About Me</h2>
    //     </div>
    //     <div className="card-body">
    //       <p className="card-text">
    //         {"I am a passionate Software Developer with a curiousity of AI."}
    //       </p>
    //     </div>
    //   </div>

    // </div>
  );
};

export default Home;
