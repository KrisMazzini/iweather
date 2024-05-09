import { weatherAPI } from "@services/api"
import { getWeatherByCityService } from "@services/getWeatherByCityService"

import { mockWeatherAPIResponse } from "@services/__mocks__/mockWeatherAPIResponse"

describe("Service: getWeatherByCityService", () => {
    it("should return formatted weather data", async () => {
        jest.spyOn(weatherAPI, "get").mockResolvedValue({ data: mockWeatherAPIResponse })

        const response = await getWeatherByCityService({ latitude: 51.1, longitude: 17.03 })
        expect(response).toHaveProperty("today")
    })
})