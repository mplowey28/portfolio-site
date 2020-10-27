import styled from 'styled-components';
import FooterImg from '../../assests/images/footer.svg'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const FooterContainer = styled.div`
    background: url(${FooterImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
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