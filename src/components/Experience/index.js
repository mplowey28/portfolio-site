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
import Salt from "../../assests/images/salt.jpg";

const Experience = () => {
	return (
		<ExperienceContainer id='experience'>
			<ExperienceH1>Experience</ExperienceH1>
			<ExperienceWrapper>
				<ExperienceCard>
					<ExperienceImg src={Salt} alt='salt logo' />
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
