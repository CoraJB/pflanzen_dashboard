import React from 'react';
import {useTranslation} from 'react-i18next';
import './customMinMaxInput.css';
import {Tooltip} from 'react-tooltip'
import {FaQuestionCircle} from 'react-icons/fa';

type Props = {
    minValue: string;
    setMinValue: React.Dispatch<React.SetStateAction<string>>;
    maxValue: string;
    setMaxValue: React.Dispatch<React.SetStateAction<string>>;
    labelText: string;
    tooltipText: string;
    minPlaceholder?: string;
    maxPlaceholder?: string;
    setMargin?: boolean;
};

export default function CustomMinMaxInput(props: Props) {
    const {t} = useTranslation();
    const {
        minValue,
        setMinValue,
        maxValue,
        setMaxValue,
        labelText,
        tooltipText,
        minPlaceholder,
        maxPlaceholder,
        setMargin
    } = props;

    return (
        <div className={setMargin ? "optional-styling" : ""}>
            <div className="label-container">
                <label className="label-text-min-max">{labelText}</label>
                <div className={"tooltip-min-max"}>
                    <h5
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={tooltipText}>
                        <FaQuestionCircle/>
                    </h5>
                    <Tooltip id="my-tooltip"/>
                </div>
            </div>
            <div>
                <label className="min-max-text">{t('min')}</label>
                <div>
                    <input
                        className="input"
                        placeholder={minPlaceholder}
                        value={minValue}
                        onChange={(e) => setMinValue(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <label className="min-max-text">{t('max')}</label>
                <div>
                    <input
                        className="input"
                        placeholder={maxPlaceholder}
                        value={maxValue}
                        onChange={(e) => setMaxValue(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
