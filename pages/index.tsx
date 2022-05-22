import styled from "styled-components";
import {Heading} from "../src/styles/layout-styles";
import React, {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import Caravan from "../src/components/caravans/caravan";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {Formik, Field} from "formik";
import FormSection from "../src/components/filter/form-section";


export interface CaravanData {
    location: string;
    instantBookable: boolean;
    name: string;
    passengersCapacity: number;
    sleepCapacity: number;
    price: number;
    toilet: boolean;
    shower: boolean;
    vehicleType: string;
    pictures: string[];
}

interface Filter {
    topRange: number,
    bottomRange: 0,
    instantBookable: string,
    //TODO: ARRAY!
    checked: any
}

const BOTTOM_RANGE_LIMIT = 0
const TOP_RANGE_LIMIT = 4000

const Home = () => {
    const [caravans, setCaravans] = useState<Array<CaravanData> | undefined>()
    const [dataToDisplay, setDataToDisplay] = useState<Array<CaravanData> | undefined>()
    const [filter, setFiler] = useState<Filter>({
            bottomRange: BOTTOM_RANGE_LIMIT,
            topRange: TOP_RANGE_LIMIT,
            instantBookable: "true",
            checked: []
        }
    )


    const caravansTypes = ["Integrated", "Campervan", "BuiltIn", "Alcove"];

    const getCaravanData = async () => {
        axios.get("/api/data")
            .then((res) => {
                const caravanData = res.data.items
                setCaravans(caravanData)
                setDataToDisplay(caravanData)
            })
    }


    useEffect(() => {
        getCaravanData()
    }, [])

    useEffect(() => {
        const filterData = () => {
            return caravans?.filter(
                (caravan) => {
                    const {topRange, bottomRange, checked, instantBookable} = filter
                    const {price, vehicleType} = caravan
                    const isInstantBookable = (instantBookable === "true");

                    if (checked.length === 0) {
                        return (
                            price < topRange &&
                            price > bottomRange &&
                            isInstantBookable === caravan.instantBookable
                        )
                    }
                    return (
                        price < topRange &&
                        price > bottomRange &&
                        isInstantBookable === caravan.instantBookable &&
                        checked.includes(vehicleType)
                    )
                })
        }
        console.log(filterData())
        setDataToDisplay(filterData())
    }, [filter, caravans])


    return (
        <PageWrapper>
            <Heading>Prague Labs</Heading>
            <FormWrapper>
                <Formik
                    initialValues={{
                        bottomRange: 0,
                        topRange: TOP_RANGE_LIMIT,
                        instantBookable: "true",
                        checked: []
                    }}
                    validateOnChange={false}
                    validateOnMount={false}
                    onSubmit={(value) => {
                        setFiler(value)
                    }}
                >
                    {({
                          submitForm,
                          handleChange,
                          values,
                          setFieldValue
                      }) => {
                        return (
                            <FormikForm>
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
                                <FormSection heading={"Typ karavanu"}>
                                    <TypesWrapper>
                                        {caravansTypes.map((type) => {
                                            return (
                                                <CaravanType
                                                    key={type}
                                                    className={
                                                        values.checked.includes(type) ? "active" : ""
                                                    }
                                                >
                                                    <Label
                                                    >
                                                        <CustomField
                                                            type="checkbox"
                                                            name="checked"
                                                            value={type}

                                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                handleChange(e)
                                                                submitForm()
                                                            }}
                                                        />
                                                        {type}
                                                    </Label>
                                                </CaravanType>

                                            )
                                        })}
                                    </TypesWrapper>
                                </FormSection>
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
                            </FormikForm>
                        )
                    }}

                </Formik>
            </FormWrapper>
            <CaravansWrapper>
                {dataToDisplay && dataToDisplay.map((caravan) =>
                    //TODO: better solution for key
                    <Caravan key={caravan.name + Math.random()} data={caravan}/>
                )}
            </CaravansWrapper>
        </PageWrapper>
    )
}

const PageWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 1440px;
  margin: 0 auto;
`

const CaravansWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const FormWrapper = styled.div`
  width: 100%;
`

const FormikForm = styled.div`
  width: 100%;
  display: flex;
`

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


export default Home
