import {Field, useFormikContext} from "formik";
import React, {ChangeEvent} from "react";
import FormSection from "./form-section";
import styled from "styled-components";
import {colorTheme} from "../../styles/catalog/theme";

const InstantBookableSelect = () => {
    const {submitForm, handleChange} = useFormikContext();
    return (
        <FormSection heading={"Okamžitá rezervace"}>
            <SelectField
                as="select"
                name="instantBookable"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange(e)
                    submitForm()
                }}
            >
                <option value={"true"}>Ano</option>
                <option value={"false"}>Ne</option>
            </SelectField>
        </FormSection>
    )

}
export default InstantBookableSelect

const SelectField = styled(Field)`
  border-radius: 5px;
  max-width: 150px;
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: 1px solid ${colorTheme.Beige};
  color: 1px solid ${colorTheme.DarkBlue};

  &:focus {
    outline: none;
    border: 1px solid ${colorTheme.Green};

  }
`
