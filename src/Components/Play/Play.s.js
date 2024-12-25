import styled from "styled-components";

export const StyledSectionPrincipal = styled.section`
    display: flex;
    margin: 15rem auto;
    width: 90%;
`;

export const StyledBasePlay = styled.div`
    text-align: center;
    width: 25%;
`;

export const StyledOptionDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const StyledBollPlay = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%; 
`;;

export const RockMachine = styled(StyledBollPlay)`
    background-color: #9CCEFF;
`;

export const PaperMachine = styled(StyledBollPlay)`
    background-color: #FFC3C1;
`;

export const SciossorsMachine = styled(StyledBollPlay)`
    background-color: #9CCEFF;
`;