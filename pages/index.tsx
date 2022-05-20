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

const Home = () => {
    const [data, setData] = useState<Array<CaravanData> | undefined>()

    const getCaravanData = async () => {
        axios.get("/api/data")
            .then((res) => {
                setData(res.data.items)
            })
    }


    useEffect(() => {
        getCaravanData()
    }, [])

    const caravans = ["Integrated", "Campervan", "BuiltIn", "Alcove"];

    return (
        <PageWrapper>
            <Heading>Prague Labs</Heading>
            <FormWrapper>
                <Formik
                    initialValues={{
                        topRange: 0,
                        bottomRange: 2000,
                        instantBookable: "Ano",
                        checked: []
                    }}
                    validateOnChange={false}
                    validateOnMount={false}
                    onSubmit={(value) => console.log(value)}
                >
                    {({submitForm, handleChange, values, setFieldValue}) => {
                        return (
                            <FormikForm>
                                <FormSection heading={"Cena za den"}>
                                    <Slider
                                        range
                                        min={0}
                                        max={2000}
                                        defaultValue={[0, 2000]}
                                        step={20}
                                        value={[values.topRange, values.bottomRange]}
                                        onChange={((value: any) => {
                                            setFieldValue('topRange', value[0]);
                                            setFieldValue('bottomRange', value[1]);
                                            submitForm()
                                        })}
                                    />
                                    <Field
                                        name="topRange"
                                        type="number"
                                        step={"20"}
                                        min={0}
                                        max={2000}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            handleChange(e)
                                            submitForm()
                                        }}
                                    />
                                    <Field
                                        name="bottomRange"
                                        type="number"
                                        step={"20"}
                                        min={0}
                                        max={2000}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            handleChange(e)
                                            submitForm()
                                        }}
                                    />

                                </FormSection>
                                <FormSection heading={"Typ karavanu"}>
                                    <div>
                                        {caravans.map((caravan) => {
                                            return (
                                                <Label key={caravan}>
                                                    <CustomField
                                                        type="checkbox"
                                                        name="checked"
                                                        value={caravan}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                            handleChange(e)
                                                            submitForm()
                                                        }}
                                                    />
                                                    {caravan}
                                                </Label>
                                            )
                                        })}
                                    </div>
{/*
                                    <Label key={caravan} id={caravan}>

                                        <CustomField
                                            name={caravan}
                                            render={({ field, form }) => {
                                                return (
                                                    <input
                                                        type="checkbox"
                                                        id={caravan}
                                                        checked={field.value}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                            setFieldValue(caravan, e.target.value);
                                                            submitForm()
                                                        }}
                                                        {...field}
                                                    />
                                                );
                                            }}
                                        />
                                        {caravan}
                                    </Label>
*/}





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
                                        <option value="Ano">Ano</option>
                                        <option value="Ne">Ne</option>
                                    </Field>
                                </FormSection>
                            </FormikForm>
                        )
                    }}

                </Formik>


            </FormWrapper>
            <CaravansWrapper>
                {data && data.map((caravan) =>
                    <Caravan key={caravan.name} data={caravan}/>
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

const Label = styled.label`
  border: 1px solid #EDEAE3;
  cursor: pointer;
  border-radius: 8px;
  color: #9C8C8C;
  font-size: 16px;
  margin: 0 16px 16px 0;
  padding: 20px;

  :hover {
    border: 2px solid #119383;
  }

  :active {
    border-color: transparent;
    background-color: #a4e0fd;
  }
`;


const CustomField = styled(Field) `
  display: none;
`


export default Home
