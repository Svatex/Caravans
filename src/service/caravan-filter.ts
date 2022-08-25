import {CaravanData, CaravanTypes, FilterForCaravans} from "./typings/caravans";

/**
 *  Apply selected filters on data from server
 * return Array of fitting items
 * */
export const filterData = (caravans: CaravanData[], filter: FilterForCaravans) => {
    return caravans?.filter(
        (caravan) => {
            const {topRange, bottomRange, types, instantBookable} = filter
            const {price, vehicleType} = caravan

            const isInstantBookable = (instantBookable === "true");

            /** If there is not selected type of caravans -> Show all types */
            if (types.length === 0) {
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
                types.includes(<CaravanTypes>vehicleType)
            )
        })
}
