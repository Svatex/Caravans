import {CaravanData} from "../../../pages";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Image from "next/image"


const Caravan = ({data}: { data: CaravanData }) => {
    const a = 'a'
    return (
        <CaravanWrapper>
            <Carousel showArrows={true} autoPlay={false} showThumbs={false} showIndicators={false} showStatus={false}>
                {data.pictures.map((img) =>
                <div key={img}>
                    {/*<img src={img}/>*/}
                    <Image
                        placeholder={"blur"}
                        layout={"intrinsic"}
                        blurDataURL={"https://cdn.dribbble.com/users/1183435/screenshots/6654886/comp_4.gif"}
                        width={300}
                        height={200}
                        src={img}
                        objectFit={"cover"}
                        lazyBoundary={"500px"}
                    />
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

