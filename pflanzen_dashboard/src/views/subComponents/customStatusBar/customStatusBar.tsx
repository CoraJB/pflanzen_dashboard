import React from 'react';
import './customStatusBar.css'
import {useTranslation} from 'react-i18next';

type Props = {
    startValue: number;
    endValue: number;
    currentValue: number;
    labelText: string;
}

/**
 * The CustomStatusBar component is a custom status bar that visualizes a value within a range.
 * It renders a progress bar with different colored segments to represent different value ranges.
 * The bar is divided into sections of red (outside the range), green (within the range), and black (the current value).
 *
 * @param startValue - The start value of the range.
 * @param endValue - The end value of the range.
 * @param currentValue - The current value to be visualized in the bar.
 * @param labelText - The label text to be displayed above the bar.
 *
 * @returns The rendered custom status bar component.
 */
export default function CustomStatusBar(props: Props) {
    const {t} = useTranslation();
    const {startValue, endValue, currentValue, labelText} = props;

    /**
     * Calculates the width of the green segment within the range.
     * @returns The width of the green segment within the range.
     */
    const calculateGreenWidth = (): number => {
        return endValue - startValue;
    };

    // Rendering the custom status bar component
    return (
        <div>
            <div>
                <div className="container mt-3" style={{ width: "100%" }}>
                    <h5 style={{ color: "green" }}>{labelText}</h5>
                    <p>
                        {t("current-value")}
                        {currentValue}, {t("min")} {startValue}, {t("max")} {endValue}
                    </p>
                    <div style={{ width: "100%", height: "25px", background: "darkred" }}>
                        <div
                            style={{
                                width: `${calculateGreenWidth()}%`,
                                height: "100%",
                                background: "green",
                                marginLeft: `${startValue}%`
                            }}
                        ></div>
                        <div
                            style={{
                                width: "1%",
                                height: "100%",
                                marginLeft: `${currentValue}%`,
                                background: "black",
                                marginTop: "-25px"
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
