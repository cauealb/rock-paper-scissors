import { useState } from "react";
import { StyledHeader, StyledDivPoitsMe, StyledDivPoitsMachine, StyledLogo1, StyledLogo2, DivLogo } from "./Header.s";
import { Star, Robot } from 'phosphor-react'

export function Header() {

    const [scoreMachine, setScoreMachine] = useState(0)
    const [scoreMe, setScoreMe] = useState(0)

    return (
        <>
            <StyledHeader>
                <StyledDivPoitsMachine>
                    <div>
                        <h1>Score (machine)</h1>
                        <Robot size={13} weight="bold"/>
                    </div>
                    <h2>{scoreMachine}</h2>
                </StyledDivPoitsMachine>
                <DivLogo>
                    <StyledLogo1>Rock Paper </StyledLogo1><StyledLogo2>Scissors</StyledLogo2>
                </DivLogo>
                <StyledDivPoitsMe>
                    <div>
                        <Star size={13} color="#FFF200" weight="fill"/>
                        <h1> Score (me)</h1>
                    </div>
                    <h2>{scoreMe}</h2>
                </StyledDivPoitsMe>
            </StyledHeader>
        </>
    )
}