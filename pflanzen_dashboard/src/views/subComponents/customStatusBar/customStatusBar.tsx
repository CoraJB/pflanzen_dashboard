import React from 'react';
import './customStatusBar.css'
import {useTranslation} from 'react-i18next';

type Props = {
    startValue: number;
    endValue: number;
    currentValue: number;
    labelText: string;
}

export default function CustomStatusBar(props: Props) {
    const {t} = useTranslation();
    const {startValue, endValue, currentValue, labelText} = props;

    const calculateSecondGreenWidth = () => {
        return (100 - calculateGreenUntilCurrentValue()) - 2;
    };

    const calculateGreenUntilCurrentValue = (): number => {
        return (100 - currentValue) - startValue;
    }

    const calculateRest = () => {
        return 100 - endValue;
    }

    return (
        <view>
            <view>
                <view className="container mt-3"
                      style={{width: "100%"}}>
                    <h5 style={{color: 'green'}}>
                        {labelText}
                    </h5>
                    <text>{t("current-value")}{currentValue}</text>
                    <view className="progress">
                        <view className="progress-bar bg-danger"
                              style={{width: `${startValue}%`}}>
                        </view>
                        <view className="progress-bar bg-success"
                              style={{width: `${calculateGreenUntilCurrentValue()}%`}}>
                            min: {startValue}
                        </view>
                        <view className="progress-bar bg-black"
                              style={{width: "2%"}}>
                        </view>
                        <view className="progress-bar bg-success"
                              style={{width: `${calculateSecondGreenWidth()}%`}}>
                            max: {endValue}
                        </view>
                        <view className="progress-bar bg-danger" style={{width: `${calculateRest()}%`}}>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    );
};
