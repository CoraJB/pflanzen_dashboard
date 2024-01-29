import React, {useState} from 'react';
import "./editPlantDetails.css"
import NavigationBar from '../subComponents/navigationBar/navigationBar';
import {useTranslation} from 'react-i18next';
import CustomButton from '../subComponents/customButton/customButton';
import {useAppState} from '../../AppStateContext';

export default function EditPlantDetailsView() {
    const {t} = useTranslation();
    const {setView} = useAppState();
    const [nameValue, setNameValue] = useState("");
    const [idValue, ] = useState("eui-a84041248185f280");

    return (
        <view>
            <NavigationBar/>
            <view>
                <view className={"header-style-edit-plant-details"}>
                    <h2>{t("navigation.edit-plant-details")}</h2>
                </view>
                <view className={"status-container-edit-plant-details"}>
                    <view className={"status-wrapper-edit-plant-details"}>
                        <div className="input-container">
                            <label className="label-text-edit-plant-details">
                                {t('plant-details.name-of-plant')}:
                            </label>
                            <input
                                className="input"
                                placeholder={t("plant-name")}
                                value={nameValue}
                                onChange={(e) => setNameValue(e.target.value)}
                            />
                            <label className="label-text-edit-plant-details">
                                {t("plant-details.tree-type")}:
                            </label>
                            <select className="input">
                                <option value="option1">{t("plant-details.tree-type-options.tree-option-one")}</option>
                                <option value="option2">{t("plant-details.tree-type-options.tree-option-two")}</option>
                                <option value="option3">{t("plant-details.tree-type-options.tree-option-three")}</option>
                            </select>
                            <label className="label-text-edit-plant-details">
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
                                onChange={(e) => setNameValue(e.target.value)}
                            />
                        </div>
                    </view>
                </view>
                <view className={"bottom-bar-edit-plant-details"}>
                    <view>
                        <CustomButton
                            title={t('navigation.change-thresholds')}
                            onPress={() => setView('save-new-details')}
                            href={"change-thresholds"}
                        />
                        <CustomButton
                            title={t('navigation.back-to-dashboard')}
                            onPress={() => setView("dashboard")}
                            href={"dashboard"}
                        />
                    </view>
                </view>
            </view>
        </view>
    );
};
