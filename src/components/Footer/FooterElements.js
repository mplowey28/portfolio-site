import styled from 'styled-components';
import FooterImg from '../../assests/images/footer.svg'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Footer = styled.footer`
    background: url(${FooterImg});
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 200px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
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
    right: 10;
    bottom: 10;
    width: 100px;
    height: 100px;
`