import React from "react";
import Card from "../components/Card/Card";

const Portfolio = () => {
  return (
    <div className="parent">
      <Card title="project1">
        <iframe
          src="https://github.dev/rishabhshetty98/portfolio"
          width="100%"
          height="500px"
          style={{ border: "none" }}
        ></iframe>
      </Card>
    </div>
  );
};

export default Portfolio;
