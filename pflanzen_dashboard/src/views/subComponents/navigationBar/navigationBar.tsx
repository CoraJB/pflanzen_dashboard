import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useAppState} from '../../../AppStateContext';
import {useTranslation} from "react-i18next";
import SensorsMock from "../../../assets/exampleSensorsMock.json"
import {SensorEntry} from '../../../logic/interfaces';

/**
 * The NavigationBar component is responsible for rendering the navigation bar at the top of the screen.
 * It displays the dashboard name, navigation links, and language options.
 */
export default function NavigationBar() {
    // Function to set the current view in the app state
    const {setView} = useAppState();
    // Provides access to the translation functions and current language
    const {i18n} = useTranslation();
    // Translation function to translate text based on the current language
    const {t} = useTranslation();
    // Function to set the selected sensor in the app state
    const {setSelectedSensor} = useAppState();

    /**
     * Changes the language of the application when a language option is selected.
     * @param language - The chosen language code.
     * Supported languages: "en" (English), "ger" (German), "fr" (French), "es" (Spanish), "it" (Italian),
     * "zh" (Chinese), "hi" (Hindi), "ar" (Arabic), "pt" (Portuguese), "ru" (Russian), "ja" (Japanese),
     * "nl" (Dutch), "ko" (Korean).
     */
    const changeLanguage = (language: string | undefined) => {
        i18n.changeLanguage(language).then(r => console.log(r));
    };

    /**
     * Sets the selected sensor based on the chosen sensor name from the dropdown menu.
     * @param selectedSensorName - The chosen sensor name.
     */
    const setSensor = (selectedSensorName: string) => {
        for (let i = 0; i < SensorsMock.length; i++) {
            if (selectedSensorName === SensorsMock[i].plantName) {
                setSelectedSensor(SensorsMock[i] as SensorEntry);
            }
        }
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>{t("dashboard-name")}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => setView("dashboard")}
                                      href="dashboard">{t("navigation.home")}</Nav.Link>
                            <NavDropdown title={t("dropdown-title")} id="basic-nav-dropdown">
                                {SensorsMock.map((sensor: SensorEntry) => (
                                    <NavDropdown.Item
                                        key={sensor.plantName}
                                        onClick={() => setSensor(sensor.plantName)}
                                    >
                                        {sensor.plantName}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title={t("languages")} id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("en")}>{t("locales.en")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("ger")}>{t("locales.ger")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("fr")}>{t("locales.fr")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("es")}>{t("locales.es")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("it")}>{t("locales.it")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("zh")}>{t("locales.zh")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("hi")}>{t("locales.hi")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("ar")}>{t("locales.ar")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("pt")}>{t("locales.pt")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("ru")}>{t("locales.ru")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("ja")}>{t("locales.ja")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("nl")}>{t("locales.nl")}</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => changeLanguage("ko")}>{t("locales.ko")}</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
