import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useAppState} from '../../../AppStateContext';
import { useTranslation } from "react-i18next";

export default function NavigationBar() {
    const {setView} = useAppState();
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const changeLanguage = (language: string | undefined) => {
        i18n.changeLanguage(language).then(r => console.log(r));
        console.log("language change")
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>{t("dashboard-name")}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => setView("dashboard")} href="dashboard">{t("navigation.home")}</Nav.Link>
                            <Nav.Link>{t("synchronise")}</Nav.Link>
                            <NavDropdown title={t("dropdown-title")} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#plant">{t("plant-name")}</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>{t("navigation.settings")}</Nav.Link>
                            <NavDropdown title={t("languages")} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => changeLanguage("en")}>{t("locales.en")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("ger")}>{t("locales.ger")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("fr")}>{t("locales.fr")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("es")}>{t("locales.es")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("it")}>{t("locales.it")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("zh")}>{t("locales.zh")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("hi")}>{t("locales.hi")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("ar")}>{t("locales.ar")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("pt")}>{t("locales.pt")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("ru")}>{t("locales.ru")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("ja")}>{t("locales.ja")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("nl")}>{t("locales.nl")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("ko")}>{t("locales.ko")}</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
