/**
 * {
 *     "endDeviceID": "eui-a84041248185f280",
 *     "plantName": "Antonia",
 *     "rootType": "Root1",
 *     "soilConductivityMax": "45",
 *     "soilConductivityMin": "25",
 *     "soilMoistureMax": "20",
 *     "soilMoistureMin": "6",
 *     "soilTemperatureMax": "35",
 *     "soilTemperatureMin": "10",
 *     "treeType": "Avocado"
 *   }
 */
export interface SensorEntry {
    endDeviceID: string;
    plantName: string;
    rootType: string;
    soilConductivityMax: string;
    soilConductivityMin: string;
    soilMoistureMax: string;
    soilMoistureMin: string;
    soilTemperatureMax: string;
    soilTemperatureMin: string;
    treeType: string;
}

/**
 * {
 *   "device_id": "eui-a84041248185f280",
 *   "conduct_SOIL": 42,
 *   "temp_SOIL": "23.81",
 *   "water_SOIL": "12.73",
 *   "time": "2023-06-10T17:52:29.696Z"
 * }
 */
export interface SensorData {
    device_id: string;
    conduct_SOIL: string;
    temp_SOIL: string;
    water_SOIL: string;
    time: string;

}

// noinspection JSUnusedGlobalSymbols
export const sensorEntryMock: SensorEntry = {
    endDeviceID: "eui-a84041248185f280",
    plantName: "Antonia",
    rootType: "Root1",
    soilConductivityMax: "45",
    soilConductivityMin: "25",
    soilMoistureMax: "20",
    soilMoistureMin: "6",
    soilTemperatureMax: "35",
    soilTemperatureMin: "10",
    treeType: "Avocado",
}
