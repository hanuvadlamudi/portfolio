import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard" >
          <Image
            src="./assets/profile.jpg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Hanumantha Rao</strong> a passionate tech enthusiast with strong
              problem-solving and aptitude-solving
              skills. Proficient in Java and
              experience with a variety of programming
              frameworks and libraries. Strong understanding of object-oriented
              programming concepts. Proven ability to
              solve complex problems quickly and
              efficiently, with excellent analytical and
              logical skills.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
