import Slider from "rc-slider";
import {Field, useFormikContext} from "formik";
import React, {ChangeEvent} from "react";
import FormSection from "./form-section";
import {BOTTOM_RANGE_LIMIT, FilterForCaravans, TOP_RANGE_LIMIT} from "../../service/typings/caravans";
import {colorTheme} from "../../styles/catalog/theme";
import styled from "styled-components";

const handleStyle = {
    backgroundColor: colorTheme.Green,
    width: 25,
    height: 25,
    top: 0,
    border: `1px solid ${colorTheme.Green}`
}

const PriceRangeSlider = () => {
    const {values, submitForm, handleChange, setFieldValue} = useFormikContext<FilterForCaravans>();

    return (
        <FormSection heading={"Cena za den"}>
            <SliderWrapper>
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
                    trackStyle={{backgroundColor: colorTheme.Green}}
                    handleStyle={[handleStyle, handleStyle]}
                    railStyle={{backgroundColor: colorTheme.DarkGrey}}
                    style={{width: "90%", paddingBottom: 30}}
                />
                <FieldsWrapper>
                    <FieldWrapper>
                        <RangeField
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
                    </FieldWrapper>
                    <FieldWrapper>
                        <RangeField
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
                    </FieldWrapper>
                </FieldsWrapper>
            </SliderWrapper>
        </FormSection>
    )

}
export default PriceRangeSlider

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
const FieldsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`


const FieldWrapper = styled.div`
  width: 48%;
  max-width: 160px;
  position: relative;

  &:after {
    content: "Kč";
    position: absolute;
    color: ${colorTheme.DarkGrey};
    right: 10px;
    top: 10px;
  }
`
const RangeField = styled(Field)`
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  border: 1px solid ${colorTheme.Beige};
  color: 1px solid ${colorTheme.DarkBlue};

  &:focus {
    outline: none;
    border: 1px solid ${colorTheme.Green};

  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`
