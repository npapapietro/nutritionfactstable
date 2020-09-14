export enum ImperialUnits {
    Teaspoon = "tsp",
    Tablespoon = "tbsp",
    Ounce = "ounce",
    Cup = "cup",
    Custom = "",
}


export enum MetricUnits {
    None = "",
    Gram = "g",
    Milligram = "mg",
    Microgram = "mcg",
    Kilogram = "kg",
    Liter = "l",
    Milliliter = "ml",

    IU = "IU",
    /**
     * Microgram of retinol activity equivalents
     */
    MicrogramRAE = "mcg RAE",
    /**
     * Micrograms of dietary folate equivalents
     */
    MicrogramDFE = "mcg DFE",
    /**
     * milligrams of niacin equivalents
     */
    MilligramNE = "mg NE"
}

/**
 * Set the serving size information
 */
export interface IServingSize{
    /**
     * Size of serving in cups, oz, tsp etc
     */
    imperialUnits: ImperialUnits,
    /**
     * Fraction size string
     * Example `"1/2 cup"`
     */
    fractionalSize: string,
    /**
     * Amount of servings per container
     */
    servingNumber: number,
    /**
     * Optional, Metric unit of serving size
     * Example: g, mg, mcg
     */
    metricUnit: MetricUnits | undefined,
    /**
     * Optional, Metric serving size
     */
    metricSize: number | undefined,
    /**
     * Optional, custom serving units
     * Example: `3 pretzels`
     */
    customName: string | undefined,
}

export class ServingSize implements IServingSize {
    public imperialUnits!: ImperialUnits;
    public fractionalSize!: string;
    public servingNumber!: number;

    public metricUnit: MetricUnits = MetricUnits.None;
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

    constructor(item: Partial<IServingSize>) {
        Object.assign(this, item)
    }

    public get imperialUnitsRepr(): string {
        if (this.imperialUnits === ImperialUnits.Custom) {
            return this.customName;
        } else {
            return this.imperialUnits
        }
    }


    public toString = (): string => {
        let servingstmt = `Serving Size ${this.fractionalSize} ${this.imperialUnitsRepr}`;

        if (this.metricUnit === MetricUnits.None || this.metricSize === 0) {
            return servingstmt;
        }

        servingstmt += ` (about ${this.metricSize}${this.metricUnit})`;

        return servingstmt;
    }
}