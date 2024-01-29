import { useAppState } from '../../AppStateContext';
import React, { useEffect, useState } from 'react';
import NavigationBar from '../subComponents/navigationBar/navigationBar';
import CustomMinMaxInput from '../subComponents/minMaxInput/customMinMaxInput';
import CustomButton from '../subComponents/customButton/customButton';
import { useTranslation } from 'react-i18next';
import "./changeThresholdsView.css";

export default function ChangeThresholdsView() {
    const { t } = useTranslation();
    const { setView, selectedSensor } = useAppState();
    const [minMoisture, setMinMoisture] = useState(selectedSensor.soilMoistureMin);
    const [maxMoisture, setMaxMoisture] = useState(selectedSensor.soilMoistureMax);
    const [minTemperature, setMinTemperature] = useState(selectedSensor.soilTemperatureMin);
    const [maxTemperature, setMaxTemperature] = useState(selectedSensor.soilTemperatureMax);
    const [minConductivity, setMinConductivity] = useState(selectedSensor.soilConductivityMin);
    const [maxConductivity, setMaxConductivity] = useState(selectedSensor.soilConductivityMax);
    const [isValueChanged, setIsValueChanged] = useState(false);

    useEffect(() => {
        setIsValueChanged(
            minMoisture !== selectedSensor.soilMoistureMin ||
            maxMoisture !== selectedSensor.soilMoistureMax ||
            minTemperature !== selectedSensor.soilTemperatureMin ||
            maxTemperature !== selectedSensor.soilTemperatureMax ||
            minConductivity !== selectedSensor.soilConductivityMin ||
            maxConductivity !== selectedSensor.soilConductivityMax
        );
    }, [minMoisture, maxMoisture, minTemperature, maxTemperature, minConductivity, maxConductivity, selectedSensor.soilMoistureMin, selectedSensor.soilMoistureMax, selectedSensor.soilTemperatureMin, selectedSensor.soilTemperatureMax, selectedSensor.soilConductivityMin, selectedSensor.soilConductivityMax]);

    const saveUpdatedThresholds = async () => {
        const updatedData = {
            ...selectedSensor,
            soilMoistureMin: minMoisture,
            soilMoistureMax: maxMoisture,
            soilTemperatureMin: minTemperature,
            soilTemperatureMax: maxTemperature,
            soilConductivityMin: minConductivity,
            soilConductivityMax: maxConductivity,
        };
        console.log(updatedData)

        // todo: add database connection
    };

    return (
        <div>
            <NavigationBar />
            <div>
                <div className={"header-style-change-thresholds"}>
                    <h2>{t("navigation.change-thresholds")}</h2>
                </div>
                <div className={"status-container-change-thresholds"}>
                    <div className={"status-wrapper-change-thresholds"}>
                        <div className="input-container">
                            <CustomMinMaxInput
                                minValue={minMoisture}
                                setMinValue={setMinMoisture}
                                maxValue={maxMoisture}
                                setMaxValue={setMaxMoisture}
                                labelText={t("soil-moisture")}
                                tooltipText={t("tooltips.tooltip-soil-moisture")}
                                minPlaceholder={selectedSensor.soilMoistureMin}
                                maxPlaceholder={selectedSensor.soilMoistureMax}
                            />
                        </div>
                        <div className="input-container">
                            <CustomMinMaxInput
                                minValue={minTemperature}
                                setMinValue={setMinTemperature}
                                maxValue={maxTemperature}
                                setMaxValue={setMaxTemperature}
                                labelText={t('soil-temperature')}
                                tooltipText={t("tooltips.tooltip-soil-temperature")}
                                minPlaceholder={selectedSensor.soilTemperatureMin}
                                maxPlaceholder={selectedSensor.soilTemperatureMax}
                            />
                        </div>
                        <div className="input-container">
                            <CustomMinMaxInput
                                minValue={minConductivity}
                                setMinValue={setMinConductivity}
                                maxValue={maxConductivity}
                                setMaxValue={setMaxConductivity}
                                labelText={t('soil-conductivity')}
                                tooltipText={t("tooltips.tooltip-soil-conductivity")}
                                minPlaceholder={selectedSensor.soilConductivityMin}
                                maxPlaceholder={selectedSensor.soilConductivityMax}
                            />
                        </div>
                    </div>
                </div>
                <div className={"bottom-bar-change-thresholds"}>
                    <div>
                        <CustomButton
                            title={t('navigation.edit-plant-details')}
                            onPress={() => setView('editPlantDetails')}
                            disabled={false}
                            href={"edit-plant-details"}
                        />
                        <CustomButton
                            title={t('navigation.save-updated-thresholds')}
                            onPress={() => saveUpdatedThresholds}
                            disabled={!isValueChanged} // Disable the button if there are no changes
                            href={""}
                        />
                        <CustomButton
                            title={t('navigation.back-to-dashboard')}
                            onPress={() => setView("dashboard")}
                            disabled={false}
                            href={"dashboard"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
