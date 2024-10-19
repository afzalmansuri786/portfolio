import { Container } from "./styles";
import Avatar from "../../assets/3d-avatar.jpg";
import awsIcon  from "../../assets/aws-2.svg";
import nestIcon  from "../../assets/nestjs.svg";
import graphQlIcon  from "../../assets/graphql-logo-2.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { AboutDataPropsInput } from "./about.interfaces";

export function About( aboutData: AboutDataPropsInput) {

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        {aboutData?.aboutData.length && aboutData?.aboutData.map((value: string, index: number) => (
          <ScrollAnimation key={index} animateIn="fadeInLeft" delay={(index + 1) * 200}>
              {index === 3 ? <h1  style={{ padding:"1rem 0rem"}}>{value}</h1> : <p  style={{ padding:"1rem 0rem"}}>{value}</p>}
          </ScrollAnimation>
        ))}
        <div className="hard-skills">
          {[awsIcon, graphQlIcon, nestIcon, reactIcon, typescriptIcon, nodeIcon, jsIcon].map((icon, index) => (
            <div className="hability" key={index}>
              <ScrollAnimation animateIn="fadeInUp" delay={(index + 1) * 100}>
                <img src={icon} alt={icon?.split('/').pop().split('.')[0] ?? icon} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={200}>
          <img src={Avatar} alt="Afzal Mansuri" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
