import { geoAPI } from "@services/api"
import { getCityByNameService } from "@services/getCityByNameService"

import { mockCityAPIResponse } from "@services/__mocks__/mockCityAPIResponse"

describe("Service: getCityByNameService", () => {
    it("should return city details", async () => {
        jest.spyOn(geoAPI, "get").mockResolvedValue({ data: mockCityAPIResponse })

        const response = await getCityByNameService("Wroclaw")

        expect(response.length).toBeGreaterThan(0)
    })
})