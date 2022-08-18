import React from "react";
import window from 'global';


export default class BottomSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={custom.root}>
                {this.bottomSection()}
            </div>
        );
    }

    bottomSection = () => {
        const h3Style = { marginTop: 0, marginBottom: 10, fontSize: 22, color: '#ff9600', fontWeight: 'normal' };
        const h3StyleNoPadding = { margin: 0, padding: 0, fontSize: 22, color: '#ff9600', fontWeight: 'normal' };
        const h4Style = { marginTop: 10, marginBottom: 2, fontSize: 20, color: '#ff9600', fontWeight: 'normal' };
        const textStyle = {
            color: '#fff', textDecoration: 'none',
            marginBottom: 5,
            fontStyle: 'normal',
            // lineHeight: '1.428px',
            fontSize: 15,
            fontFamily: '"PT Sans", sans-serif',
        };
        const liStyle = { marginBottom: 10 };

        const photos = PHOTOS.map(x => <img src={x} key={x + '-bottom'} style={{ width: 120, height: 'auto', maxHeight: 150, marginRight: 10, marginBottom: 10, border: '1px solid #fff' }} />);
        return (
            <div style={{ background: 'url(/images/pattern-backgrounds.jpg)', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ width: W, padding: 15, color: 'white', fontSize: 14 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: 200, }}>
                            <div className="widget" style={textStyle}>
                                <h3 style={h3Style}>About Us</h3>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={liStyle}>&gt; <a style={textStyle} target="_blank" href="/">Home</a></div>
                                    <div style={liStyle}>&gt; <a style={textStyle} target="_blank" href="https://www.sikhiwiki.org/index.php/Historical_Gurdwaras">Karnataka Gurdwaras</a></div>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 2, minWidth: 200, }}>
                            <div style={textStyle}>
                                <h3 style={h3Style}>Contact Us</h3>
                                <div>
                                    Management Committee<br />
                                    Gurdwara Sri Guru Singh Sabha, <br />
                                    Gurdwara Road, <br />
                                    Near M G Road Mall, <br />
                                    Ulsoor,<br />
                                    Bangalore-560008<br />

                                    <h4 style={h4Style}>Landline:</h4>
                                    <a href="tel:080-25553461" style={{color: '#fff', textDecoration: 'none'}}>080-25553461</a><br />

                                    <h4 style={h4Style}>Manager (Raj Kamal Singh):</h4>
                                    <a href="tel:9448239812" style={{color: '#fff', textDecoration: 'none'}}>94482 39812</a><br />

                                    <h4 style={h4Style}>Asst. Manager (Rishipal Singh):</h4>
                                    <a href="tel:8050000188" style={{color: '#fff', textDecoration: 'none'}}>80500 00188</a><br />

                                    <h4 style={h4Style}>Email:</h4>
                                    <a href="mailto:sgssblr@gmail.com" style={{color: '#fff', textDecoration: 'none'}}>sgssblr@gmail.com</a><br />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 2, minWidth: 200, }}>
                            <h3 style={h3Style}>Photo Gallery</h3>
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                {photos}
                            </div>
                            <br />
                        </div>
                    </div>

                    <div>
                        <div style={{ margin: 0, padding: 0, height: 50, display: 'flex'}}>
                            <div style={{ width: '100%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ display: 'inline-block', ...h3StyleNoPadding }}>Follow Us: &nbsp;&nbsp;</h3>
                                    <div style={{ display: 'inline-block', padding: 0, margin: 0 }}>
                                        <a style={{ marginRight: 5 }} href="https://www.facebook.com/profile.php?id=100004954728293" target="_blank"><img src="/images/facebook.png" /></a>
                                        <a style={{ marginRight: 5 }} href="https://twitter.com/shridarbarsahib?lang=en" target="_blank"><img src="/images/twitter.png" /></a>
                                        <a style={{ marginRight: 5 }} href="/" target="_blank"><img src="/images/google-plus.png" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', borderTop: '1px solid #fff', fontFamily: '"PT Sans", sans-serif', fontSize: 12 }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ flex: 4, minWidth: 300 }}>
                                <p>Copyright &copy; 2019 Official Website of Sri Guru Singh Sabha, Bengaluru</p>
                            </div>
                            <div style={{ flex: 1, minWidth: 300 }}>
                                Designed by: &nbsp;&nbsp;<a target="_blank" href="https://www.heloprotocol.in/" style={{color: '#fff', textDecoration: 'none'}}>Helo</a>
                            </div>
                            <div style={{ flex: 1, minWidth: 300 }}>
                                Reference & Credit: &nbsp;&nbsp;<a target="_blank" href="http://www.dsgmc.in/" style={{color: '#fff', textDecoration: 'none'}}>DSGMC</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const PHOTOS = [
    '/images/gur-1.jpg',
    '/images/gur-2.jpg',
    '/images/gur-3.jpg',
    '/images/gur-4.jpg',
];
const innerWidth = window.innerWidth || 500;
const W = Math.min(innerWidth * 0.9, 1200);

const custom = {
    root: {
        fontFamily: '"PT Sans", sans-serif',
        fontSize: 14,
        width: '100%',
        overflowX: 'hidden',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
    },
};

