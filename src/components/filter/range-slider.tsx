import Slider from "rc-slider";
import {Field, useFormikContext} from "formik";
import React, {ChangeEvent} from "react";
import FormSection from "./form-section";
import {BOTTOM_RANGE_LIMIT, FilterForCaravans, TOP_RANGE_LIMIT} from "../../service/typings/caravans";

const PriceRangeSlider = () => {
    const {values, submitForm, handleChange, setFieldValue} = useFormikContext<FilterForCaravans>();

    return (
        <FormSection heading={"Cena za den"}>
            <Slider
                range
                min={BOTTOM_RANGE_LIMIT}
                max={TOP_RANGE_LIMIT}
                defaultValue={[BOTTOM_RANGE_LIMIT, TOP_RANGE_LIMIT]}
                step={100}
                value={[values.bottomRange, values.topRange]}
                onChange={((value: any) => {
                    setFieldValue('bottomRange', value[0]);
                    setFieldValue('topRange', value[1]);
                    submitForm()
                })}
            />
            <Field
                name="bottomRange"
                type="number"
                step={"20"}
                min={BOTTOM_RANGE_LIMIT}
                max={TOP_RANGE_LIMIT}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange(e)
                    submitForm()
                }}
            />
            <Field
                name="topRange"
                type="number"
                step={"20"}
                min={BOTTOM_RANGE_LIMIT}
                max={TOP_RANGE_LIMIT}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange(e)
                    submitForm()
                }}
            />

        </FormSection>
    )

}
export default PriceRangeSlider
