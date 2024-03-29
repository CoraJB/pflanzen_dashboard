import React, {createContext, useContext, useState} from 'react';
import {SensorData, SensorEntry} from './logic/interfaces';

interface AppStateContextType {
    labelText: string;
    setLabelText?: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    items: { label: any; value: any }[];
    setItems: React.Dispatch<React.SetStateAction<{ label: any; value: any }[]>>;
    selectedSensor: SensorEntry;
    setSelectedSensor: React.Dispatch<React.SetStateAction<SensorEntry>>;
    latestSensorData: SensorData;
    setLatestSensorData: React.Dispatch<React.SetStateAction<SensorData>>;
    registeredSensors: SensorEntry[];
    setRegisteredSensors?: React.Dispatch<React.SetStateAction<SensorEntry[]>>;
    treeItems: { label: string; value: string }[];
    setTreeItems: React.Dispatch<React.SetStateAction<{ label: string; value: string }[]>>;
    rootItems: { label: string; value: string }[];
    setRootItems: React.Dispatch<React.SetStateAction<{ label: string; value: string }[]>>;
    view: string; // New view state
    setView: React.Dispatch<React.SetStateAction<string>>; // New setView function
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

// @ts-ignore
export const AppStateProvider: React.FC = ({children}) => {
    /**
     * labelText variable stores the date when the plant was added.
     * Example value: 'Added 25.03.2023'
     */
    const [labelText, setLabelText] = useState('');
    /**
     * value state variable represents the selected value from the dropdown list.
     * Initial value: 'Plant1'
     */
    const [value, setValue] = useState('');
    /**
     * items state variable represents the placeholder list of items in the dropdown list.
     */
    const [items, setItems] = useState<{ label: any; value: any }[]>([]);
    const [selectedSensor, setSelectedSensor] = useState<SensorEntry>({
        endDeviceID: '',
        plantName: '',
        rootType: '',
        soilConductivityMax: '',
        soilConductivityMin: '',
        soilMoistureMax: '',
        soilMoistureMin: '',
        soilTemperatureMax: '',
        soilTemperatureMin: '',
        treeType: '',
    });
    const [latestSensorData, setLatestSensorData] = useState<SensorData>({
        conduct_SOIL: '',
        device_id: '',
        temp_SOIL: '',
        time: '',
        water_SOIL: '',
    });
    const [registeredSensors, setRegisteredSensors] = useState<SensorEntry[]>([]);
    // treeItems state variable represents the items in the tree dropdown list.
    const [treeItems, setTreeItems] = useState([
        {label: 'Avocado Plant', value: 'Avocado'},
        {label: 'Maple Tree', value: 'Maple'}, // Ahorn
        {label: 'Oak Tree', value: 'Oak'}, // Eiche
        {label: 'Pine Tree', value: 'Pine'}, // Kiefer
        {label: 'Birch Tree', value: 'Birch'}, //Birke
        {label: 'Spruce Tree', value: 'Spruce'}, // Fichte
        {label: 'Fir Tree', value: 'Fir'}, // Tanne
        {label: 'Ash Tree', value: 'Ash'}, // Esche
        {label: 'Poplar Tree', value: 'Poplar'}, // Pappel
        {label: 'Willow Tree', value: 'Willow'}, // Weide
        {label: 'Elm Tree', value: 'Elm'}, // Ulme
    ]);
    // rootItems state variable represents the items in the root dropdown list.
    const [rootItems, setRootItems] = useState([
        { label: 'Deep Root', value: 'deep' },
        { label: 'Flat Root', value: 'flat' },
        { label: 'Heart Root', value: 'heart' },
    ]);
    const [view, setView] = useState('dashboard');

    const state: AppStateContextType = {
        labelText,
        setLabelText,
        value,
        setValue,
        items,
        setItems,
        selectedSensor,
        setSelectedSensor,
        latestSensorData,
        setLatestSensorData,
        registeredSensors,
        setRegisteredSensors,
        treeItems,
        setTreeItems,
        rootItems,
        setRootItems,
        view,
        setView,
    };

    return <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>;
};

export const useAppState = (): AppStateContextType => {
    const context = useContext(AppStateContext);
    if (!context) {
        throw new Error('useAppState must be used within an AppStateProvider');
    }
    return context;
};
