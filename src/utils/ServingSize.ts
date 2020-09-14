export enum ImperialUnits {
    Teaspoon,
    Tablespoon,
    Ounce,
    Cup,
    Custom,
}

export enum MetricUnits {
    None,
    Gram,
    Milligram,
    Microgram,
    Kilogram,
    Liter,
    Milliliter,
    IU
}

function parseUnitsMetric(unit: MetricUnits): string {
    switch (unit) {
        case MetricUnits.Gram:
            return "g";
        case MetricUnits.Kilogram:
            return "kg";
        case MetricUnits.Liter:
            return "l";
        case MetricUnits.Milliliter:
            return "ml"
        case MetricUnits.Milligram:
            return "mg"
        case MetricUnits.Microgram:
            return "mcg"
        case MetricUnits.IU:
            return "IU"
        default:
            return ""
    }
}

function parseUnitsImp(unit: ImperialUnits): string {
    let size = "";
    switch (unit) {
        case ImperialUnits.Cup:
            size = "cup";
            break;
        case ImperialUnits.Ounce:
            size = "ounce";
            break;
        case ImperialUnits.Tablespoon:
            size = "tbsp";
            break;
        case ImperialUnits.Teaspoon:
            size = "tsp";
            break;
        case ImperialUnits.Custom:
            size = ""
            break;
    }

    return size;
}

interface IServiceSizeRequired{
    imperialUnits: ImperialUnits,
    fractionalSize: string,
    servingNumber: number,
}

export interface IServingSize extends IServiceSizeRequired{
    metricUnit: MetricUnits | undefined,
    metricSize: number | undefined,
    customName: string | undefined,
    toString(): string
}

export class ServingSize implements IServingSize {
    public imperialUnits!: ImperialUnits;
    public fractionalSize!: string;
    public servingNumber!: number;

    public metricUnit: MetricUnits = 0;
    public metricSize: number = 0;
    public customName: string = "";

    public get exactImperial(): number {
        var components = this.fractionalSize.split('/');
        if (components.length > 1) {
            if (parseInt(components[1]) === 0) {
                throw new Error("Divide by zero in ServingSize");
            }
            return parseInt(components[0]) / parseInt(components[1]);
        }
        return parseInt(components[0]);
    }



    constructor(item: IServiceSizeRequired & Partial<IServingSize>) {
        Object.assign(this, item)
    }



    public get imperialUnitsRepr(): string {
        if (this.imperialUnits === ImperialUnits.Custom) {
            return this.customName;
        } else {
            return parseUnitsImp(this.imperialUnits)
        }
    }


    public get metricUnitsRepr(): string {
        return parseUnitsMetric(this.metricUnit);
    }

    public toString = (): string => {
        let servingstmt = `Serving Size ${this.fractionalSize} ${this.imperialUnitsRepr}`;

        if (this.metricUnit === MetricUnits.None || this.metricSize === 0) {
            return servingstmt;
        }

        servingstmt += ` (about ${this.metricSize}${this.metricUnitsRepr})`;

        return servingstmt;
    }
}