import styled from "styled-components";

export const TimelineContainer = styled.div`
	background: #020104;
`;

export const TimelineHeader = styled.div`
	background: #020104;
	height: 200px;
	color: #f7f7f6;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TimelineH1 = styled.h1`
	padding-top: 40px;
	font-size: 2.5rem;
	color: #f7f7f6;
	text-align: center;

	@media screen and (max-width: 768px) {
		padding-bottom: 20px;
	}

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const VideoContainer = styled.div`
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
