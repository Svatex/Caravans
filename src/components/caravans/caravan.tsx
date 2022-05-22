import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Image from "next/image"
import {CaravanData} from "../../service/typings/caravans";


const Caravan = ({data}: { data: CaravanData }) => {
    return (
        <CaravanWrapper>
            <Carousel
                showArrows={true}
                autoPlay={false}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
            >
                {data.pictures.map((img: string) =>
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
            <Section>
                <Location>{data.location}</Location>
                <Properties>
                    <Image src={"/icons/icon-seat.svg"} width={20} height={20}/>
                    <div>{data.passengersCapacity}</div>
                    <Image src={"/icons/icon-bed.svg"} width={20} height={20}/>
                    <div>{data.sleepCapacity}</div>
                    {data.toilet &&
                        <Image src={"/icons/icon-toilet.svg"} width={20} height={20}/>
                    }
                    {data.shower &&
                        <Image src={"/icons/icon-shower.svg"} width={20} height={20}/>
                    }
                </Properties>
            </Section>
            <SectionPrice>
                <PriceText>
                    Cena od:
                </PriceText>
                <PriceTextBold>
                    {data.price} Kč/den
                </PriceTextBold>

            </SectionPrice>
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
  height: fit-content;
  border: 1px solid beige;
  border-radius: 8px;
`
const Section = styled.div`
  margin: 5px 16px;
  padding: 5px 0;
  border-bottom: 1px solid beige;
`

const SectionPrice = styled(Section)`
  display: flex;
  justify-content: space-between;
  border-bottom: none;
`

const Type = styled.p`
  color: #FF5E55;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
`
const Name = styled.p`
  color: #1F2244;
  font-size: 24px;
  font-weight: bold;
`
const Location = styled.p`
  padding-bottom: 10px;
`

const PriceText = styled.p`
  font-size: 16px;
  color: #9C8C8C;
`

const PriceTextBold = styled(PriceText)`
  font-weight: bold;
  color: #1F2244;
`
const Properties = styled.div`
  display: flex;
  align-items: center;
  > * {
    padding: 0 8px 0 5px;
  }
`

