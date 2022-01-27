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
import footerImage from "./media/footer.svg";
import BG from "./media/BG.svg";
import FG from "./media/FG.svg";
import Cloud1 from "./media/Cloud 1.svg";
import Cloud2 from "./media/Cloud 2.svg";
import Cloud3 from "./media/Cloud 3.svg";
import Mountain1 from "./media/Mountain 1.svg";

export const App = (): JSX.Element => {
    const [scroll, setScroll] = useState(0);
    const updateScroll = (): void => setScroll(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);

        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    return (
        <>
            <div style={{ position: "relative", width: "100%", overflowX: "hidden" }}>
                <img
                    src={Cloud1}
                    alt="Mid"
                    style={{
                        position: "fixed",
                        width: "20%",
                        zIndex: 997,
                        transform: `translate(calc(20% - ${scroll * 0.1}%), 250%)`,
                    }}
                />
                <img
                    src={FG}
                    alt="FG"
                    style={{
                        position: "fixed",
                        transform: "translate(-2%, 70%)",
                        width: "105%",
                        zIndex: 1000,
                    }}
                />
                <img
                    src={Mountain1}
                    alt="Mid"
                    style={{ position: "fixed", transform: "translate(0%, 104%)", width: "55%", zIndex: 998 }}
                />
                <img
                    src={Cloud3}
                    alt="Mid"
                    style={{
                        position: "fixed",
                        transform: `translate(calc(50% - ${scroll * 0.2}%), 530%)`,
                        width: "28%",
                        zIndex: 999,
                    }}
                />
                <img
                    src={Cloud2}
                    alt="Mid"
                    style={{
                        position: "fixed",
                        transform: `translate(calc(155% + ${scroll * 0.15}%), 250%)`,
                        width: "40%",
                        zIndex: 997,
                    }}
                />
                <img
                    src={BG}
                    alt="Mountains"
                    style={{
                        position: "fixed",
                        left: "-0.5%",
                        width: "105%",
                    }}
                />
            </div>

            <h1
                style={{
                    position: "fixed",
                    top: `calc(10% + ${scroll * 0.05}rem)`,
                    left: "30%",
                    fontSize: "10vw",
                    zIndex: 1001,
                }}
            >
                Herobone
            </h1>
            <img
                src={footerImage}
                alt="Sea Floor"
                style={{ position: "absolute", top: "130%", width: "105vw", zIndex: 1002 }}
            />
        </>
    );
};
