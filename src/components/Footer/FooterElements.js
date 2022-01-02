import styled from "styled-components";
import FooterImg from "../../assests/images/footer.svg";

export const FooterContainer = styled.div`
  background: var(--color-background);
`;
export const FooterWrapper = styled.div`
  position: relative;
  background: url(${FooterImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;
export const LinksWrapper = styled.div`
  justify-content: center;
  align-items: center;
`;
export const FooterInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  bottom: 10px;
`;
export const FooterText = styled.h2`
  color: #f7f7f6;
`;
export const LinkedIn = styled.img`
  height: 40px;
  width: 40px;
`;
export const GitHub = styled.img`
  height: 40px;
  width: 40px;
`;

export const Telescope = styled.img`
  position: absolute;
  right: 40px;
  bottom: 80px;
  width: 100px;
  height: 100px;
`;
