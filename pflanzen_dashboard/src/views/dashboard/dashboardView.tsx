import React, { useEffect } from 'react';
import CustomButton from '../subComponents/customButton/customButton';
import plantImage from '../../assets/AvocadoPlant.png';
import { useAppState } from '../../AppStateContext';
import { useTranslation } from "react-i18next";
import NavigationBar from '../subComponents/navigationBar/navigationBar';
import './dashboardView.css'

export default function DashboardView() {
    const { t } = useTranslation();
    const { setView } = useAppState();
    const { selectedSensor, latestSensorData } = useAppState();

    const checkWaterSoilRange = () => {
        if (latestSensorData && selectedSensor) {
            const waterSoil = parseFloat(latestSensorData.water_SOIL);
            const soilMin = parseFloat(selectedSensor.soilMoistureMin);
            const soilMax = parseFloat(selectedSensor.soilMoistureMax);
            return waterSoil >= soilMin && waterSoil <= soilMax;
        }
        return false;
    };

    useEffect(() => {
        console.log(selectedSensor)
        console.log(latestSensorData)
    }, []);

    const renderNoSensorSelected = () => (
        <div>
            <div className={"header-style"}>
                <h2>{t("no-sensor-selected")}</h2>
            </div>
            <div className={"status-container-dashboard"} style={{ opacity: 0 }}>
                <div className={"status-wrapper-dashboard"}>
                    <div>
                        <div className={"circle clear-circle"} style={{ opacity: 0 }}>
                            <text className={"clear-circle-text"}>
                                {t("needs-water")}
                            </text>
                        </div>
                        <div className={"circle clear-circle"} style={{ opacity: 0 }}>
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
    );

    const renderNoSensorData = () => (
        <div>
            <div className={"header-style"}>
                <h2>{t("no-sensor-data")}</h2>
            </div>
            <div className={"status-container-dashboard"} style={{ opacity: 0 }}>
                <div className={"status-wrapper-dashboard"}>
                    <div>
                        <div className={"circle clear-circle"} style={{ opacity: 0 }}>
                            <text className={"clear-circle-text"}>
                                {t("needs-water")}
                            </text>
                        </div>
                        <div className={"circle clear-circle"} style={{ opacity: 0 }}>
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
    );

    const renderSensorData = () => (
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
    );

    const renderButtonSection = () => (
        <div className={"bottom-bar"}>
            <div>
                {selectedSensor && selectedSensor.plantName === "" && (
                    (latestSensorData.water_SOIL === "" || latestSensorData.conduct_SOIL === "" || latestSensorData.temp_SOIL === "") ? (
                        <CustomButton
                            title={t("navigation.add-new-plant")}
                            onPress={() => setView('addNewPlant')}
                            href={"add-new-plant"}
                        />
                    ) : (
                        <>
                            <CustomButton
                                title={t("navigation.change-thresholds")}
                                onPress={() => setView('changeThresholds')}
                                href={"change-thresholds"}
                            />
                            <CustomButton
                                title={t("navigation.add-new-plant")}
                                onPress={() => setView('addNewPlant')}
                                href={"add-new-plant"}
                            />
                        </>
                    )
                )}
                {selectedSensor && selectedSensor.plantName !== "" && (
                    <>
                        <CustomButton
                            title={t("navigation.view-detailed-data")}
                            onPress={() => setView('detailedData')}
                            href={"detailed-data"}
                        />
                        <CustomButton
                            title={t("navigation.view-long-term-data")}
                            onPress={() => setView('longTermData')}
                            href={"view-long-term-data"}
                        />
                        <CustomButton
                            title={t("navigation.change-thresholds")}
                            onPress={() => setView('changeThresholds')}
                            href={"change-thresholds"}
                        />
                        <CustomButton
                            title={t("navigation.add-new-plant")}
                            onPress={() => setView('addNewPlant')}
                            href={"add-new-plant"}
                        />
                    </>
                )}
            </div>
        </div>
    );

    return (
        <div>
            <NavigationBar/>
            <div>
                {(!selectedSensor || selectedSensor.plantName === "") && renderNoSensorSelected()}
                {selectedSensor && selectedSensor.plantName !== "" && !checkWaterSoilRange() && renderNoSensorData()}
                {selectedSensor && selectedSensor.plantName !== "" && checkWaterSoilRange() && renderSensorData()}
            </div>
            {renderButtonSection()}
        </div>
    );
};
