import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 50px 30px;
`;

export const ContactH1 = styled.h1`
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
export const ContactForm = styled.form`
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  -webkit-backdrop-filter: blur(2px);
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 1rem;

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
