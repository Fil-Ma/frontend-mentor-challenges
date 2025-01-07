import { ResultsObject, TMapPosition } from "./types";

const BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=`;

export const getIpData = async (
  ip: string,
): Promise<[TMapPosition, ResultsObject]> => {
  const response = await fetch(BASE_URL + ip);
  const data = await response.json();

  return [
    [data.location.lat, data.location.lng],
    {
      ipAddress: data.ip,
      location: [
        data.location.city,
        data.location.country,
        data.location.postalCode,
      ].join(", "),
      timezone: `UTC ${data.location.timezone}`,
      isp: data.isp,
    },
  ];
};
