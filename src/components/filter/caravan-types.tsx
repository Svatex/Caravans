import React, {ChangeEvent} from "react";
import {CaravanTypes, FilterForCaravans} from "../../service/typings/caravans";
import styled from "styled-components";
import {Field, useFormikContext} from "formik";
import FormSection from "./form-section";
import {colorTheme} from "../../styles/catalog/theme";

const CaravanTypesCheckbox = () => {
    const {values, submitForm, handleChange} = useFormikContext<FilterForCaravans>();

    const caravanTypes = [
        {
            type: CaravanTypes.INTERGRATED,
            text: "Král mezi karavany. Luxus na kolech."
        },
        {
            type: CaravanTypes.CAMPERVAN,
            text: "Obytka s rozměry osobáku, se kterou dojedete všude."
        },
        {
            type: CaravanTypes.BUILTIN,
            text: "Celý byt geniálně poskládaný do dodávky."
        },
        {
            type: CaravanTypes.ALCOVE,
            text: "Tažný karavan za vaše auto. Od kapkovitých až po rodinné."
        },
    ];

    return (
        <FormSection heading={"Typ karavanu"}>
            <TypesWrapper>
                {caravanTypes.map((caravanType) => {
                    return (
                        <CaravanType
                            key={caravanType.type}
                            className={
                                values.types.includes(caravanType.type) ? "active" : ""
                            }
                        >
                            <Label
                            >
                                <CustomField
                                    type="checkbox"
                                    name="types"
                                    value={caravanType.type}

                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        handleChange(e)
                                        submitForm()
                                    }}
                                />
                                <TypeTextWrapper>
                                    <TypeHeading>{caravanType.type}</TypeHeading>
                                    <TypeDescription>{caravanType.text}</TypeDescription>
                                </TypeTextWrapper>
                            </Label>
                        </CaravanType>
                    )
                })}
            </TypesWrapper>
        </FormSection>

    )

}
export default CaravanTypesCheckbox


const TypesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CaravanType = styled.div`
  border: 1px solid ${colorTheme.Beige};
  border-radius: 8px;
  width: fit-content;
  height: 90px;
  color: ${colorTheme.DarkGrey};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:5px;
  
  @media (max-width: 420px) {
    height: 110px;
  }
  
  :hover {
    border: 2px solid ${colorTheme.Green};
    margin: 5px 4px;
  }

  &.active {
    border: 2px solid ${colorTheme.Green};
    margin: 5px 4px;
  }
`

const Label = styled.label`
  cursor: pointer;
  padding: 20px 15px;

  @media (max-width: 420px) {
    padding: 10px;
  }


`;

const CustomField = styled(Field)`
  display: none;
  width: 200px;
`

const TypeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 130px;

  @media (max-width: 420px) {
    max-width: 110px;
  }
`

const TypeHeading = styled.p`
    color: ${colorTheme.DarkBlue};
`

const TypeDescription = styled.p`
    font-size: 12px;
`
