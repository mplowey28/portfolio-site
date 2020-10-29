import styled from 'styled-components'

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #020104;

    @media screen and (max-width: 768px) {
        height: 600px;
    }

    @media screen and (max-width: 480px) {
        height: 300px;
    }
`

export const ContactH1 = styled.h1`
    font-size: 2.5rem;
    color: #f7f7f6;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width : 375;
`

export const ContactInput = styled.input`
    border-color: #808080 #C0C0C0 #C0C0C0 #D4D4D4;
    border-style: solid;
    border-width: 1px;
    padding: 4px;
    line-height: 16px;
    font-size: 14px;
    width: 350px;
`

export const ContactTextArea = styled.textarea`
    border-color: #808080 #C0C0C0 #C0C0C0 #D4D4D4;
    border-style: solid;
    border-width: 1px;
    padding: 4px;
    line-height: 16px;
    font-size: 14px;
    width: 350px;
    line-height: 16px;
    font-size: 14px;
    height: 100px;
`