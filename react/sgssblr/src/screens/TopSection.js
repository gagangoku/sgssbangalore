import React, {Fragment} from "react";
import window from 'global';
import {DONATE_PAGE_URL, UPCOMING_EVENTS_PAGE_URL} from "../controller/HomeController";
import {Helmet} from "react-helmet";


export default class TopSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeVideoSlide: 0,
            scrollAmount: 2,
            tabIndex: 0,
        };
    }

    async componentDidMount() {
        // Muses radio player
        const obj = this;
        window.musesCbCounter = 0;
        window.musesCallback = function (event, value) {
            console.log('muses event, value: ', event, value);
            if (window.musesCbCounter++ === 0) {
                console.log('first muses callback');
                const div = document.getElementById('MusesRadioPlayer-HTML5-player-0');
                if (div) {
                    div.parentElement.removeChild(div);
                    document.getElementById('live_kirtan_div').appendChild(div);
                } else {
                    obj.fallbackToAudioTag();
                }
            }
        };

        try {
            window.MRP && window.MRP.insert({
                'url': 'http://sgpc.net:8000/;',
                'codec': 'mp3',
                'volume': 80,
                'autoplay': true,
                'jsevents': true,
                'buffering': 0,
                'title': 'Live Kirtan',
                'welcome': 'Live Kirtan',
                'bgcolor': '#FFFFFF',
                'wmode': 'transparent',
                'skin': 'darkconsole',
                'width': LIVE_KIRTAN_WIDTH,
                'height': 62,
            });
        } catch (e) {
            console.log('Exception in muses radio player: ', e);
            this.fallbackToAudioTag();
        }
    }

    render() {
        return (
            <div style={custom.root}>
                <Helmet>
                    <title>Sri Guru Singh Sabha, Bengaluru</title>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="/images/tabs.css" />
                </Helmet>

                {this.topSection()}
            </div>
        );
    }

    fallbackToAudioTag = () => {
        const audio = document.createElement('audio');
        audio.controls = "true";
        audio.autoPlay = AUDIO_AUTO_PLAY;
        audio.style = "width: 250px; padding: 0px";
        audio.preload = "auto";
        const source = document.createElement('source');
        source.src = "http://sgpc.net:8000/?type=http&nocache=3157";
        source.type = "audio/mpeg";

        console.log('audio, source: ', audio, source);
        audio.appendChild(source);
        document.getElementById('live_kirtan_div').appendChild(audio);
    };

    marqueeCtr = () => {
        return (
            <div style={custom.marqueeCtr}>
                <marquee>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <img src="/images/nagar-kirtan-procession.png" style={{height: 50, marginRight: 5}} />
                        <img src="/images/nagar-kirtan-bus.png" style={{height: 50}} />
                        <span style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: 15}}>
                                    <span style={{fontSize: 18, fontStyle: 'bold'}}>Guru Nanak Prakash Yatra</span>
                                    <span style={{fontSize: 16, color: 'blue'}}>Nagar Kirtan on November 3, 2019 (Sunday)</span>
                                </span>
                    </div>
                </marquee>
            </div>
        );
    };

    topSection = () => {
        return (
            <Fragment>
                <div style={{ width: '100%', backgroundColor: '#272979' }}>
                    <div style={custom.topHeader}>
                        <div style={custom.topHeader1}>
                            <a onClick={this.feedbackFn} style={{...custom.simpleA, marginLeft: 5, textAlign: 'center', pointerEvents: 'cursor' }}>Suggestion / Feedback Form</a>
                        </div>
                        <div style={custom.topHeader1}>
                            <img src="/images/Mail-icon.png" style={custom.topHeader1Img} />
                            <div>
                                <a href="mailto:sgssblr@gmail.com" style={custom.simpleA}>sgssblr@gmail.com</a>
                            </div>
                        </div>
                        <div style={custom.topHeader1}>
                            <img src="/images/call-us.png" style={custom.topHeader1Img} />
                            <div>
                                <a href="tel:080-25553461"  style={custom.simpleA}>080-25553461</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ background: 'url(/images/bg.jpg)', paddingBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <div style={custom.barRoot}>
                        <div style={custom.bar1}>
                            <img src="/images/logo.png" style={custom.bar1Img}/>
                        </div>

                        <div style={custom.bar2}>
                            <div style={custom.bar2Heading}>Sri Guru Singh Sabha, Bengaluru</div>
                            <div style={custom.bar2Subheading}>Gurdwara Sahib, Ulsoor - 560008</div>
                        </div>

                        <div style={custom.bar3}>
                            <div id="live_kirtan_div" style={{  }} />
                        </div>

                        <div id="upcoming-div" style={custom.upcomingDiv} onClick={this.upcomingFn}>
                            <span id="upcoming-span" style={custom.upcomingSpan}>UPCOMING</span>
                        </div>

                        <div style={custom.donateDiv} onClick={this.donateFn}>
                            <span style={custom.donateSpan}>DONATE</span>
                        </div>
                    </div>

                    <div style={custom.fixedLogo}>
                        <img src="/images/logo.png" style={custom.fixedLogoImg} />
                    </div>
                </div>
            </Fragment>
        );
    };

    feedbackFn = () => {
        window.open(`https://wa.me/91${HARMAN_PHONE_NUMBER}?text=${encodeURIComponent(FEEDBACK_TEXT)}`);
    };
    upcomingFn = () => {
        window.open(UPCOMING_EVENTS_PAGE_URL, '_blank');
    };
    donateFn = () => {
        window.open(DONATE_PAGE_URL, '_blank')
    };
}

const FEEDBACK_TEXT = 'Hi. I want to give feedback';
const HARMAN_PHONE_NUMBER = '9964351918';
const innerWidth = window.innerWidth || 500;
const LIVE_KIRTAN_WIDTH = 160 + Math.min(40, Math.max(0, innerWidth - 450));
const AUDIO_AUTO_PLAY = true;

const custom = {
    root: {
        fontFamily: '"PT Sans", sans-serif',
        fontSize: 14,
        width: '100%',
        overflowX: 'hidden',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
    },
    topHeader: {
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        paddingTop: 15,
        paddingBottom: 15,
    },
    topHeader1Img: {
        marginRight: '1%',
    },
    topHeader1: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    simpleA: {
        color: 'white',
        textDecoration: 'none',
    },

    barRoot: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 1000,
    },
    bar1: {
        flex: 1,
        marginLeft: '2%',
    },
    bar1Img: {
        height: 100,
        width: 100,
    },
    bar2: {
        flex: 5,
        minWidth: 200,
        display: 'flex',
        flexDirection: 'column',
    },
    bar2Heading: {
        fontFamily: 'DIN1451StdEngschrift',
        fontSize: 34,
        color: '#2e3192',
        // lineHeight: '20px',
        marginTop: 20,
        // marginBottom: 10,
        letterSpacing: 0.2,
    },
    bar2Subheading: {
        fontFamily: '"PT Sans", sans-serif',
        fontSize: 15,
        color: '#2d2d2d',
        lineHeight: '20px',
    },
    bar3: {
        flex: 1,
        minWidth: 200,
    },
    bar4: {
        flex: 1,
        minWidth: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: '1%',
    },

    fixedLogo: {
        position: 'fixed',
        top: '15%',
        right: 10,
    },
    fixedLogoImg: {
        height: 50,
        width: 50,
        zIndex: 1000,
    },

    upcomingDiv: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 50,
        borderStyle: 'solid',
        maxWidth: 200,
        minWidth: 130,
        height: 50,
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'rgb(47, 174, 241)',
        borderColor: 'rgb(47, 174, 241)',
        cursor: 'pointer',
        userSelect: 'none',
    },
    upcomingSpan: {
        fontFamily: 'Lato, "Open Sans", "Segoe UI", Helvetica, sans-serif',
        fontSize: 16,
        letterSpacing: 1,
        color: 'rgb(255, 255, 255)',
        marginLeft: 10,
        marginRight: 10,
    },

    donateDiv: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 50,
        borderStyle: 'solid',
        height: 50,
        maxWidth: 200,
        minWidth: 110,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'rgb(0, 52, 172)',
        borderColor: 'rgb(0, 52, 172)',
        cursor: 'pointer',
        userSelect: 'none',
        marginLeft: 10,
        marginRight: 10,
    },
    donateSpan: {
        fontFamily: 'Lato, "Open Sans", "Segoe UI", Helvetica, sans-serif',
        fontSize: 16,
        letterSpacing: 1,
        color: 'white',
    },

    marqueeCtr: {
        width: '100%',
        height: 50,
        marginTop: 10,
        marginBottom: 10,
    },

    navBarCtr: {
        // paddingLeft: 5,
        // paddingRight: 5,
        margin: 0,
        width: '100%',
    },
};

