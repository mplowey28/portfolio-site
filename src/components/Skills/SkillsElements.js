import styled from "styled-components";

export const SkillsContainer = styled.div`
	height: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #020104;

	@media screen and (max-width: 768px) {
		height: 900px;
	}

	@media screen and (max-width: 480px) {
		height: 1000px;
	}
`;

export const SkillsWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const SkillsCard = styled.div`
	background: #f7f7f6;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	max-height: 340px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const SkillsH1 = styled.h1`
	font-size: 2.5rem;
	color: #f7f7f6;
	margin-bottom: 20px;

	@media screen and (max-width: 768px) {
		margin-bottom: 20px;
	}

	@media screen and (max-width: 480px) {
		font-size: 2rem;
		margin-top: 40px;
	}
`;

export const SkillsH2 = styled.h2`
	font-size: 1rem;
	margin: 10px 0;
`;

export const IconTextContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-content: center;
`;
export const LineContainer = styled.div`
	display: flex;
	align-content: center;
	justify-content: flex-start;
`;

export const IconContainer = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;
	margin-right: 5px;
`;

export const TextContainer = styled.p`
	display: flex;
	align-content: center;
	justify-content: center;
	text-align: center;
`;
