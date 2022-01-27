/*
 * Herobone Website
 * Copyright (c) 2022.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { useEffect, useState } from "react";
import Cloud1 from "./media/Cloud 1.svg";
import FG from "./media/FG2.svg";
import Mountain1 from "./media/Mountain 1.svg";
import Cloud3 from "./media/Cloud 3.svg";
import Cloud2 from "./media/Cloud 2.svg";
import BG from "./media/BG.svg";

export const AbsoluteHeader = (): JSX.Element => {
    const [scroll, setScroll] = useState(window.scrollY);
    const updateScroll = (): void => setScroll(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);

        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                top: window.innerHeight,
                display: scroll > window.innerHeight ? "block" : "none",
            }}
        >
            <img
                src={Cloud1}
                alt="Mid"
                style={{
                    position: "relative",
                    left: 30 - scroll * 0.8,
                    width: "20%",
                    zIndex: 997,
                    transform: "translate(0, 200%)",
                }}
            />
            <img
                src={FG}
                alt="FG"
                style={{ position: "absolute", left: "-2%", top: "283%", width: "105%", zIndex: 1000 }}
            />
            <img
                src={Mountain1}
                alt="Mid"
                style={{ position: "absolute", top: "277%", left: 0, width: "55%", zIndex: 998 }}
            />
            <img
                src={Cloud3}
                alt="Mid"
                style={{
                    position: "absolute",
                    top: "330%",
                    left: `calc(15% - ${scroll * 0.1}%)`,
                    width: "28%",
                    zIndex: 999,
                }}
            />
            <img
                src={Cloud2}
                alt="Mid"
                style={{ position: "absolute", top: "250%", right: -30 - scroll, width: "40%", zIndex: 997 }}
            />
            <img
                src={BG}
                alt="Mountains"
                style={{
                    position: "absolute",
                    left: "-0.5%",
                    width: "105%",
                }}
            />
        </div>
    );
};
