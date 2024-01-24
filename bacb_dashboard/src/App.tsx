import 'bootstrap/dist/css/bootstrap.min.css';
import {AppStateProvider} from './AppStateContext';
import MainView from './views/MainView';
import {I18nextProvider} from "react-i18next";
import i18n from "./locales/i18n";

function App() {

    // @ts-ignore
    return (<I18nextProvider i18n={i18n}><AppStateProvider><MainView/></AppStateProvider></I18nextProvider>);
}

export default App;
