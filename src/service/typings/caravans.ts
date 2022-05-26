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

export interface FilterForCaravans {
    topRange: number,
    bottomRange: 0,
    instantBookable: string,
    //TODO: ARRAY!
    types: CaravanTypes[]
}

export enum CaravanTypes {
    INTERGRATED = "Intergrated",
    CAMPERVAN = "Campervan",
    BUILTIN = "BuiltIn",
    ALCOVE = "Alcove"
}


export const BOTTOM_RANGE_LIMIT = 0
export const TOP_RANGE_LIMIT = 4000
export const PAGES_TO_LOAD = 10

