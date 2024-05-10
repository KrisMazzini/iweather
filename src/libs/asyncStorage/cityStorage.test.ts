import { CityProps } from "@services/getCityByNameService"
import { getStorageCity, removeStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"

const newCity: CityProps = {
    name: "Wroclaw, PL",
    latitude: 51.1,
    longitude: 17.03,
}

describe("Storage: City Storage", () => {
    it("should return null when there is no city in storage", async () => {
        const response = await getStorageCity()
        expect(response).toBeNull()
    })

    it("should return city when there is a city in storage", async () => {
        await saveStorageCity(newCity)
        
        const response = await getStorageCity()
        expect(response).toEqual(newCity)
    })

    it("should return null when city is removed from storage", async () => {
        await saveStorageCity(newCity)
        await removeStorageCity()

        
        const response = await getStorageCity()
        expect(response).toBeNull()
    })
})