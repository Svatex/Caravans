import styled from "styled-components";
import React from "react";
import {colorTheme} from "../../styles/catalog/theme";

interface Props {
    children: React.ReactNode,
    heading: string
}

const FormSection = ({children, heading}: Props) => {
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
  min-width: 20%;
  width: fit-content;
  min-height: 170px;
  border: 1px solid ${colorTheme.Beige};
  padding: 10px;
`

const SectionName = styled.p`
`
