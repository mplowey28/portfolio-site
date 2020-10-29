import React from "react";
import {
	SkillsContainer,
	SkillsH1,
	SkillsWrapper,
	SkillsCard,
	SkillsImg,
	SkillsH2,
	SkillsP,
} from "./SkillsElements";

const Skills = () => {
	return (
		<SkillsContainer id='skills'>
			<SkillsH1>Skills</SkillsH1>
			<SkillsWrapper>
				<SkillsCard>
					<SkillsImg />
					<SkillsH2>Project 1</SkillsH2>
					<SkillsP>Todo List made with TypeScript</SkillsP>
				</SkillsCard>
				<SkillsCard>
					<SkillsImg />
					<SkillsH2>Project 2</SkillsH2>
					<SkillsP>Todo List made with TypeScript</SkillsP>
				</SkillsCard>
				<SkillsCard>
					<SkillsImg />
					<SkillsH2>Project 3</SkillsH2>
					<SkillsP>Todo List made with TypeScript</SkillsP>
				</SkillsCard>
			</SkillsWrapper>
		</SkillsContainer>
	);
};

export default Skills;
