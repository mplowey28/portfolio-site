import React from "react";
import {
	ExperienceContainer,
	ExperienceWrapper,
	ExperienceH1,
	ExperienceCard,
	ExperienceImg,
	ExperienceH2,
	ExperienceP,
} from "./ExperienceElements";

const Experience = () => {
	return (
		<ExperienceContainer id='experience'>
			<ExperienceH1>Experience</ExperienceH1>
			<ExperienceWrapper>
				<ExperienceCard>
					<ExperienceH2>
						Full Stack JavaScript - School of Applied Technology &lt;/salt&gt;
					</ExperienceH2>
					<ExperienceP>
						Intensive three month training program for full stack web
						development with a focus on TDD, mob programming, and applied
						learning.
					</ExperienceP>
				</ExperienceCard>
			</ExperienceWrapper>
		</ExperienceContainer>
	);
};

export default Experience;
