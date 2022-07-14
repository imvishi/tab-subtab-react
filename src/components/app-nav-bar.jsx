import {
    Navbar,
    Nav
} from "react-bootstrap";
import {SectionType} from "../helper/sections";
import '../assets/stylesheets/app-nav-bar.scss'
import {
  Link
} from "react-router-dom";

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

const navItemStyle = {
  margin: '5px'
}

const getNavLinkClassName  = (actualSection, expectedSection) => {
  return (actualSection == expectedSection) ? "nav_activelink" : "nav_link"
}

/**
 * Component to Render NavBar
 */
export default function AppNavBar({ section = SectionType.INTRODUCTION, onClick = null }) {

  return(
    <Navbar expand="lg" bg="dark" variant="dark" >
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item style={navItemStyle}  onClick={() => onClick(SectionType.INTRODUCTION)} ><Link className={getNavLinkClassName(section, SectionType.INTRODUCTION)} to="/introduction">Introduction</Link></Nav.Item>
          <Nav.Item style={navItemStyle}  onClick={() => onClick(SectionType.INSTANCE)}><Link  className={getNavLinkClassName(section, SectionType.INSTANCE)} to="/instance">The instance</Link></Nav.Item>
          <Nav.Item style={navItemStyle}  onClick={() => onClick(SectionType.LIST)}><Link  className={getNavLinkClassName(section, SectionType.LIST)} to="/list_rendering">List rendering</Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}