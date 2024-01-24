import React, {useEffect, useState} from 'react';
import CustomButton from '../subComponents/customButton/customButton';
import plantImage from '../../assets/AvocadoPlant.png';
import {useAppState} from '../../AppStateContext';
import {useTranslation} from "react-i18next";
import NavigationBar from '../subComponents/navigationBar/navigationBar';
import './dashboardView.css'
import Sensor from "../../assets/sensorData.json"
import {SensorEntry} from '../../logic/interfaces';

export default function DashboardView() {
    const { t } = useTranslation();
    const {setView} = useAppState();
    const { selectedSensor, setSelectedSensor, latestSensorData } = useAppState();
    const [sensorDataFromFile, setSensorDataFromFile] = useState(null);

    useEffect(() => {
        // Assuming you have a method to read the JSON file
        const fetchDataFromFile = async () => {
            try {
                const response = await fetch('../../assets/sensorData.json'); // Specify the correct path
                const data = await response.json();
                setSensorDataFromFile(data);
            } catch (error) {
                console.error('Error fetching sensor data from file:', error);
            }
        };

        fetchDataFromFile();
    }, []);

    const checkWaterSoilRange = () => {
        if (latestSensorData && selectedSensor) {
            const waterSoil = parseFloat(latestSensorData.water_SOIL);
            const soilMin = parseFloat(selectedSensor.soilMoistureMin);
            const soilMax = parseFloat(selectedSensor.soilMoistureMax);
            return waterSoil >= soilMin && waterSoil <= soilMax;
        }

        return false;
    };

    // Update selectedSensor when sensorDataFromFile changes
    useEffect(() => {
        console.log(Sensor)
        if (Sensor as SensorEntry) {
            setSelectedSensor({
                endDeviceID: Sensor.endDeviceID,
                plantName: Sensor.plantName,
                //rootType: Sensor.rootType,
                soilConductivityMax: Sensor.soilConductivityMax,
                soilConductivityMin: Sensor.soilConductivityMin,
                soilMoistureMax: Sensor.soilMoistureMax,
                soilMoistureMin: Sensor.soilMoistureMin,
                soilTemperatureMax: Sensor.soilTemperatureMax,
                soilTemperatureMin: Sensor.soilTemperatureMin,
                //treeType: Sensor.treeType,
            } as SensorEntry);
        }
    }, [sensorDataFromFile, setSelectedSensor]);

    return (
        <div>
            <NavigationBar/>
            <div>
                {!selectedSensor ? (
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
                ) : !checkWaterSoilRange() ? (
                    <div>
                        <div className={"header-style"}>
                            <h2>selectedSensor</h2>
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
                ) : (
                    <div>
                        <div className={"header-style"}>
                            <h2>selectedSensor.plantName</h2>
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
            <div className={"bottom-bar"}>
                <div>
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
                </div>
            </div>
        </div>
    );
};
