import React, {Fragment} from "react";
import Slider from "react-slick/lib";
import window from 'global';
import {UPCOMING_EVENTS_PAGE_URL} from "../controller/HomeController";
import {Helmet} from "react-helmet";
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import xrange from 'xrange';
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";


export default class HomePageScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeVideoSlide: 0,
            scrollAmount: 2,
            tabIndex: 0,
        };
    }

    async componentDidMount() {
        let upcomingDiv  = document.getElementById('upcoming-div');
        let upcomingSpan = document.getElementById('upcoming-span');
        let idx = 0;
        const COLORS = [
            '#ffffff',
            '#ffffff',
            '#000000',
        ];
        const BACKGROUND_COLORS = [
            '#e72d23',
            '#2faef1',
            '#fbf000',
        ];

        window.setInterval(() => {
            const backgroundColor = BACKGROUND_COLORS[idx];
            const color = COLORS[idx];
            idx = (idx + 1) % 3;

            upcomingDiv.style.backgroundColor = backgroundColor;
            upcomingSpan.style.color = color;
        }, 300);
    }

    render() {
        return (
            <div style={custom.root}>
                <Helmet>
                    <title>Sri Guru Singh Sabha, Bengaluru</title>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="/images/tabs.css" />
                </Helmet>

                <TopSection />
                {this.tabsSection()}
                <BottomSection />
            </div>
        );
    }

    tabsSection = () => {
        return (
            <div style={custom.navBarCtr}>
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <div style={custom.tabs.left} />
                        {xrange(0, TABS.length).map(x => <CustomTab key={x} selected={x === this.state.tabIndex}>{TABS[x].toUpperCase()}</CustomTab>)}
                    </TabList>

                    <TabPanel>{this.mainTab()}</TabPanel>
                    <TabPanel>{this.managementCommitteeTab()}</TabPanel>
                    <TabPanel>{this.programmeTab()}</TabPanel>
                    <TabPanel>{this.galleryTab()}</TabPanel>
                </Tabs>
            </div>
        );
    };

    mainTab = () => {
        return (
            <Fragment>
                {}
                {this.imageSliderSection()}

                <div style={custom.servicesSection}>
                    <div style={{ width: W }}>
                        {this.middleNavSection()}
                    </div>
                </div>

                <div style={custom.historicalSection}>
                    <div style={{ width: W }}>
                        <div style={{ color: 'white', fontSize: 28, textAlign: 'center', marginTop: 0, fontWeight: 'bold' }}>
                            Historical Gurdwaras In Karnataka
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, justifyContent: 'center' }}>
                            {this.historicalGurudwarasSection()}
                        </div>


                        <div style={{ color: 'white', fontSize: 28, textAlign: 'center', marginTop: 50, fontWeight: 'bold' }}>
                            Other gurdwaras in Bangalore
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, justifyContent: 'center' }}>
                            {this.otherGurudwarasSection()}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };

    managementCommitteeTab = () => {
        const cols = [
            [{
                name: 'S. Harjinder Singh',
                title: '(President)',
                img: '/images/harjinder_singh.jpg',
            }, {
                name: 'S. Hardeep Singh Chandok',
                title: '(Joint - Secertary)',
                img: '/images/hardeep_singh.jpg',

            }],
            [{
                name: 'S. Pritpal Singh Bhatia',
                title: '(Vice - President)',
                img: '/images/pritpal_singh_bhatia.jpg',
            }],
            [{
                name: 'S. Kuldeep Singh',
                title: '(Gen. Secretary)',
                img: '/images/kuldeep_singh.jpg',
            }, {
                name: 'S. Harmeet Singh Arora',
                title: '(Treasurer)',
                img: '/images/harmeet_singh.jpg',
            }]
        ];
        const members = [{
            name: 'S. Deepak Singh',
            img: '/images/deepak_singh.jpg',
        }, {
            name: 'S.Gurcharan Singh',
            img: '/images/gurcharan_singh.jpg',
        }, {
            name: <div style={{ fontSize: 14 }}>S. Harman Singh</div>,
            img: '/images/harman_singh.jpg',
        }, {
            name: 'S. Jaspal Singh',
            img: '/images/jaspal_singh.jpg',
        }, {
            name: 'S. Novjit Singh',
            img: '/images/novjit_singh.jpg',
        }, {
            name: 'S. Swaran Singh',
            img: '/images/swaran_singh.jpg',
        }, {
            name: 'Ms Gagandeep Kaur',
            img: '/images/gagandeep_kaur.jpg',
        }, {
            name: 'Ms. Parbeen Kaur',
            img: '/images/parbeen_kaur.jpg',
        }];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                          marginTop: 10, fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <div style={{ fontSize: 21, color: 'rgb(0, 64, 0)', marginTop: 20, marginBottom: 10 }}>Executive Committee</div>
                <div style={{ fontSize: 19, fontWeight: 600, color: 'rgb(0, 64, 0)', marginBottom: 10 }}>Office Bearers</div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {cols.map(c => {
                        return (
                            <div style={{ maxWidth: innerWidth / 3, width: 200 }}>
                                {c.map(x => {
                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                                      color: 'rgb(128, 128, 128)', fontSize: 13, fontWeight: 700, marginBottom: 10,
                                                      textAlign: 'center' }}>
                                            <img src={x.img} style={{ marginBottom: 10 }} />
                                            <div style={{ marginBottom: 10 }}>{x.name}</div>
                                            <div style={{ }}>{x.title}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <div style={{ color: 'rgb(39, 39, 39)', fontSize: 21, fontWeight: 400, marginTop: 20, marginBottom: 10 }}>Members</div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                              width: '100%', flexWrap: 'wrap', marginBottom: 20 }}>
                    {members.map(x => (
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                      margin: 5, maxWidth: innerWidth / 4, width: 100,
                                      color: 'rgb(128, 128, 128)', fontSize: 13 }}>
                            <img src={x.img} style={{ marginBottom: 5 }} />
                            <div style={{ textAlign: 'center', fontSize: 13 }}>{x.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    programmeTab = () => {
        const morning = [
            '03.30 a.m. - Parkash Sri Guru Granth Sahib',
            '03.30 to 04.00 a.m. - Naam Simran',
            '04.00 to 05.00 a.m. - Nitnem 5 Banis',
            '05.00 to 06.00 a.m. - Path Sukhmani Sahib',
            '06.00 to 07.15 a.m. - Kirtan Asa di Vaar',
            '07.15 to 07.30 a.m. - Anand Sahib, Ardas',
        ];
        const evening = [
            '06.15 to 07.00 p.m. - Chowki Sodar',
            '07.00 to 07.20 p.m. - Path Rehras Sahib',
            '07.20 to 07.30 p.m. - Ardas, Hukamnama',
            '07.30 to 08.15 p.m. - Gurbani Kirtan',
            '08.15 to 08.30 p.m. - Sukhasan',
        ];
        const sundayMorning = [
            '03.15 to 04.00 a.m. - Naam Simran',
            '04.00 to 05.00 a.m. - Nitnem 5 Banis',
            '05.00 to 06.00 a.m. - Path Sukhmani Sahib',
            '06.00 to 07.30 a.m. - Kirtan Asa di Vaar',
            '07.30 to 09.00 a.m. - Kirtan : Sadh Sangat',
            '09.00 to 10.00 a.m. - Kirtan : Hazuri Ragi Jatha',
            '10.00 to 10.15 a.m. - Anand Sahib - Ardas',
            <b>(Guru Ka Langar Afterwards)</b>,
        ];
        const sundayAfternoon = [
            '10.30 to 12.30 p.m. - Kirtan : Sadh Sangat',
            '12.30 to 01.00 p.m. - Katha:Giani Baldev Singh',
            '01.00 to 02.00 p.m. - Kirtan : Hazuri Ragi Jatha',
            '02.00 to 02.30 p.m. - Anand Sahib - Ardas',
            <b>(Guru Ka Langar Afterwards)</b>,
        ];
        const sundayEvening = [
            '06.15 to 07.00 p.m. - Chowki Sodar',
            '07.00 to 07.20 p.m. - Path Rehras Sahib',
            '07.20 to 07.30 p.m. - Ardas, Hukamnama',
            '07.30 to 08.15 p.m. - Kirtan:Hazuri Ragi Jatha',
            '08.15 to 08.30 p.m. - Sukhasan',
        ];
        const wednesdayEvening = [
            '06.15 to 07.00 p.m. - Chowki Sodar',
            '07.00 to 07.20 p.m. - Path Rehras Sahib',
            '07.20 to 07.30 p.m. - Ardas, Hukamnama',
            '07.30 to 08.00 p.m. - Kirtan by: Hazuri Ragi Jatha',
            '08.00 to 08.45 p.m. - Kirtan by: Sadh Sangat',
            '08.45 to 09.15 p.m. - Kirtan by: Hazuri Ragi Jatha',
            '09.15 to 09.30 p.m. - Anand Sahib  - Ardas - Sukhasan',
            <b>(Guru Ka Langar Afterwards)</b>,
        ];

        const headingStyle = { color: 'rgb(0, 64, 0)', fontSize: 21, fontWeight: 400, marginTop: 40, marginBottom: 10 };
        const subHeadingStyle = { color: '#000000', fontSize: 17, fontWeight: 600, marginTop: 15, marginBottom: 5 };
        const lineStyle = { marginBottom: 5 };
        const specialStyle = { color: 'rgb(255, 0, 0)', fontSize: 22, fontWeight: 600, marginTop: 30, marginBottom: 10 };

        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 20 }}>
                <div style={{ width: '90%', maxWidth: 800 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                        <div style={{ flex: 1, marginRight: 15 }}>
                            <div style={headingStyle}>Daily Routine</div>
                            <div style={{ color: 'rgb(128, 128, 128)', fontSize: 14, marginBottom: 10 }}>(Gurdwara Sahib will remain open from 3.30 a.m. to 8.30 p.m. daily)</div>
                            <div style={subHeadingStyle}>Morning Programme</div>
                            <div>{morning.map(x => <div style={lineStyle}>{x}</div>)}</div>
                            <div style={subHeadingStyle}>Evening Programme</div>
                            <div>{evening.map(x => <div style={lineStyle}>{x}</div>)}</div>

                            <div style={headingStyle}>Sunday Programme</div>
                            <div style={subHeadingStyle}>Morning Programme:</div>
                            <div>{sundayMorning.map(x => <div style={lineStyle}>{x}</div>)}</div>
                            <div style={subHeadingStyle}>Afternoon Programme:</div>
                            <div>{sundayAfternoon.map(x => <div style={lineStyle}>{x}</div>)}</div>
                            <div style={subHeadingStyle}>Evening Programme:</div>
                            <div>{sundayEvening.map(x => <div style={lineStyle}>{x}</div>)}</div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={headingStyle}>Tuesday Programme</div>
                            <div style={subHeadingStyle}>Afternoon Programme:</div>
                            <div>Every Tuesday Path Sri Sukhmani Sahib & Gurbani Kirtan is organised by
                                 Istri Satsang from 2.30 p.m. to 5.00 p.m. followed by (Guru Ka Langar) High Tea.</div>

                            <div style={headingStyle}>Wednesday Programme</div>
                            <div style={subHeadingStyle}>Evening Programme:</div>
                            <div>{wednesdayEvening.map(x => <div style={lineStyle}>{x}</div>)}</div>

                            <div style={specialStyle}>Prakash Purab Sri Guru Gobind Singh Ji</div>
                            <div style={specialStyle}>Wednesday 20th January 2021</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    galleryTab = () => {
        const imgs1 = [
            '/images/21.png',
            '/images/22.jpg',
            '/images/23.jpg',
            '/images/24.jpg',
        ];
        const imgs2 = [
            '/images/palki-1.jpg',
            '/images/palki-2.jpg',
            '/images/25.jpg',
            '/images/26.jpg',
        ];
        const imgs3 = xrange(1, 8).toArray().map(x => `/images/2020-02-19-${x}.jpg`);
        const imgs4 = [
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-29.jpg-162613-221590-1607335691725.jpeg',
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-31_1.jpg-196332-540814-1607335692641.jpeg',
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-31.jpg-194543-207164-1607335693378.jpeg',
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-33.jpg-190435-688626-1607335694143.jpeg',
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-34_1.jpg-211373-115175-1607335695182.jpeg',
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-34.jpg-216785-892259-1607335695958.jpeg',
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-35.jpg-192136-444463-1607335696711.jpeg',
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-36.jpg-179825-550912-1607335697443.jpeg',
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-38.jpg-201383-588991-1607335698176.jpeg',
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-39.jpg-98624-920215-1607335698744.jpeg',
            'https://images-lb.heloprotocol.in/PHOTO-2020-06-25-15-06-40.jpg-43508-222618-1607335699192.jpeg',
        ];

        const headingStyle = { color: 'rgb(0, 64, 0)', fontSize: 21, fontWeight: 'bold', marginTop: 40, marginBottom: 10 };
        const subHeadingStyle = { color: 'rgb(128, 128, 128)', fontSize: 17, fontWeight: 400, marginTop: 10, marginBottom: 5 };
        const imgStyle = { maxWidth: 300, maxHeight: 300, marginRight: 20, marginBottom: 20, objectFit: 'contain', };
        return (
            <div style={{ marginTop: 30, marginBottom: 30, marginLeft: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={headingStyle}>Proposed redevelopment project for Gurudwara Sahib</div>
                    <div style={subHeadingStyle}></div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        {MODEL_DESIGN_PHOTOS.map(x => <img key={x} src={x} style={imgStyle} />)}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={headingStyle}>Makeshift Gurudwara Sahib at Guru Harkrishan High School premises</div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        {imgs4.map(x => <img key={x} src={x} style={imgStyle} />)}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={headingStyle}>550 years Prakash Purab celebrations</div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        {imgs3.map(x => <img key={x} src={x} style={imgStyle} />)}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={headingStyle}>Pehla Prakash Purab Sri Guru Granth Sahib Ji 2 September 2016</div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        {imgs1.map(x => <img key={x} src={x} style={imgStyle} />)}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={headingStyle}>Palki Sewa 2 Sept. 16</div>
                    <div style={subHeadingStyle}>Palki Sewa was held on 2nd September 2016 at Gurdwara Sri Guru Singh Sabha, Ulsoor, Bangalore between 3.30 a.m. & 4.00 a.m.</div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        {imgs2.map(x => <img key={x} src={x} style={imgStyle} />)}
                    </div>
                </div>
            </div>
        );
    };

    historicalGurudwarasSection = () => {
        const gurudwaras = [{
            img: '/images/Gurdwara_Nanak_Jhira_Sahib.jpg',
            name: 'Gurdwara Nanak Jhira Sahib, Bidar',
            href: 'https://en.wikipedia.org/wiki/Guru_Nanak_Jhira_Sahib',
        }, {
            img: '/images/gurdwara_sri_bhai_sahib_singh1.jpg',
            name: 'Gurdwara Sri Bhai Sahib Singh, Bidar',
            href: 'http://www.discoversikhism.com/sikh_gurdwaras/gurdwara_sri_bhai_sahib_singh.html',
        }, {
            img: '/images/gurdwara_tap_asthan_mai_bhago1.jpg',
            name: 'Gurdwara Tap Asthan Mai Bhago, Janwada',
            href: 'http://www.discoversikhism.com/sikh_gurdwaras/gurdwara_tap_asthan_mai_bhago.html',
        }];

        return gurudwaras.map(x => (
            <div key={x.img + '-historic'} style={{ display: 'flex', flexDirection: 'column', margin: 12, width: 360 }}>
                <img src={x.img} style={{ maxHeight: 250, width: 360 }} />
                <h2 style={{ background: 'linear-gradient(to bottom, #e1e1e1 0%, #ffffff 8%, #fdfdfd 60%, #ededed 83%, #dedede 100%)',
                    paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingRight: 10, margin: 0, textAlign: 'center', fontSize: 18 }}>
                    <a href={x.href} target="_blank">{x.name}</a>
                </h2>
            </div>
        ));
    };
    otherGurudwarasSection = () => {
        const gurudwaras = [{
            img: '/images/gurudwaraEjipura.jpg',
            name: 'Gurudwara Sahib, Ejipura Cantonment',
            href: 'https://goo.gl/maps/m4tUsLqdzBCGi31w9',
        }, {
            img: '/images/marathalli-gurudwara.jpg',
            name: 'Gurdwara Kalgidhar Sahib, Marathahalli',
            href: 'https://goo.gl/maps/76wqNZxRsk3mchcT9',
        }, {
            img: '/images/gurdwara-sadh-sangat-jalahalli-bangalore.webp',
            name: 'Gurdwara Sadh Sangat, Jalahalli',
            href: 'https://goo.gl/maps/AojG8pWhfHBtrpd67',
        }, {
            img: '/images/guru-nanak-mission-ramachandra-puram-bangalore.jpeg',
            name: 'Guru Nanak mission, Ramchandrapuram',
            href: 'https://goo.gl/maps/aUanAWwRkLcAHYTS7',
        }];

        return gurudwaras.map(x => (
            <div key={x.img + '-historic'} style={{ display: 'flex', flexDirection: 'column', margin: 12, width: 360 }}>
                <img src={x.img} style={{ maxHeight: 250, width: 360 }} />
                <h2 style={{ background: 'linear-gradient(to bottom, #e1e1e1 0%, #ffffff 8%, #fdfdfd 60%, #ededed 83%, #dedede 100%)',
                    paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingRight: 10, margin: 0, textAlign: 'center', fontSize: 18 }}>
                    <a href={x.href} target="_blank">{x.name}</a>
                </h2>
            </div>
        ));
    };

    imageSliderSection = () => {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: current => this.setState({ activeVideoSlide: current }),
        };

        const items = PHOTOS.map(x => {
            return (
                <div style={{ position: 'relative' }} key={x}>
                    <img src={x} alt="" style={custom.imageSliderImg} />
                </div>
            )
        });
        return (
            <div style={custom.imageSliderCtr}>
                <Slider {...settings}>
                    {items}
                </Slider>

                <img src="/images/logo.png" style={custom.imageSliderImgLogo} />
            </div>
        );
    };

    middleNavSection = () => {
        const style = {
            minHeight: 100, flex: 1, minWidth: 100, border: '0.3px solid',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            padding: 10, fontSize: 18,
            textAlign: 'center',
        };
        const spanStyle = { marginBottom: 5 };
        return (
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
                    <div style={style}>
                        <span style={spanStyle}>Gurdwara Sahib, Ulsoor</span>
                        <img src="/images/Khanda.svg.png" style={{ height: 40 }} />
                    </div>
                    <div style={style}>
                        <span style={spanStyle}>Maharaja Ranjit Singh Convention Hall</span>
                        <img src="/images/building.png" style={{ height: 40 }} />
                    </div>
                    <div style={style}>
                        <span style={spanStyle}>Sri Guru Harkrishan High School</span>
                        <img src="/images/book.png" style={{ height: 40 }} />
                    </div>
                </div>


                <div style={{ fontFamily: '"PT Sans", sans-serif', fontSize: 16, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <div style={{ flex: 2, paddingLeft: 10, minWidth: 300 }}>
                        <h1 style={{ fontSize: 24, color: '#103560', marginBottom: 5, marginTop: 10, fontWeight: 'normal' }}>
                            Sri Guru Singh Sabha Management Committee
                        </h1>
                        <p style={{ display: 'flex', flexDirection: 'column', textAlign: 'unset', color: '#3f4749', lineHeight: '22px', paddingRight: 20 }}>
                            <span style={{ color: '#d43400', marginBottom: 10 }}>
                                Sri Guru Singh Sabha is a Sikh Religious & Linguistic Minority Organisation.
                            </span>
                            <span style={{ marginBottom: 10 }}>
                                The largest Sikh shrine in Bengaluru, the Sri Guru Singh Sabha, is situated on the banks of the picturesque Ulsoor Lake. The sprawling white building on the edges of the lake, is indeed a well known place on the City’s landscape. Sri Guru Singh Sabha Gurdwara at Ulsoor was built in 1943 and was inaugurated by A G Russell in 1945. It was only later in 1975, that the first floor of the Gurdwara was built.
                            </span>
                            <span style={{ marginBottom: 10 }}>
                                The monument is known for its splendid structure - it has added to the beauty of the area and Kensington Road where it is situated, which is also popularly known as Gurdwara Road. Being the biggest Gurudwara in City, a huge gathering of Sikhs come here everyday. All the devotees are offered free meals on Sundays, in what is known as the ‘Guru Ka Langar’.
                            </span>
                        </p>
                    </div>

                    {/*<div style={{ flex: 1, ...custom.newsCtr, minWidth: 300 }}>*/}
                    {/*    <div style={custom.newsHead}>*/}
                    {/*        <h2 style={{ fontSize: 24, color: 'white', fontWeight: 'normal' }}>News &amp; Events</h2>*/}
                    {/*    </div>*/}

                    {/*    <div style={custom.newsMarqueeCtr}>*/}
                    {/*        <Marquee />*/}
                    {/*    </div>*/}
                    {/*    <div align="right">*/}
                    {/*        <a style={{ marginRight: 15 }} href={UPCOMING_EVENTS_PAGE_URL}>View All</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
        );
    };
}

class CustomTab extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const st = this.props.selected ? custom.tabs.selected : custom.tabs.normal;
        return (
            <Tab>
                <div style={st}>
                    <div style={{ textAlign: 'center' }}>{this.props.children}</div>
                </div>
            </Tab>
        );
    }
}
CustomTab.tabsRole = 'Tab';   // Required field to use your custom Tab

class Marquee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollAmount: 0,
            running: true,
        };
    }

    async componentDidMount() {
        setInterval(() => {
            if (this.state.running) {
                this.setState({scrollAmount: this.state.scrollAmount + 1});
            }
        }, 50);
    }

    onMouseOver = () => {
        this.setState({ running: false });
    };
    onMouseOut = () => {
        this.setState({ running: true });
    };
    render() {
        const style = {
            ...custom.newsMarquee,
            marginTop: 220 - (1.5 * this.state.scrollAmount) % 500,
        };

        return (
            <div style={{ height: 200, overflowY: 'hidden' }}>
                <div style={style} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                    <h1 style={custom.newsMarqueeH1}>Waheguru Ji Ka Khalsa Waheguru Ji Ki Fateh</h1>
                    <h1 style={custom.newsMarqueeH1}>
                        <a href={UPCOMING_EVENTS_PAGE_URL} target="_blank">Biking Road Show &amp; Street Prachar - 20th Oct</a>
                    </h1>
                    <p style={custom.newsMarqueeP}>
                        <br />
                        Vishal Prabhat Pheri - 27th Oct
                        <a target="_blank" href={UPCOMING_EVENTS_PAGE_URL} style={custom.newsMarqueeReadMore}>read more...</a>
                        <br />
                    </p>

                    <h1 style={custom.newsMarqueeH1}>November</h1>
                    <p style={custom.newsMarqueeP}>
                        Vishal Nagar Kirtan - 3rd Nov<br />
                        <a target="_blank" href={UPCOMING_EVENTS_PAGE_URL} style={custom.newsMarqueeReadMore}>read more...</a>
                        <br />
                    </p>
                </div>
            </div>
        );
    }
}

const MODEL_DESIGN_PHOTOS = [
    'https://images-lb.heloprotocol.in/RDSCdesign.jpg-95660-140260-1607335131741.jpeg',
    'https://images-lb.heloprotocol.in/Slide3.JPG-115036-310649-1607335132585.jpeg',
    'https://images-lb.heloprotocol.in/Slide4.JPG-154373-14643-1607335133312.jpeg',
    'https://images-lb.heloprotocol.in/Slide5.JPG-124325-939658-1607335133914.jpeg',
    'https://images-lb.heloprotocol.in/Slide6.JPG-126913-203374-1607335134599.jpeg',
];
const OPENING_PHOTOS = [
    'https://images-lb.heloprotocol.in/new-gurudwar-building.jpg-1208630-905825-1607336626260.jpeg',
    'https://images-lb.heloprotocol.in/Slide3.JPG-115036-310649-1607335132585.jpeg',
    'https://images-lb.heloprotocol.in/Slide4.JPG-154373-14643-1607335133312.jpeg',
    'https://images-lb.heloprotocol.in/Slide5.JPG-124325-939658-1607335133914.jpeg',
    'https://images-lb.heloprotocol.in/Slide6.JPG-126913-203374-1607335134599.jpeg',
];
const PHOTOS = [
//    ...OPENING_PHOTOS,
    '/images/gur-1.jpg',
    '/images/gur-2.jpg',
    '/images/gur-3.jpg',
    '/images/gur-4.jpg',
];
const innerWidth = window.innerWidth || 500;
const W = Math.min(innerWidth * 0.9, 1200);

const TABS = [
    'HOME',
    'Managing committee',
    'Programme',
    'Gallery',
];
const tabBorderColor = '#E0E0E0';

const custom = {
    root: {
        fontFamily: '"PT Sans", sans-serif',
        fontSize: 14,
        width: '100%',
        overflowX: 'hidden',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
    },
    navBarCtr: {
        // paddingLeft: 5,
        // paddingRight: 5,
        margin: 0,
        width: '100%',
    },

    imageSliderCtr: {
        width: '100%',
        position: 'relative',
        // paddingLeft: '5%',
        // paddingRight: '5%',
    },
    imageSliderImg: {
        maxHeight: 1000,
        width: '100%',
    },
    imageSliderImgLogo: {
        position: 'absolute',
        width: '15%',
        top: 0,
        right: '5%',
    },

    servicesSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    newsCtr: {
        fontFamily: '"PT Sans", sans-serif',
        backgroundColor: '#dcecff',
        border: 'solid 1px #c5defb',
        padding: 0,
        margin: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

        display: 'flex',
        flexDirection: 'column',
    },
    newsHead: {
        background: '#272979 none repeat scroll 0 0',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontSize: 24,
        // padding: '1px 15px',
        borderBottom: 'solid 3px #ff7400',
        height: 50,
        lineHeight: '1.1px',
        paddingLeft: 10,
    },

    newsMarqueeCtr: {},
    newsMarquee: {
        padding: 15,
    },
    newsMarqueeH1: {
        color: '#3b2a24',
        fontSize: 13,
        fontFamily: 'Arial, Helvetica, sans-serif',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingTop: 10,
    },
    newsMarqueeP: {
        color: '#3b2a24',
        fontSize: 14,
        fontFamily: 'Arial, Helvetica, sans-serif',
        borderBottom: '1px dashed #999999',
        paddingBottom: 20,
        textAlign: 'justify',
    },
    newsMarqueeReadMore: {
        float: 'right',
        color: '#7f0203',
        fontSize: 13,
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'bold',
        marginTop: 0,
        fontStyle: 'italic',
    },

    historicalSection: {
        marginTop: 30,
        background: 'url(/images/bg-2.jpg)',
        width: '100%',
        minHeight: 100,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

        paddingTop: 20,
        paddingBottom: 10,
    },

    tabs: {
        left: {
            borderRight: `1px solid ${tabBorderColor}`,
            width: 1,
            height: 50,
        },
        selected: {
            fontFamily: '"PT Sans", sans-serif',
            width: 300,
            height: 50,
            maxWidth: (innerWidth - 10) / TABS.length,
            background: 'linear-gradient(to bottom, #ff7400 0%, #e76a02 100%)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            textAlign: 'center',
            color: '#FFFFFF',
            borderTop: `1px solid ${tabBorderColor}`,
            borderBottom: `1px solid ${tabBorderColor}`,
            borderRight: `1px solid ${tabBorderColor}`,
            fontSize: window.innerWidth > 600 ? 16 : 14,
            fontWeight: 600,
        },
        normal: {
            fontFamily: '"PT Sans", sans-serif',
            width: 300,
            height: 50,
            maxWidth: (innerWidth - 10) / TABS.length,
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            textAlign: 'center',
            color: '#000000',
            borderTop: `1px solid ${tabBorderColor}`,
            borderBottom: `1px solid ${tabBorderColor}`,
            borderRight: `1px solid ${tabBorderColor}`,
            fontSize: window.innerWidth > 600 ? 16 : 14,
            fontWeight: 500,
        },
    },
};

