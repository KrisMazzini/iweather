import { render, screen } from "@testing-library/react-native"
import { Day } from "@components/Day"

import clearDay from "@assets/clear_day.svg"
describe("Component: Day", () => {
    it("should render correctly", () => {
        render(
            <Day
                data={{
                    day: "10/05",
                    min: "30˚C",
                    max: "40˚C",
                    icon: clearDay,
                    weather: "Céu limpo",
                }}
            />
        )

        expect(screen.getByText("10/05")).toBeTruthy()
    })
})