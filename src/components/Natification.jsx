import styled from "styled-components";

export const Natification = styled.span`
    display: inline-block;
    width: 100%;
    padding-top: 2rem;
    margin: 0 auto;
    color: var(--color);
    font-size: 24px;
    font-family: var(--family);
    font-weight: var(--fw-normal);
    text-align: center;

    @media(min-width: 767px){
        padding-top: 4rem;
    }
`; 