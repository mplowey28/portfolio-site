import React from "react";
import {
	SkillsContainer,
	SkillsH1,
	SkillsWrapper,
	SkillsCard,
	SkillsH2,
	IconTextContainer,
	LineContainer,
	IconContainer,
	TextContainer,
} from "./SkillsElements";
import {
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiReact,
	SiRedux,
	SiReactrouter,
	SiSass,
	SiStyledComponents,
	SiNodeDotJs,
	SiFirebase,
	SiMongodb,
	SiPostgresql,
	SiGit,
	SiVisualstudiocode,
	SiMocha,
	SiJest,
	SiMaterialUi,
} from "react-icons/si";

const Skills = () => {
	return (
		<SkillsContainer id='skills'>
			<SkillsH1>Skills</SkillsH1>
			<SkillsWrapper>
				<SkillsCard>
					<SkillsH2>Programming Languages</SkillsH2>
					<IconTextContainer>
						<LineContainer>
							<IconContainer>
								<SiJavascript />
							</IconContainer>
							<TextContainer>JavaScript</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiTypescript />
							</IconContainer>
							<TextContainer>TypeScript</TextContainer>
						</LineContainer>
					</IconTextContainer>
					<SkillsH2>Frontend</SkillsH2>
					<IconTextContainer>
						<LineContainer>
							<IconContainer>
								<SiHtml5 />
							</IconContainer>
							<TextContainer>HTML5</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiCss3 />
							</IconContainer>
							<TextContainer>CSS3</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiReact />
							</IconContainer>
							<TextContainer>React/React Native</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiRedux />
							</IconContainer>
							<TextContainer>Redux</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiReactrouter />
							</IconContainer>
							<TextContainer>React Router</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiSass />
							</IconContainer>
							<TextContainer>SASS</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiStyledComponents />
							</IconContainer>
							<TextContainer>Styled Components</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiMaterialUi />
							</IconContainer>
							<TextContainer>Material-UI</TextContainer>
						</LineContainer>
					</IconTextContainer>
				</SkillsCard>
				<SkillsCard>
					<SkillsH2>Backend</SkillsH2>
					<IconTextContainer>
						<LineContainer>
							<IconContainer>
								<SiNodeDotJs />
							</IconContainer>
							<TextContainer>Node.js/Express</TextContainer>
						</LineContainer>
					</IconTextContainer>
					<SkillsH2>Databases</SkillsH2>
					<IconTextContainer>
						<LineContainer>
							<IconContainer>
								<SiFirebase />
							</IconContainer>
							<TextContainer>FireBase</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiMongodb />
							</IconContainer>
							<TextContainer>MongoDB</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiPostgresql />
							</IconContainer>
							<TextContainer>PostgreSQL</TextContainer>
						</LineContainer>
					</IconTextContainer>
				</SkillsCard>
				<SkillsCard>
					<SkillsH2>Version Control</SkillsH2>
					<IconTextContainer>
						<LineContainer>
							<IconContainer>
								<SiGit />
							</IconContainer>
							<TextContainer>Git</TextContainer>
						</LineContainer>
					</IconTextContainer>
					<SkillsH2>Tools and Technologies</SkillsH2>
					<IconTextContainer>
						<LineContainer>
							<IconContainer>
								<SiVisualstudiocode />
							</IconContainer>
							<TextContainer>VS Code</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiMocha />
							</IconContainer>
							<TextContainer>Mocha</TextContainer>
						</LineContainer>
						<LineContainer>
							<IconContainer>
								<SiJest />
							</IconContainer>
							<TextContainer>Jest</TextContainer>
						</LineContainer>
						<LineContainer>
							<TextContainer>TDD</TextContainer>
						</LineContainer>
						<LineContainer>
							<TextContainer>Agile work methods</TextContainer>
						</LineContainer>
					</IconTextContainer>
				</SkillsCard>
			</SkillsWrapper>
		</SkillsContainer>
	);
};

export default Skills;
