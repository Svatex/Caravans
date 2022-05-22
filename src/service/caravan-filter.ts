import {CaravanData, FilterForCaravans} from "./typings/caravans";

export const filterData = (caravans: CaravanData[], filter: FilterForCaravans) => {
    return caravans?.filter(
        (caravan) => {
            const {topRange, bottomRange, checked, instantBookable} = filter
            const {price, vehicleType} = caravan

            const isInstantBookable = (instantBookable === "true");

            if (checked.length === 0) {
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
                checked.includes(vehicleType)
            )
        })
}
