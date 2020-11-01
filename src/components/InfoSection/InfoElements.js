import styled from "styled-components";

export const InfoContainer = styled.div`
	color: #bebab4;
	background: #020104;
	overflow: hidden;
`;

export const InfoWrapper = styled.div`
	height: 600px;
	display: grid;
	z-index: 1;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;

	@media screen and (max-width: 768px) {
		height: 800px;
	}
`;

export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2 col1'` : `'col1 col2'`};

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
	}
`;

export const Column1 = styled.div`
	grid-area: col1;
`;

export const Column2 = styled.div`
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
`;

export const Heading = styled.h1`
	margin-bottom: -80px;
	padding-top: 40px;
	font-size: 2.5rem;
	color: #f7f7f6;
	text-align: center;

	@media screen and (max-width: 768px) {
		margin-bottom: 10px;
	}

	@media screen and (max-width: 480px) {
		font-size: 2rem;
		margin-top: 40px;
	}
`;

export const SubTitle = styled.p`
	max-width: 440px;
	font-size: 18px;
	line-height: 24px;
	color: #bebab4;

	@media screen and (max-width: 768px) {
		text-align: center;
		padding: 0 10px;
	}
`;

export const ImgWrap = styled.div`
	max-width: 300px;
	margin: auto;
	height: 100%;
`;

export const Img = styled.img`
	border-radius: 50%;
	border: 2px solid #f7f7f6;
	width: 100%;
`;
