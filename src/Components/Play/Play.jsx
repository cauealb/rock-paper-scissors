import { StyledSectionPrincipal, StyledBasePlay, StyledOption, RockMachine, PaperMachine, SciossorsMachine, StyledOptionDiv, StyledVS, StyledOptionMe, RockMe, PaperMe, SciossorsMe } from "./Play.s"
import { Scissors, Scroll } from 'phosphor-react'
import rockSecound from '../../assets/iconRockSecound.svg'
import rockPrincipal from '../../assets/iconRockPrincipal.svg'
import { useState } from "react"

export function Play() {
    // Rock = 0
    // Paper = 1
    // Scissors
    
    const [isClick, setIsClick] = useState(-1)
 
    console.log(isClick)
    return (
        <>
            <StyledSectionPrincipal>
                <StyledBasePlay>
                    <h2>The machine is choosing its option...</h2>
                    <StyledOptionDiv>
                        <StyledOption>
                            <p>Rock</p>
                            <RockMachine><img src={rockSecound} width={50}/></RockMachine>
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
                <StyledVS>VS</StyledVS>
                <StyledBasePlay>
                    <h2>Choose your option  </h2>
                    <StyledOptionDiv>
                        <StyledOptionMe>
                            <p>Rock</p>
                            <RockMe onClick={() => {
                                setIsClick(0)
                            }}><img src={rockPrincipal} width={50}/></RockMe>
                        </StyledOptionMe>
                        <StyledOptionMe>
                            <p>Paper</p>
                            <PaperMe onClick={() => {
                                setIsClick(1)
                            }}><Scroll size={50} /></PaperMe>
                        </StyledOptionMe>
                        <StyledOptionMe>
                            <p>Scissors</p>
                            <SciossorsMe onClick={() => {
                                setIsClick(2)
                            }}><Scissors size={50} /></SciossorsMe>
                        </StyledOptionMe>
                    </StyledOptionDiv>
                </StyledBasePlay>
            </StyledSectionPrincipal>
        </>
    )
}