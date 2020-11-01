import styled from "styled-components";

export const ContactContainer = styled.div`
	height: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #020104;

	@media screen and (max-width: 768px) {
		height: 500px;
	}

	@media screen and (max-width: 480px) {
		height: 500px;
	}
`;

export const ContactH1 = styled.h1`
	margin-top: 20px;
	font-size: 2.5rem;
	color: #f7f7f6;

	@media screen and (max-width: 768px) {
		margin-bottom: 20px;
	}

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;
export const ContactForm = styled.form`
	background: #020104;
	max-width: 400px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 20px 32px;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgb(0, 0, 0, 0.9);

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const ContactInput = styled.input`
	padding: 16px 16px;
	margin-bottom: 16px;
	border: none;
	border-radius: 4px;
`;

export const ContactTextArea = styled.textarea`
	border-radius: 4px;
	border: none;
	padding: 4px;
	line-height: 16px;
	font-size: 14px;
	line-height: 16px;
	font-size: 14px;
	height: 100px;
`;
export const FormButton = styled.button`
	background: ${({ primary }) => (primary ? "#f7f7f6" : "#bebab4")};
	margin-top: 16px;
	padding: 16px 0;
	border: none;
	border-radius: 4px;
	color: #020104;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#bebab4" : "#f7f7f6")};
	}
`;
