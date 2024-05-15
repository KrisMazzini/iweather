import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved
} from "@routes/__mocks__/customRender"

import { Dashboard } from "@screens/Dashboard"

import { geoAPI, weatherAPI } from "@services/api"
import { CityProps } from "@services/getCityByNameService"
import { mockWeatherAPIResponse } from "@services/__mocks__/mockWeatherAPIResponse"

import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { mockCityAPIResponse } from "@services/__mocks__/mockCityAPIResponse"

describe("Screen: Dashboard", () => {
    beforeEach(async () => {
        jest.spyOn(weatherAPI, "get").mockResolvedValue({ data: mockWeatherAPIResponse })
        jest.spyOn(geoAPI, "get").mockResolvedValue({ data: mockCityAPIResponse })

        const city: CityProps = {
            name: "Warsaw",
            latitude: 51.1,
            longitude: 17.03,
        }

        await saveStorageCity(city)
    })

    it("should render city weather", async () => {
        render(<Dashboard />)

        const cityName = await waitFor(() => screen.findByText(/warsaw/i))
        expect(cityName).toBeTruthy()
    })

    it("should show other selected city weather", async () => {
        render(<Dashboard />)

        await waitForElementToBeRemoved(() => screen.queryByTestId("loading"))

        const newCityName = "Wroclaw"

        await waitFor(() => act(() => {
            const search = screen.getByTestId("search-input")
            fireEvent.changeText(search, newCityName)
        }))

        await waitFor(() => act(() => {
            fireEvent.press(screen.getByText(newCityName, { exact: false }))
        }))

        expect(screen.getByText(newCityName, { exact: false })).toBeTruthy()
    })
})