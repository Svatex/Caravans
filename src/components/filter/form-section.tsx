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
  min-width: 24%;
  width: fit-content;
  min-height: 170px;
  border: 1px solid ${colorTheme.Beige};
  padding: 10px;

  @media (max-width: 1366px) {
    min-height: 260px;
  }

  @media (max-width: 850px) {
    width: 100%;
    min-height: 100px;
  }
`

const SectionName = styled.p`
    color: ${colorTheme.DarkGrey};
  padding: 5px;
`
