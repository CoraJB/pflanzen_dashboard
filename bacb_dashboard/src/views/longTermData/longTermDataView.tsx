import React, {useEffect, useState} from 'react';
import NavigationBar from '../subComponents/navigationBar/navigationBar';
import './longTermDataView.css';
import CustomButton from '../subComponents/customButton/customButton';
import {useTranslation} from 'react-i18next';
import {useAppState} from '../../AppStateContext';
import {Line} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import i18n from 'i18next';

Chart.register(...registerables);


export default function LongTermDataView() {
    const {t} = useTranslation();
    const {setView} = useAppState();
    const [timeRange, setTimeRange] = useState('24_hours');
    const [showSoilMoisture] = useState(true);
    const [showSoilTemperature] = useState(true);
    const [showSoilConductivity] = useState(true);
    const [chartLabels, setChartLabels] = useState({
        soilMoisture: t('soil-moisture'),
        soilTemperature: t('soil-temperature'),
        soilConductivity: t('soil-conductivity'),
    });

    const [chartData, setChartData] = useState({
        labels: [t('time-labels.12AM'), t('time-labels.4AM'), t('time-labels.8AM'),
            t('time-labels.12PM'), t('time-labels.4PM'), t('time-labels.8PM'),
            t('time-labels.12AM')],
        datasets: [
            {
                label: chartLabels.soilMoisture,
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                hidden: !showSoilMoisture,
            },
            {
                label: chartLabels.soilTemperature,
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                hidden: !showSoilTemperature,
            },
            {
                label: chartLabels.soilConductivity,
                data: [18, 38, 20, 89, 46, 67, 30],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                hidden: !showSoilConductivity,
            },
        ],
    });

    useEffect(() => {
        setChartLabels({
            soilMoisture: t('soil-moisture'),
            soilTemperature: t('soil-temperature'),
            soilConductivity: t('soil-conductivity'),
        });
    }, [t]);

    const handleTimeRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedTimeRange = event.target.value;
        setTimeRange(selectedTimeRange);

        // Update chart labels based on the selected time range
        let newLabels: string[] = [];
        switch (selectedTimeRange) {
            case '24_hours':
                newLabels = [t('time-labels.12AM'), t('time-labels.4AM'), t('time-labels.8AM'),
                    t('time-labels.12PM'), t('time-labels.4PM'), t('time-labels.8PM'),
                    t('time-labels.12AM')];
                break;
            case 'seven_days':
                newLabels = [t("days-of-week.mon"), t("days-of-week.tue"), t("days-of-week.wed"),
                    t("days-of-week.thu"), t("days-of-week.fri"), t("days-of-week.sat"),
                    t("days-of-week.sun")];
                break;
            case 'one_month':
                newLabels = [t("weeks.week-one"), t("weeks.week-two"), t("weeks.week-three"),
                    t("weeks.week-four")];
                break;
            case 'one_year':
                newLabels = [t('months.january'), t('months.february'), t('months.march'),
                    t('months.april'), t('months.mai'), t('months.june'), t('months.july'),
                    t('months.august'), t('months.september'), t('months.october'),
                    t('months.november'), t('months.dezember')];
                break;
            default:
                break;
        }

        const updatedChartData = {
            ...chartData,
            labels: newLabels,
        };

        // Update chart data with new labels
        setChartData(updatedChartData);
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: t('plant-name'),
            },
        },
    };

    return (
        <div>
            <NavigationBar/>
            <div>
                <div className="header-style-long-term-data">
                    <h2>{t('long-term-data-chart')}</h2>
                </div>
                <div>
                    <div className="status-container-long-term-data">
                        <div className="status-wrapper-long-term-data">
                            <Line options={options} data={chartData}/>
                            <div className="time-range-selector">
                                <label>
                                    <input
                                        type="radio"
                                        value="24_hours"
                                        checked={timeRange === '24_hours'}
                                        onChange={handleTimeRangeChange}
                                    />
                                    {t("time-ranges.last-24h")}
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="seven_days"
                                        checked={timeRange === 'seven_days'}
                                        onChange={handleTimeRangeChange}
                                    />
                                    {t("time-ranges.last-week")}
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="one_month"
                                        checked={timeRange === 'one_month'}
                                        onChange={handleTimeRangeChange}
                                    />
                                    {t("time-ranges.last-month")}
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="one_year"
                                        checked={timeRange === 'one_year'}
                                        onChange={handleTimeRangeChange}
                                    />
                                    {t("time-ranges.last-year")}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-bar-long-term-data">
                    <div>
                        <CustomButton
                            title={t('navigation.back-to-dashboard')}
                            onPress={() => setView('dashboard')}
                            href={"dashboard"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
