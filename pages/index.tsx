import styled from "styled-components";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Caravan from "../src/components/caravans/caravan";
import 'rc-slider/assets/index.css';
import {Formik} from "formik";
import {
    BOTTOM_RANGE_LIMIT,
    CaravanData,
    FilterForCaravans,
    PAGES_TO_LOAD,
    TOP_RANGE_LIMIT
} from "../src/service/typings/caravans";
import {filterData} from "../src/service/caravan-filter";
import CaravanTypesCheckbox from "../src/components/filter/caravan-types";
import PriceRangeSlider from "../src/components/filter/range-slider";
import InstantBookableSelect from "../src/components/filter/instant-bookable-select";
import Image from "next/image";
import {colorTheme} from "../src/styles/catalog/theme";

const Home = () => {
    const [caravans, setCaravans] = useState<Array<CaravanData> | undefined>()
    const [dataToDisplay, setDataToDisplay] = useState<Array<CaravanData> | undefined>()
    const [pagesCount, setPagesCount] = useState<number>(10)

    const [filter, setFilter] = useState<FilterForCaravans>({
            bottomRange: BOTTOM_RANGE_LIMIT,
            topRange: TOP_RANGE_LIMIT,
            instantBookable: "true",
            checked: []
        }
    )

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
        caravans && setDataToDisplay(filterData(caravans, filter))
    }, [filter, caravans])

    return (
        <PageWrapper>
            <Heading>
                <Image src={"/prague-labs-logo.svg"} width={200} height={35}/>
            </Heading>
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
                    onSubmit={(value: FilterForCaravans) => {
                        setFilter(value)
                    }}
                >
                    <FormikForm>
                        <PriceRangeSlider/>
                        <CaravanTypesCheckbox/>
                        <InstantBookableSelect/>
                    </FormikForm>
                </Formik>
            </FormWrapper>
            <CaravansWrapper>
                {dataToDisplay && dataToDisplay.map((caravan, index) => {
                    if (index < pagesCount) return <Caravan key={caravan.name + Math.random()} data={caravan}/>
                }
                )}
            </CaravansWrapper>
            <ShowMoreWrapper>
                <ShowMoreButton
                    onClick={
                        ()=> setPagesCount(pagesCount+PAGES_TO_LOAD)
                    }>
                    Ukázat další
                </ShowMoreButton>
            </ShowMoreWrapper>
        </PageWrapper>
    )
}


const Heading = styled.h1`
  margin: 20px 60px;
  
  @media (max-width: 850px) {
    width: 100%;
    text-align: center;
    margin: 20px 0;
  }
`

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
  display: flex;
  width: 100%;
`

const FormikForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;

  @media (max-width: 850px) {
    flex-wrap: wrap;
  }
`

const ShowMoreButton = styled.button`
  padding: 13px 36px;
  border-radius: 8px;
  background-color: ${colorTheme.Green};
  color: white;
  border: none;
  margin: 20px 20px 100px 20px ;
`

const ShowMoreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


export default Home
