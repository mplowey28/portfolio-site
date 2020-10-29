import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
	background: #020104;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	min-height: 100vh;
	position: relative;
	z-index: 1;
	overflow: hidden;

	:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;
export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #020104;
`;

const flyby = keyframes`
  from {
    transform: translateX(-100)
  }

  to {
    transform: translateX(4000px)
  }
`;

export const UFO = styled.img`
	z-index: 4;
	background: transparent;
	position: absolute;
	top: 0;
	left: 0;
	height: 40px;
	width: 40px;
	margin-top: 80px;
	animation: ${flyby} 45s linear infinite;
`;
export const HeroContent = styled.div`
	background: transparent;
	z-index: 3;
	max-width: 1200px;
	padding: 100px 24px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
	}
`;
export const HeroContentWrapper = styled.div`
	background: transparent;
	z-index: 3;
	max-width: 600px;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
export const HeroH1 = styled.h1`
	color: #bebab4;
	font-size: 36px;
	padding: 20px;

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}

	@media screen and (max-width: 480px) {
		font-size: 26px;
	}
`;
export const NameSpan = styled.span`
	color: #f7f7f6;
	font-size: 36px;

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}

	@media screen and (max-width: 480px) {
		font-size: 26px;
	}
`;

export const HeroBtnWrapper = styled.div`
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;
export const Moon = styled.img`
	background: transparent;
	height: 300px;
	width: 300px;
`;
