import {SensorData} from "./interfaces";

function bundleEntries(extraction: SensorData[], key: string): SensorData[] {
    const filteredEntries = extraction.filter(
        (elem: SensorData) => elem.device_id === key
    );
    return filteredEntries.map(
        (entry: SensorData) =>
            ({
                device_id: entry.device_id,
                conduct_SOIL: entry.conduct_SOIL,
                temp_SOIL: entry.temp_SOIL,
                water_SOIL: entry.water_SOIL,
                time: entry.time
            } as SensorData)
    );
}

