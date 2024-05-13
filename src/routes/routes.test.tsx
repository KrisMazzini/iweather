import { act, screen, waitFor } from "@testing-library/react-native"

import { Routes } from "."
import { render } from "./__mocks__/customRender"

import { weatherAPI } from "@services/api"
import { CityProps } from "@services/getCityByNameService"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { mockWeatherAPIResponse } from "@services/__mocks__/mockWeatherAPIResponse"

describe("Routes",  () => {
    it("should render Search screen when city is not selected", async () => {
        render(<Routes />)
        
        const title = await waitFor(() => screen.findByText(/^escolha um local/i))
        expect(title).toBeTruthy()
    })

    it("should render Dashboard screen when a city is selected", async () => {
        jest.spyOn(weatherAPI, "get").mockResolvedValue({ data: mockWeatherAPIResponse })
        
        const city: CityProps = {
            name: "Wroclaw, PL",
            latitude: 51.1,
            longitude: 17.03
        }

        await saveStorageCity(city)
        await act(() => waitFor(() => render(<Routes />)))
        
        const title = screen.getByText(city.name)      
        expect(title).toBeTruthy()
    })
})