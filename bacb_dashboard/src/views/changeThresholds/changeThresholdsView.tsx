import {useAppState} from '../../AppStateContext';
import React, {useEffect, useState} from 'react';
import NavigationBar from '../subComponents/navigationBar/navigationBar';
import CustomMinMaxInput from '../subComponents/minMaxInput/customMinMaxInput';
import CustomButton from '../subComponents/customButton/customButton';
import {useTranslation} from 'react-i18next';
import "./changeThresholdsView.css"

export default function ChangeThresholdsView() {
    const {t} = useTranslation();
    const {setView, selectedSensor} = useAppState();
    // minMoisture represents the minimum moisture threshold value.
    const [minMoisture, setMinMoisture] = useState(
        selectedSensor.soilMoistureMin,
    );
    // maxMoisture represents the maximum moisture threshold value.
    const [maxMoisture, setMaxMoisture] = useState(
        selectedSensor.soilMoistureMax,
    );
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
    /**
     * open state variable represents the state of the DropDownWithLabel component.
     * It determines whether the dropdown list is open or closed.
     * Initial value: false
     */
    const [, setIsValueChanged] = useState(false);

    useEffect(() => {
        setIsValueChanged(
            minMoisture !== selectedSensor.soilMoistureMin ||
            maxMoisture !== selectedSensor.soilMoistureMax ||
            minTemperature !== selectedSensor.soilTemperatureMin ||
            maxTemperature !== selectedSensor.soilTemperatureMax ||
            minConductivity !== selectedSensor.soilConductivityMin ||
            maxConductivity !== selectedSensor.soilConductivityMax,
        );
    }, [minMoisture, maxMoisture, minTemperature, maxTemperature, minConductivity, maxConductivity, selectedSensor.soilMoistureMin, selectedSensor.soilMoistureMax, selectedSensor.soilTemperatureMin, selectedSensor.soilTemperatureMax, selectedSensor.soilConductivityMin, selectedSensor.soilConductivityMax]);

    /*const saveUpdatedThresholds = async () => {
        if (username) {
            const updatedData = {
                soilMoistureMin: minMoisture,
                soilMoistureMax: maxMoisture,
                soilTemperatureMin: minTemperature,
                soilTemperatureMax: maxTemperature,
                soilConductivityMin: minConductivity,
                soilConductivityMax: maxConductivity,
            };

            try {
                console.log('Username:', username);
                if (username === selectedSensor.username) {
                    await updateEntry(updatedData);
                    console.log('Thresholds updated successfully');
                }
                setIsValueChanged(false); // Reset the value changed status after saving
            } catch (error) {
                console.error('Error saving updated thresholds:', error);
            }
        }
    };*/

    // @ts-ignore
    /*const updateEntry = async (updatedData) => {
        const params = {
            TableName: 'BACB_Dashboard_Application_Sensors',
            Key: {
                UserID: selectedSensor.UserID,
                username: updatedData.username,
            },
            UpdateExpression: `
      SET soilMoistureMin = :minMoisture,
          soilMoistureMax = :maxMoisture,
          soilTemperatureMin = :minTemperature,
          soilTemperatureMax = :maxTemperature,
          soilConductivityMin = :minConductivity,
          soilConductivityMax = :maxConductivity
    `,
            ExpressionAttributeValues: {
                ':minMoisture': updatedData.soilMoistureMin,
                ':maxMoisture': updatedData.soilMoistureMax,
                ':minTemperature': updatedData.soilTemperatureMin,
                ':maxTemperature': updatedData.soilTemperatureMax,
                ':minConductivity': updatedData.soilConductivityMin,
                ':maxConductivity': updatedData.soilConductivityMax,
            },
        };

        try {
            console.log(params);
            const updatedItem = await dynamoDB.update(params).promise();
            console.log('Updated item:', updatedItem);
            return updatedItem;
        } catch (error) {
            console.error('Error updating the item:', error);
            throw error;
        }
    };*/

    return (
        <div>
            <NavigationBar/>
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
                            href={"edit-plant-details"}
                        />
                        <CustomButton
                            title={t('navigation.save-updated-thresholds')}
                            onPress={() => console.log("saveUpdatedThresholds")}
                            href={"dashboard"}
                        />
                        <CustomButton
                            title={t('navigation.back-to-dashboard')}
                            onPress={() => setView("dashboard")}
                            href={"dashboard"}
                        />
                    </div>
                </div>
            </div>
        </div>
        /*<div className={"container"}>

            <div className={"bottom-bar"}>
                <div>
                    <CustomButton
                        title={t('editPlantDetails')}
                        onPress={() => console.log("navigateToEditPlantDetails(navigation)")}
                    />
                    <CustomButton
                        title={t('saveUpdatedThresholds')}
                        onPress={saveUpdatedThresholds}
                    />
                    <CustomButton
                        title={t('backToDashboard')}
                        onPress={() => setView("dashboard")}
                    />
                </div>
            </div>
        </div>*/
    );
};
