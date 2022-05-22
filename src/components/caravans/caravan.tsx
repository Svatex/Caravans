import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Image from "next/image"
import {CaravanData} from "../../service/typings/caravans";
import {colorTheme} from "../../styles/catalog/theme";


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
                    &nbsp;
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
  border: 1px solid ${colorTheme.Beige};
  border-radius: 8px;
`
const Section = styled.div`
  margin: 5px 16px;
  padding: 5px 0;
  border-bottom: 1px solid ${colorTheme.Beige};
`

const SectionPrice = styled(Section)`
  display: flex;
  justify-content: space-between;
  border-bottom: none;
`

const Type = styled.p`
  color: ${colorTheme.Orange};
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
`
const Name = styled.p`
  color: ${colorTheme.DarkBlue};
  font-size: 24px;
  font-weight: bold;
`
const Location = styled.p`
  padding-bottom: 10px;
`

const PriceText = styled.p`
  font-size: 16px;
  color: ${colorTheme.DarkGrey};
`

const PriceTextBold = styled(PriceText)`
  font-weight: bold;
  color: ${colorTheme.DarkBlue};
`
const Properties = styled.div`
  display: flex;
  align-items: center;
  > * {
    padding: 0 8px 0 5px;
  }
`

