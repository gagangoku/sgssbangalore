import React from 'react';
import {Route} from "react-router-dom";
import HomePageScreen from "../screens/HomePageScreen";
import window from 'global';
import DonateScreen from "../screens/DonateScreen";


export const HOME_PAGE_URL = '/';
export const TEMP_PAGE_URL = '/temp';
export const UPCOMING_EVENTS_PAGE_URL = '/upcoming';
export const DONATE_PAGE_URL = '/donate';
export const SPLASH_PAGE_URL = '/splash';

class StepHome extends React.Component {
    static URL = HOME_PAGE_URL;
    constructor(props) {
        super(props);
    }

    render() {
        return (<HomePageScreen location={this.props.location} />);
    }
}

class StepUpcoming extends React.Component {
    static URL = UPCOMING_EVENTS_PAGE_URL;
    constructor(props) {
        super(props);
    }

    render() {
        const imgSrc = 'https://raw.githubusercontent.com/gagangoku/sgssbangalore/main/react/sgssblr/images/SGSS_Gurpurab_Schedule_2022-23.jpeg';
        const elecSchedule = 'https://raw.githubusercontent.com/gagangoku/sgssbangalore/main/react/sgssblr/images/SGSS_ELECTION_SCHEDULE.pdf';
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href={elecSchedule} style={{ marginTop: 20 }}>Upcoming election schedule - 27 Aug, 2023</a>
                <img src={imgSrc} style={{ width: Math.min(window.innerWidth, 600) }} />
            </div>
        );
    }
}

class StepDonate extends React.Component {
    static URL = DONATE_PAGE_URL;
    constructor(props) {
        super(props);
    }

    render() {
        return (<DonateScreen location={this.props.location} />);
    }
}

class StepSplash extends React.Component {
    static URL = SPLASH_PAGE_URL;
    constructor(props) {
        super(props);
    }

    render() {
        return (<div />);
    }
}

const steps = [
    StepHome,
    StepUpcoming,
    StepDonate,
    StepSplash,
];
const routes = (steps.map(x => <Route exact path={x.URL} component={x} key={x.URL} />));
routes.push(<Route exact path={TEMP_PAGE_URL} component={StepHome} key={TEMP_PAGE_URL} />);

export {
    routes
};

