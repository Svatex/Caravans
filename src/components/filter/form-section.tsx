import styled from "styled-components";
import React from "react";
import {colorTheme} from "../../styles/catalog/theme";
import Image from "next/image";

interface Props {
    children: React.ReactNode,
    heading: string
    icon?: string
}

const FormSection = ({children, heading, icon}: Props) => {
    return (
        <SectionWrapper>
            <SectionName>
                {heading}
                &nbsp;
                {icon && <Image src={icon} width={20} height={20}/>}
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
  display: flex;
  align-items: center;
    color: ${colorTheme.DarkGrey};
  padding: 5px;
`
