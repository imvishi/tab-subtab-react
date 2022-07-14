import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AppNavBar from './app-nav-bar';
import SubTabBar from './sub-tab-bar';
import {Col, Row} from "react-bootstrap";
import '../assets/stylesheets/main.scss'
import { SectionType } from '../helper/sections';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Article from './article';

export default function Main(props) {
  const [section, setSection] = React.useState(SectionType.INTRODUCTION)
  const [subSection, setSubSection] = React.useState(SectionType.INTRODUCTION.subTabs[0])
  return(
    <Router>
      <AppNavBar
        section= {section}
        onClick= {(sectionType)=> {setSection(sectionType); setSubSection(sectionType.subTabs[0])}}
      />
      <div id="main-div">
        <Row>
          <Col className="sub-tab-bar-col" sm={12} md={4} lg={2}><SubTabBar section={section} selectedSubSection = {subSection} onClick= {(subSection) => setSubSection(subSection)}/></Col>
          <Col>
            <Routes>
              <Route exact path="/" element={<Navigate replace={true} to= {"/introduction"}/>}/>
              <Route exact path="/introduction" element={<Article subSection={subSection}/>}/>
              <Route exact path="/instance" element={<Article subSection={subSection}/>}/>
              <Route exact path="/list_rendering" element={<Article subSection={subSection}/>}/>
            </Routes>
          </Col>
        </Row>
      </div>
    </Router>
  );
}
