import {CaravanData, PAGES_TO_LOAD} from "../../service/typings/caravans";
import React, {Dispatch, SetStateAction} from "react";
import styled from "styled-components";
import {colorTheme} from "../../styles/catalog/theme";

interface ShowMoreProps {
    dataToDisplay: Array<CaravanData> | undefined,
    setPagesCount: Dispatch<SetStateAction<number>>,
    pagesCount: number
}

export const ShowMore = ({dataToDisplay, setPagesCount, pagesCount}: ShowMoreProps) => {
    if (dataToDisplay && dataToDisplay?.length === 0) {
        return (
            <NoCaravans>
                Bohužel nemáme žádný karavan, který by vyhovoval vašemu výběru 🚚
            </NoCaravans>
        )
    }

    if (dataToDisplay && dataToDisplay.length > pagesCount) {
        return (
            <ShowMoreButton onClick={() => setPagesCount(pagesCount + PAGES_TO_LOAD)}>
                Ukázat další
            </ShowMoreButton>
        )
    }

    return <div/>
}

export default ShowMore

const ShowMoreButton = styled.button`
  padding: 13px 36px;
  border-radius: 8px;
  background-color: ${colorTheme.Green};
  color: white;
  border: none;
  margin: 20px 20px 100px 20px;
  cursor: pointer;
`

const NoCaravans = styled.div`
  margin: 30px;
  text-align: center;
`
