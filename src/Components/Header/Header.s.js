import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-family: 'Courier New', Courier, monospace;
    box-shadow: 1px 0 5px gray;
    font-size: 1.2rem;
`;

const StyledDivPoints = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1.6rem;
    line-height: 1.4;
`;

export const StyledScoreMachine = styled(StyledDivPoints)`
    color: ${props => props.theme['--red-300']};
`;  

export const StyledScoreMe = styled(StyledDivPoints)`
    color: ${props => props.theme['--blue-500']};
`;

const BaseLogo = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
`;

export const LogoPart1 = styled(BaseLogo)`
    color: ${props => props.theme['--red-300']};
`;

export const LogoPart2 = styled(BaseLogo)`
    color: ${props => props.theme['--blue-500']};
`;