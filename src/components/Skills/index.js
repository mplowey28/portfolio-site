import {
  Backend,
  Frontend,
  SkillsContainer,
  SkillsH1,
  SkillsWrapper,
  Language,
  SkillsH2,
  Img,
  IconTextContainer,
  LineContainer,
  TextContainer,
  Version,
  Tools,
} from "./SkillsElements";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Skills</SkillsH1>
      <SkillsWrapper>
        <Language>
          <SkillsH2>Programming Languages</SkillsH2>
          <IconTextContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/javascript.png" />
              <TextContainer>JavaScript</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/typescript.png" />
              <TextContainer>TypeScript</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/html-5.png" />
              <TextContainer>HTML5</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/css3.png" />
              <TextContainer>CSS3</TextContainer>
            </LineContainer>
          </IconTextContainer>
        </Language>
        <Frontend>
          <SkillsH2>Frontend</SkillsH2>
          <IconTextContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/plasticine/react.png" />
              <TextContainer>React/React Native</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/redux.png" />
              <TextContainer>Redux</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://www.chartjs.org/docs/latest/favicon.ico" />
              <TextContainer>Chart.js</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/344/sass-avatar.png" />
              <TextContainer>SASS</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://styled-components.com/logo.png" />
              <TextContainer>Styled-components</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/material-ui.png" />
              <TextContainer>Material-UI</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" />
              <TextContainer>Tailwind css</TextContainer>
            </LineContainer>
          </IconTextContainer>
        </Frontend>
        <Backend>
          <SkillsH2>Backend</SkillsH2>
          <IconTextContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/fluent/node-js.png" />
              <TextContainer>Node.js/Express</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/amazon-web-services.png" />
              <TextContainer>AWS</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/firebase.png" />
              <TextContainer>FireBase</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/mongodb.png" />
              <TextContainer>MongoDB</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/postgreesql.png" />
              <TextContainer>PostgreSQL</TextContainer>
            </LineContainer>
          </IconTextContainer>
        </Backend>
        <Version>
          <SkillsH2>Version Control</SkillsH2>
          <IconTextContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/git.png" />
              <TextContainer>Git</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/material-sharp/github.png" />
              <TextContainer>Github</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/gitlab.png" />
              <TextContainer>Gitlab</TextContainer>
            </LineContainer>
          </IconTextContainer>
        </Version>
        <Tools>
          <SkillsH2>Tools and Technologies</SkillsH2>
          <IconTextContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/visual-studio-code-2019.png" />
              <TextContainer>VS Code</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/npm.png" />
              <TextContainer>NPM</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/external-yarn-fast-reliable-and-secure-dependency-management-web-portal-logo-color-tal-revivo.png" />
              <TextContainer>Yarn</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/color/docker.png" />
              <TextContainer>Docker</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-shadow-tal-revivo.png" />
              <TextContainer>Jest</TextContainer>
            </LineContainer>
            <LineContainer>
              <Img src="https://testing-library.com/img/octopus-64x64.png" />
              <TextContainer>React Testing Library</TextContainer>
            </LineContainer>
            <LineContainer>
              <TextContainer>TDD</TextContainer>
            </LineContainer>
            <LineContainer>
              <TextContainer>Agile work methods</TextContainer>
            </LineContainer>
          </IconTextContainer>
        </Tools>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
