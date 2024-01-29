import React from 'react';
import CustomButton from '../subComponents/customButton/customButton';
import plantImage from '../../assets/AvocadoPlant.png';
import {useAppState} from '../../AppStateContext';
import {useTranslation} from "react-i18next";
import NavigationBar from '../subComponents/navigationBar/navigationBar';
import './dashboardView.css'

export default function DashboardView() {
    // translation for the view
    const {t} = useTranslation();
    const {setView} = useAppState();
    const {selectedSensor, latestSensorData} = useAppState();

    const checkWaterSoilRange = () => {
        if (latestSensorData && selectedSensor) {
            const waterSoil = parseFloat(latestSensorData.water_SOIL);
            const soilMin = parseFloat(selectedSensor.soilMoistureMin);
            const soilMax = parseFloat(selectedSensor.soilMoistureMax);
            return waterSoil >= soilMin && waterSoil <= soilMax;
        }

        return false;
    };

    return (
        <div>
            <NavigationBar/>
            <div>
                {selectedSensor && selectedSensor.plantName === "" ? (
                    <div>
                        <div className={"header-style"}>
                            <h2>{t("no-sensor-selected")}</h2>
                        </div>
                        <div className={"status-container-dashboard"} style={{opacity: 0}}>
                            <div className={"status-wrapper-dashboard"}>
                                <div>
                                    <div className={"circle clear-circle"} style={{opacity: 0}}>
                                        <text className={"clear-circle-text"}>
                                            {t("needs-water")}
                                        </text>
                                    </div>
                                    <div className={"circle clear-circle"} style={{opacity: 0}}>
                                        <text className={"clear-circle-text"}>
                                            {t("enough-water")}
                                        </text>
                                    </div>
                                </div>
                                <img
                                    src={plantImage}
                                    alt={'No Sensor selected'}
                                    className={"clear-image"}
                                />
                            </div>
                        </div>
                    </div>
                ) : checkWaterSoilRange() ? (
                    latestSensorData.water_SOIL === "" || latestSensorData.conduct_SOIL === "" || latestSensorData.temp_SOIL === "" ? (
                        <div>
                            <div className={"header-style"}>
                                <h2>{t("no-sensor-data")}</h2>
                            </div>
                            <div className={"status-container-dashboard"} style={{opacity: 0}}>
                                <div className={"status-wrapper-dashboard"}>
                                    <div>
                                        <div className={"circle clear-circle"} style={{opacity: 0}}>
                                            <text className={"clear-circle-text"}>
                                                {t("needs-water")}
                                            </text>
                                        </div>
                                        <div className={"circle clear-circle"} style={{opacity: 0}}>
                                            <text className={"clear-circle-text"}>
                                                {t("enough-water")}
                                            </text>
                                        </div>
                                    </div>
                                    <img
                                        src={plantImage}
                                        alt={'No Sensor selected'}
                                        className={"clear-image"}
                                    />
                                </div>
                            </div>
                        </div>) : (
                        <div>
                            <div className={"header-style"}>
                                <h2>{selectedSensor.plantName}</h2>
                            </div>
                            <div className={"status-container-dashboard"}>
                                <div className={"status-wrapper-dashboard"}>
                                    <div>
                                        <div className={"circle clear-circle"}>
                                            <text className={"clear-circle-text"}>
                                                {t("needs-water")}
                                            </text>
                                        </div>
                                        <div className={"circle green-circle"}>
                                            <text className={"circle-text"}>
                                                {t("enough-water")}
                                            </text>
                                        </div>
                                    </div>
                                    <img
                                        src={plantImage}
                                        alt={"Avocado Plant"}
                                        className={"image"}
                                    />
                                </div>
                            </div>
                        </div>
                    )) : (
                    <div>
                        <div className={"header-style"}>
                            <h2>{selectedSensor.plantName}</h2>
                        </div>
                        <div className={"status-container-dashboard"}>
                            <div className={"status-wrapper-dashboard"}>
                                <div>
                                    <div className={"circle red-circle"}>
                                        <text className={"circle-text"}>
                                            {t("needs-water")}
                                        </text>
                                    </div>
                                    <div className={"circle clear-circle"}>
                                        <text className={"clear-circle-text"}>
                                            {t("enough-water")}
                                        </text>
                                    </div>
                                </div>
                                <img
                                    src={plantImage}
                                    alt={"Plant"}
                                    className={"image"}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {selectedSensor && selectedSensor.plantName === "" ? (
                latestSensorData.water_SOIL === "" || latestSensorData.conduct_SOIL === "" || latestSensorData.temp_SOIL === "" ? (
                    <div className={"bottom-bar"}>
                        <div>
                            <CustomButton
                                title={t("navigation.add-new-plant")}
                                onPress={() => setView('addNewPlant')}
                                disabled={false}
                                href={"add-new-plant"}
                            />
                        </div>
                    </div>
                ) : (
                    <div className={"bottom-bar"}>
                        <div>
                            <CustomButton
                                title={t("navigation.change-thresholds")}
                                onPress={() => setView('changeThresholds')}
                                disabled={false}
                                href={"change-thresholds"}
                            />
                            <CustomButton
                                title={t("navigation.add-new-plant")}
                                onPress={() => setView('addNewPlant')}
                                disabled={false}
                                href={"add-new-plant"}
                            />
                        </div>
                    </div>
                )) : (
                <div className={"bottom-bar"}>
                    <div>
                        <CustomButton
                            title={t("navigation.view-detailed-data")}
                            onPress={() => setView('detailedData')}
                            disabled={false}
                            href={"detailed-data"}
                        />
                        <CustomButton
                            title={t("navigation.change-thresholds")}
                            onPress={() => setView('changeThresholds')}
                            disabled={false}
                            href={"change-thresholds"}
                        />
                        <CustomButton
                            title={t("navigation.add-new-plant")}
                            onPress={() => setView('addNewPlant')}
                            disabled={false}
                            href={"add-new-plant"}
                        />
                    </div>
                </div>)}
        </div>
    );
};
