import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import DashboardView from './dashboard/dashboardView';
import DetailedDataView from './detailedData/detailedDataView';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChangeThresholdsView from './changeThresholds/changeThresholdsView';
import EditPlantDetailsView from './editPlantDetails/editPlantDetails';
import LongTermDataView from './longTermData/longTermDataView';
import AddNewPlantView from './addNewPlant/addNewPlant';

const Dashboard = () => <p><DashboardView/></p>
const DetailedData = () => <p><DetailedDataView/></p>
const ChangeThresholds = () => <p><ChangeThresholdsView/></p>
const EditPlantDetails = () => <p><EditPlantDetailsView/></p>
const LongTermData = () => <p><LongTermDataView/></p>
const AddNewPlant = () => <p><AddNewPlantView/></p>

function MainView() {

    return (
        <Router>
            <Routes>
                <Route path="/dashboard" Component={Dashboard}/>
                <Route path="/detailed-data" Component={DetailedData}/>
                <Route path="/change-thresholds" Component={ChangeThresholds}/>
                <Route path="/edit-plant-details" Component={EditPlantDetails}/>
                <Route path="/view-long-term-data" Component={LongTermData}/>
                <Route path="/add-new-plant" Component={AddNewPlant}/>
            </Routes>
        </Router>
    );
    // @ts-ignore
    //return (<view>{showView()}</view>);
}

export default MainView;
