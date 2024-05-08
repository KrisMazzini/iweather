import { geoAPI } from "./api";

export type CityProps = {
  name: string;
  longitude: number;
  latitude: number;
}

export type CityAPIResponse = {
  name: string;
  country?: string;
  lat: number;
  lon: number;
}

export async function getCityByNameService(name: string): Promise<CityProps[] | []> {
  try {
    const { data } = await geoAPI.get<CityAPIResponse[]>(`/direct?q=${name}`);

    const cities: CityProps[] = data.map(cityData => ({
      name: cityData.country ? `${cityData.name}, ${cityData.country}` : cityData.name,
      latitude: cityData.lat,
      longitude: cityData.lon,
    }));

    return cities;
  } catch (error) {
    return [];
  }
}