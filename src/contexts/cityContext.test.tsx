import { act, renderHook, waitFor } from "@testing-library/react-native"

import { useCity } from "@hooks/useCity"
import { CityProvider } from "@contexts/CityContext"

describe("Context: CityContext", () => {
    it("should change selected city", async () => {
        const { result } = renderHook(() => useCity(), { wrapper: CityProvider })

        await waitFor(() => act(() => result.current.handleChanceCity({
            name: "Wroclaw, PL",
            latitude: 51.1,
            longitude: 17.03
        })))

        expect(result.current.city?.name).toBe("Wroclaw, PL")
    })
})