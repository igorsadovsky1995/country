import styled from 'styled-components';
import { Container } from './Container'

const Wrapper = styled.main`
    padding: 2rem 0;
    
    @media(min-width: 767px){
        margin: 4rem;
        padding: 1rem;
    }
`;

export const Main = ({ children }) => {
    return(
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}