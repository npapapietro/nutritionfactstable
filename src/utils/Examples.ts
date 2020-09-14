import { ServingSize, ImperialUnits, IServingSize } from "./ServingSize";


const servisize = {
    imperialUnits: ImperialUnits.Ounce,
    fractionalSize: "1",
    servingNumber: 1
} as IServingSize;

const CholocateCookie = new ServingSize({...servisize});

export {CholocateCookie};