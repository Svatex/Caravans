import {Field, useFormikContext} from "formik";
import React, {ChangeEvent} from "react";
import FormSection from "./form-section";
import styled from "styled-components";
import {colorTheme} from "../../styles/catalog/theme";

const InstantBookableSelect = () => {
    const {submitForm, handleChange} = useFormikContext();
    return (
        <FormSection heading={"Okamžitá rezervace"}>
            <Field
                as="select"
                name="instantBookable"
                style={{
                    borderRadius: 5,
                    maxWidth: 150,
                    width: 100,
                    padding: 10,
                    margin: 10,
                    border: `1px solid ${colorTheme.Beige}`,
                    color: `1px solid ${colorTheme.DarkBlue}`,
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange(e)
                    submitForm()
                }}
            >
                    <option value={"true"}>Ano</option>
                    <option value={"false"}>Ne</option>
            </Field>
        </FormSection>
    )

}
export default InstantBookableSelect
