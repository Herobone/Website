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
import midImage from "./media/Mid.svg";
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
    });

    return (
        <>
            <img
                src={FG}
                alt="FG"
                style={{ position: "absolute", left: "-0.5%", top: "53%", width: "105%", zIndex: 1000 }}
            />
            <img
                src={Cloud3}
                alt="Mid"
                style={{ position: "absolute", top: "58%", left: 400 - scroll * 1.2, width: "28%", zIndex: 999 }}
            />
            <img
                src={Mountain1}
                alt="Mid"
                style={{ position: "absolute", top: "45%", left: 0, width: "55%", zIndex: 998 }}
            />
            <img
                src={Cloud2}
                alt="Mid"
                style={{ position: "absolute", top: "50%", right: -30 - scroll, width: "40%", zIndex: 997 }}
            />
            <img
                src={Cloud1}
                alt="Mid"
                style={{ position: "absolute", top: "40%", left: 30 - scroll * 0.8, width: "20%", zIndex: 997 }}
            />
            <img
                src={BG}
                alt="Mountains"
                style={{
                    position: "absolute",
                    left: "-0.5%",
                    top: 0,
                    width: "105vw",
                }}
            />
            <h1
                style={{
                    position: "fixed",
                    top: `calc(10% + ${scroll * 0.05}rem)`,
                    left: "calc(50% - 30rem)",
                    fontSize: "15rem",
                    zIndex: 1001,
                }}
            >
                Herobone
            </h1>
            <img src={midImage} alt="Mid" style={{ position: "absolute", top: "112%", width: "105vw", zIndex: 1002 }} />
            <img
                src={footerImage}
                alt="Sea Floor"
                style={{ position: "absolute", top: "140%", width: "105vw", zIndex: 1002 }}
            />
        </>
    );
};
