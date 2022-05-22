import React, {ChangeEvent} from "react";
import {CaravanTypes, FilterForCaravans} from "../../service/typings/caravans";
import styled from "styled-components";
import {Field, useFormikContext} from "formik";
import FormSection from "./form-section";

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
                                values.checked.includes(caravanType.type) ? "active" : ""
                            }
                        >
                            <Label
                            >
                                <CustomField
                                    type="checkbox"
                                    name="checked"
                                    value={caravanType.type}

                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        handleChange(e)
                                        submitForm()
                                    }}
                                />
                                {caravanType.type}
                                {caravanType.text}
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
`

const CaravanType = styled.div`
  border: 1px solid #EDEAE3;
  border-radius: 8px;
  width: fit-content;
  height: 90px;
  color: #9C8C8C;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    border: 2px solid #119383;
  }

  &.active {
    border: 2px solid #119383;
  }
`

const Label = styled.label`
  cursor: pointer;
  padding: 30px 20px;

`;


const CustomField = styled(Field)`
  display: none;
  width: 200px;

`
