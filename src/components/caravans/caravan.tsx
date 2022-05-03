import {CaravanData} from "../../../pages";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Image from "next/image"


const Caravan = ({data}: { data: CaravanData }) => {
    const a = 'a'
    return (
        <CaravanWrapper>
            <Carousel
                showArrows={true}
                autoPlay={false}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
            >
                {data.pictures.map((img) =>
                <div key={img}>
                    <Image
                        placeholder={"blur"}
                        layout={"intrinsic"}
                        blurDataURL={"https://cdn.dribbble.com/users/1183435/screenshots/6654886/comp_4.gif"}
                        width={400}
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
                    <Image src={"/icons/icon-bed.svg"} width={20} height={20}/>
                    <Image src={"/icons/icon-seat.svg"} width={20} height={20}/>
                    <Image src={"/icons/icon-shower.svg"} width={20} height={20}/>
                    <Image src={"/icons/icon-toilet.svg"} width={20} height={20}/>
                </Properties>
            </PropertiesWrapper>
        </CaravanWrapper>
    )

}
export default Caravan


const CaravanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
  flex: 1 0 300px;
  max-width: 400px;
  height: 380px;
  border: 1px solid beige;
  border-radius: 8px;
`
const Section = styled.div`
  margin: 12px 16px;
  border-bottom: 1px solid beige;
`

const Type = styled.p`
  color: #FF5E55;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
`
const Name = styled.p`
  color: #1F2244;
  size: 24px;
  font-weight: bold;
`
const Location = styled.p``
const PropertiesWrapper = styled.div`
  margin: 12px 16px;
`
const Properties = styled.div``

