import { Robot  } from "phosphor-react"
import { StyledSectionPrincipal, StyledBasePlay, StyledOption, RockMachine, PaperMachine, SciossorsMachine, StyledOptionDiv } from "./Play.s"

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
                            <PaperMachine></PaperMachine>
                        </StyledOption>
                        <StyledOption>
                            <p>Scissors</p>
                            <SciossorsMachine></SciossorsMachine>
                        </StyledOption>
                    </StyledOptionDiv>
                </StyledBasePlay>
                <h1>VS</h1>
                <div>
                    <h2>Choose your option  </h2>
                    <div>
                        <div>
                            <p>Rock</p>
                            <div></div>
                        </div>
                        <div>
                            <p>Paper</p>
                            <div></div>
                        </div>
                        <div>
                            <p>Scissors</p>
                            <div></div>
                        </div>
                    </div>
                </div>
            </StyledSectionPrincipal>
        </>
    )
}