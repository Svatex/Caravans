import {Field, useFormikContext} from "formik";
import React, {ChangeEvent} from "react";
import FormSection from "./form-section";

const InstantBookableSelect = () => {
    const {submitForm, handleChange} = useFormikContext();
    return (
        <FormSection heading={"Okamžitá rezervace"}>
            <Field
                as="select"
                name="instantBookable"
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
