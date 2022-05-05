import styled from "styled-components";
import {Heading} from "../src/styles/layout-styles";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Caravan from "../src/components/caravans/caravan";
import  Slider  from 'rc-slider';
import 'rc-slider/assets/index.css';


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
    return (
        <PageWrapper>
            <Heading>Prague Labs</Heading>

            <div style={{width: 500, padding: 50}}>
                <Slider
                    range
                    min={0}
                    max={2000}
                    defaultValue={[0, 2000]}
                />
            </div>

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


export default Home
