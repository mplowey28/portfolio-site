import styled from "styled-components";

export const ContactForm = styled.form`
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  -webkit-backdrop-filter: blur(2px);
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 1rem;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 400px) {
    padding: 30px;
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
  padding: 16px 16px;
  line-height: 16px;
  font-size: 14px;
  line-height: 16px;
  font-size: 14px;
  height: 100px;
`;
export const FormButton = styled.button`
  background: var(--color-text);
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
