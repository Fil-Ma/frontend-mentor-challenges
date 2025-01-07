export type TMapPosition = [number, number];

export type IPSubmitHandler = (value: string) => Promise<void>;

export type ResultsKeys = "ipAddress" | "location" | "timezone" | "isp";
export type ResultsObject = Record<ResultsKeys, string>;
