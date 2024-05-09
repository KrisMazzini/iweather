import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";
import { CityProps } from "@services/getCityByNameService";

describe("Component: SelectList", () => {
    it("should return the selected city details", () => {
        const data: CityProps[] = [
            {name: "Wroclaw", latitude: 51.1, longitude: 17.03},
            {name: "Antwerp", latitude: 51.22, longitude: 4.4},
        ]

        const onPress = jest.fn()

        render(
            <SelectList
                data={data}
                onChange={() => {}}
                onPress={onPress}
            />
        )

        const selectedCity = screen.getByText(/wro/i);
        fireEvent.press(selectedCity);

        expect(onPress).toHaveBeenCalledTimes(1);
        expect(onPress).toHaveBeenCalledWith(data[0]);
    })

    it("should not show options when data props is empty", () => {
        render(
            <SelectList
                data={[]}
                onChange={() => {}}
                onPress={() => {}}
            />
        )

        const options = screen.getByTestId("options");
        expect(options.children).toHaveLength(0);
    })
})