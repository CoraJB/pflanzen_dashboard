import './detailedDataView.css'
import React from 'react';
import {useAppState} from '../../AppStateContext';
import NavigationBar from '../subComponents/navigationBar/navigationBar';
import plantImage from '../../assets/AvocadoPlant.png';
import CustomButton from '../subComponents/customButton/customButton';
import {useTranslation} from 'react-i18next';
import CustomStatusBar from '../subComponents/customStatusBar/customStatusBar';


export default function DetailedDataView() {
    const {t} = useTranslation();
    const {setView} = useAppState();
    const {selectedSensor, latestSensorData} = useAppState();

    return (
        <div>
            <NavigationBar/>
            <div>
                <div className={"header-style-detailed-data"}>
                    <h2>{selectedSensor.plantName}</h2>
                </div>
                <div className={"status-container-detailed-data"}>
                    <div className={"status-wrapper-detailed-data"}>
                        <div style={{width: "80vw"}}>
                            <div style={{paddingLeft: "35vw"}}>
                                <img
                                    src={plantImage}
                                    alt={'Avocado Plant'}
                                    className={"image"}
                                />
                            </div>
                            <div>
                                <div style={{width: "80vw"}}>
                                    <CustomStatusBar startValue={parseInt(selectedSensor.soilMoistureMin)}
                                                     endValue={parseInt(selectedSensor.soilMoistureMax)}
                                                     currentValue={parseInt(latestSensorData?.water_SOIL)}
                                                     labelText={t("soilMoisture")}/>
                                    <CustomStatusBar startValue={parseInt(selectedSensor.soilTemperatureMin)}
                                                     endValue={parseInt(selectedSensor.soilTemperatureMax)}
                                                     currentValue={parseInt(latestSensorData.temp_SOIL)}
                                                     labelText={t('soilTemperature')}/>
                                    <CustomStatusBar startValue={parseInt(selectedSensor.soilConductivityMin)}
                                                     endValue={parseInt(selectedSensor.soilConductivityMax)}
                                                     currentValue={parseInt(latestSensorData.conduct_SOIL)}
                                                     labelText={t('soilConductivity')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"bottom-bar-detailed-data"}>
                    <div>
                        <CustomButton
                            title={t('navigation.change-thresholds')}
                            onPress={() => setView("changeThresholds")}
                            disabled={false}
                            href={"change-thresholds"}
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
