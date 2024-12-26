import styled from "styled-components";

export const StyledSectionPrincipal = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15rem auto;
    width: 90%;
`;

export const StyledBasePlay = styled.div`
    text-align: center;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h2 {
        font-size: 2rem;
        text-align: center;
        margin: auto;
    }
`;

export const StyledOptionDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p {
        font-size: 1.3rem;
        color: ${props => props.theme['--gray']};
        letter-spacing: 1px
    }
`;

export const StyledOption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &:hover {
        cursor: not-allowed;
    }
`;

export const StyledOptionMe = styled(StyledOption)`
    &:hover {
        cursor: pointer;
    }
`

const StyledBollPlay = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
`;;

export const RockMachine = styled(StyledBollPlay)`
    background-color: ${props => props.theme['--blue-secound']};
    color: #868686;
`;

export const PaperMachine = styled(StyledBollPlay)`
    background-color: ${props => props.theme['--red-secound']};
    color: #868686;
`;

export const SciossorsMachine = styled(StyledBollPlay)`
    background-color: ${props => props.theme['--blue-secound']};
    color: #868686;
`;

// -----------------------------------------------------------

export const RockMe = styled(StyledBollPlay)`
    background-color: ${props => props.theme['--blue-principal']};
`;

export const PaperMe = styled(StyledBollPlay)`
    background-color: ${props => props.theme['--red-principal']};
`;

export const SciossorsMe = styled(StyledBollPlay)`
    background-color: ${props => props.theme['--blue-principal']};
`;

export const StyledVS = styled.h2`
    font-size: 20rem;
    align-self: flex-end;
`; 