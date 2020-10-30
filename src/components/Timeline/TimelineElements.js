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

export const LinkContainer = styled.div`
	max-width: 80%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-top: 20px;
`;

export const GithubContainer = styled.a`
	font-size: 1em;
	color: #020104;
	text-decoration: none;
	border-radius: 4px;
	box-shadow: 0 0 5px #787878;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
	height: 30px;
	width: 150px;
	cursor: pointer;

	a:hover,
	a:visited,
	a:link,
	a:active {
		text-decoration: none;
		color: #2e2e2e;
	}
`;
export const LiveDemoContainer = styled.a`
	font-size: 1em;
	color: #020104;
	text-decoration: none;
	border-radius: 4px;
	box-shadow: 0 0 5px #787878;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
	height: 30px;
	width: 150px;
	cursor: pointer;

	a:hover,
	a:visited,
	a:link,
	a:active {
		text-decoration: none;
		color: #2e2e2e;
	}
`;
