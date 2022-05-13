import styled from "styled-components";
import React from "react";

interface Props {
    children: React.ReactNode,
    heading: string
}

const FormSection = ({children, heading}: Props) => {
    const a = 'a'
    return (
        <SectionWrapper>
            <SectionName>
                {heading}
            </SectionName>
            {children}
        </SectionWrapper>
    )

}
export default FormSection

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 33%;
  padding: 10px;
  margin: 10px;
  height: 170px;
  background-color: orange;
`

const SectionName = styled.p`
`
