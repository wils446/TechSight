export interface Technology {
    name: string;
    popularityAll: YearsData;
    popularityProfessional: YearsData;
    loved: YearsData;
    wanted: YearsData;
    income: YearsData;
}

export interface YearsData {
    "2020": Data;
    "2021": Data;
}

export interface Data {
    value: number;
    frequency?: number;
}
