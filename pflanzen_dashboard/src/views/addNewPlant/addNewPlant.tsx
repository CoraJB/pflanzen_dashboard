import React, {useState} from 'react';
import "./addNewPlant.css"
import NavigationBar from '../subComponents/navigationBar/navigationBar';
import {useTranslation} from 'react-i18next';
import CustomButton from '../subComponents/customButton/customButton';
import {useAppState} from '../../AppStateContext';
import CustomMinMaxInput from '../subComponents/minMaxInput/customMinMaxInput';

export default function AddNewPlantView() {
    const {t} = useTranslation();
    const {setView, selectedSensor} = useAppState();
    const [idValue, setIDValue] = useState("eui-a84041248185f280");
    const [nameValue, setNameValue] = useState("");
    // minMoisture represents the minimum moisture threshold value.
    const [minMoisture, setMinMoisture] = useState(
        selectedSensor.soilMoistureMin,
    );
    // maxMoisture represents the maximum moisture threshold value.
    const [maxMoisture, setMaxMoisture] = useState(
        selectedSensor.soilMoistureMax);
    // minTemperature represents the minimum temperature threshold value.
    const [minTemperature, setMinTemperature] = useState(
        selectedSensor.soilTemperatureMin,
    );
    // maxTemperature represents the maximum temperature threshold value.
    const [maxTemperature, setMaxTemperature] = useState(
        selectedSensor.soilTemperatureMax,
    );
    // minConductivity represents the minimum conductivity threshold value.
    const [minConductivity, setMinConductivity] = useState(
        selectedSensor.soilConductivityMin,
    );
    // maxConductivity represents the maximum conductivity threshold value.
    const [maxConductivity, setMaxConductivity] = useState(
        selectedSensor.soilConductivityMax,
    );


    // Todo exchange with DB connection
    const saveSensorToJson = () => {
        const sensorData = {
            endDeviceID: idValue,
            plantName: nameValue,
            soilMoistureMin: minMoisture,
            soilMoistureMax: maxMoisture,
            soilTemperatureMin: minTemperature,
            soilTemperatureMax: maxTemperature,
            soilConductivityMin: minConductivity,
            soilConductivityMax: maxConductivity,
        };

        const jsonString = JSON.stringify(sensorData, null, 2);

        const blob = new Blob([jsonString], { type: 'application/json' });

        const a = document.createElement('a');
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = 'sensorDataMock.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <NavigationBar/>
            <div>
                <div className={"header-style-add-new-plant"}>
                    <h2>{t("navigation.add-new-plant")}</h2>
                </div>
                <div className="scrollable-container">
                    <div className={"status-container-add-new-plant"}>
                        <div className={"status-wrapper-add-new-plant"}>
                            <div className="input-container-add-new-plant">
                                <label className="label-text-add-new-plant">
                                    {t('plant-details.name-of-plant')}:
                                </label>
                                <input
                                    className="input"
                                    placeholder={t("plant-name")}
                                    value={nameValue}
                                    onChange={(e) => setNameValue(e.target.value)}
                                />
                                <label className="label-text-add-new-plant">
                                    {t("plant-details.tree-type")}:
                                </label>
                                <select className="input">
                                    <option value="option1">{t("plant-details.tree-type-options.tree-option-one")}</option>
                                    <option value="option2">{t("plant-details.tree-type-options.tree-option-two")}</option>
                                    <option value="option3">{t("plant-details.tree-type-options.tree-option-three")}</option>
                                    <option value="option3">{t("plant-details.tree-type-options.tree-option-four")}</option>
                                    <option value="option3">{t("plant-details.tree-type-options.tree-option-five")}</option>
                                    <option value="option3">{t("plant-details.tree-type-options.tree-option-six")}</option>
                                    <option value="option3">{t("plant-details.tree-type-options.tree-option-seven")}</option>
                                    <option value="option3">{t("plant-details.tree-type-options.tree-option-eight")}</option>
                                    <option value="option3">{t("plant-details.tree-type-options.tree-option-nine")}</option>
                                    <option value="option3">{t("plant-details.tree-type-options.tree-option-ten")}</option>
                                </select>
                                <label className="label-text-add-new-plant">
                                    {t("plant-details.root-type")}:
                                </label>
                                <select className="input">
                                    <option value="option1">{t("plant-details.root-type-options.root-option-one")}</option>
                                    <option value="option1">{t("plant-details.root-type-options.root-option-two")}</option>
                                    <option value="option1">{t("plant-details.root-type-options.root-option-three")}</option>
                                </select>
                                <label className="label-text-edit-plant-details">
                                    {t('plant-details.end-device-id')}:
                                </label>
                                <input
                                    className="input"
                                    placeholder="eui-a84041248185f280"
                                    value={idValue}
                                    onChange={(e) => setIDValue(e.target.value)}
                                />
                                <CustomMinMaxInput
                                    minValue={minMoisture}
                                    setMinValue={setMinMoisture}
                                    maxValue={maxMoisture}
                                    setMaxValue={setMaxMoisture}
                                    labelText={t("soil-moisture")}
                                    tooltipText={t("tooltips.tooltip-soil-moisture")}
                                    minPlaceholder={selectedSensor.soilMoistureMin}
                                    maxPlaceholder={selectedSensor.soilMoistureMax}
                                    setMargin={true}
                                />
                                <CustomMinMaxInput
                                    minValue={minTemperature}
                                    setMinValue={setMinTemperature}
                                    maxValue={maxTemperature}
                                    setMaxValue={setMaxTemperature}
                                    labelText={t('soil-temperature')}
                                    tooltipText={t("tooltips.tooltip-soil-temperature")}
                                    minPlaceholder={selectedSensor.soilTemperatureMin}
                                    maxPlaceholder={selectedSensor.soilTemperatureMax}
                                    setMargin={true}
                                />
                                <CustomMinMaxInput
                                    minValue={minConductivity}
                                    setMinValue={setMinConductivity}
                                    maxValue={maxConductivity}
                                    setMaxValue={setMaxConductivity}
                                    labelText={t('soil-conductivity')}
                                    tooltipText={t("tooltips.tooltip-soil-conductivity")}
                                    minPlaceholder={selectedSensor.soilConductivityMin}
                                    maxPlaceholder={selectedSensor.soilConductivityMax}
                                    setMargin={true}
                                />
                                <div className={"bottom-bar-add-new-plant"}>
                                    <CustomButton
                                        title={t('navigation.save-new-plant')}
                                        onPress={saveSensorToJson}
                                        disabled={false}
                                        href={"dashboard"}
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
                </div>
            </div>
        </div>
    );
};
