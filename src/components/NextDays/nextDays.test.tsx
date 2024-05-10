import { render, screen } from "@testing-library/react-native"
import { NextDays } from "@components/NextDays"

import clearDay from "@assets/clear_day.svg"

describe("Component: Next Days", () => {
    it("should render the component", () => {
        render(
            <NextDays 
                data={[
                    { day: "10/05", min: "30˚C", max: "40˚C", icon: clearDay, weather: "Céu limpo" },
                    { day: "11/05", min: "25˚C", max: "28˚C", icon: clearDay, weather: "Nublado" },
                    { day: "12/05", min: "27˚C", max: "34˚C", icon: clearDay, weather: "Céu limpo" },
                    { day: "13/05", min: "32˚C", max: "38˚C", icon: clearDay, weather: "Céu limpo" },
                    { day: "14/05", min: "22˚C", max: "26˚C", icon: clearDay, weather: "Chuva fraca" },
                ]} 
            />
        )

        expect(screen.getByText("10/05")).toBeTruthy()
    })
})