import styled from 'styled-components'
import FooterImg from '../../assests/images/footer.svg'

export const FooterContainer = styled.div`
  background: transparent;
`
export const FooterWrapper = styled.div`
  position: fixed;
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
  bottom: 0;
  @media screen and (max-width: 1000px) {
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    height: 230px;
  }
`
export const LinksWrapper = styled.div`
  justify-content: center;
  align-items: center;
`
export const FooterInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  bottom: 10px;
`
export const FooterText = styled.h2`
  color: var(--color-highlight);
`
export const LinkedIn = styled.img`
  height: 40px;
  width: 40px;
`
export const GitHub = styled.img`
  height: 40px;
  width: 40px;
`

export const Telescope = styled.img`
  position: absolute;
  right: 50px;
  bottom: 70px;
  width: 40px;
  height: 40px;
`
