import {CaravanData} from "../../../pages";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";


const Caravan = ({data}: { data: CaravanData }) => {
    const a = 'a'
    return (
        <CaravanWrapper>
            <Carousel showArrows={true}>
                {data.pictures.map((img) =>
                <div key={img}>
                    <img width={200} src={img}/>
                </div>
                )}
            </Carousel>
            <Section>
                <Type>{data.vehicleType}</Type>
                <Name>{data.name}</Name>
            </Section>
            <PropertiesWrapper>
                <Location>{data.location}</Location>
                <Properties>

                </Properties>
            </PropertiesWrapper>
        </CaravanWrapper>
    )

}
export default Caravan


const CaravanWrapper = styled.div`
  width: 300px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  margin: 20px;
`
const Section = styled.div``
const Type = styled.p``
const Name = styled.p``
const Location = styled.p``
const PropertiesWrapper = styled.div``
const Properties = styled.div``

