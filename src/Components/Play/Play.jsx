import { StyledSectionPrincipal, StyledBasePlay, StyledOption, RockMachine, PaperMachine, SciossorsMachine, StyledOptionDiv } from "./Play.s"
import { Scissors, Scroll } from 'phosphor-react'

export function Play() {
    return (
        <>
            <StyledSectionPrincipal>
                <StyledBasePlay>
                    <h2>The machine is choosing its option...</h2>
                    <StyledOptionDiv>
                        <StyledOption>
                            <p>Rock</p>
                            <RockMachine></RockMachine>
                        </StyledOption>
                        <StyledOption>
                            <p>Paper</p>
                            <PaperMachine><Scroll size={50} /></PaperMachine>
                        </StyledOption>
                        <StyledOption>
                            <p>Scissors</p>
                            <SciossorsMachine><Scissors size={50} /></SciossorsMachine>
                        </StyledOption>
                    </StyledOptionDiv>
                </StyledBasePlay>
                <h1>VS</h1>
                <StyledBasePlay>
                    <h2>Choose your option  </h2>
                    <StyledOptionDiv>
                        <StyledOption>
                            <p>Rock</p>
                            <RockMachine></RockMachine>
                        </StyledOption>
                        <StyledOption>
                            <p>Paper</p>
                            <PaperMachine><Scroll size={50} /></PaperMachine>
                        </StyledOption>
                        <StyledOption>
                            <p>Scissors</p>
                            <SciossorsMachine><Scissors size={50} /></SciossorsMachine>
                        </StyledOption>
                    </StyledOptionDiv>
                </StyledBasePlay>
            </StyledSectionPrincipal>
        </>
    )
}