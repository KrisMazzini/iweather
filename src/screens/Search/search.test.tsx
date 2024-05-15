import { fireEvent, render, screen, waitFor } from "@routes/__mocks__/customRender"

import { Search } from "@screens/Search";

import { geoAPI } from "@services/api";
import { mockCityAPIResponse } from "@services/__mocks__/mockCityAPIResponse";

describe("Screen: Search", () => {
    it("should render city options", async () => {
        jest.spyOn(geoAPI, "get").mockResolvedValue({ data: mockCityAPIResponse })

        render(<Search />);

        const searchInput = screen.getByTestId("search-input");
        fireEvent.changeText(searchInput, "Wroclaw");

        const option = await waitFor(() => screen.findByText(/wroclaw/i));
        expect(option).toBeTruthy();
    });
})