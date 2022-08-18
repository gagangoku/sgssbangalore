import React from "react";
import {Helmet} from "react-helmet";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";


export default class DonateScreen extends React.Component {
    render() {
        return (
            <div style={custom.root}>
                <Helmet>
                    <title>Sri Guru Singh Sabha, Bengaluru</title>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="/images/tabs.css" />
                </Helmet>

                <TopSection />
                {this.donateSection()}
                <BottomSection />
            </div>
        );
    }

    donateSection = () => {
        const fn = (a, b) => {
            return (
                <div style={{ color: '#6a6a6a', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                    <div style={{ width: '20%' }}>{a}</div>
                    <div style={{ width: '80%' }}>{b}</div>
                </div>
            );
        };
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: MAX_WIDTH, paddingLeft: 10, paddingRight: 10 }}>
                    <div style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 20, marginBottom: 20 }}>Our Bank Details</div>

                    <div style={{ marginBottom: 20, fontSize: 16 }}>
                        {fn('Beneficiary:', 'Sri Guru Singh Sabha')}
                        {fn('Bank Name:', 'Punjab & Sind Bank, SV Road, Ulsoor, Bengaluru - 560 008')}
                        {fn('Account No:', '09911000000681')}
                        {fn('IFSC Code:', 'PSIB0020991')}
                    </div>

                    <div>
                        <img src={PAYTM_QR} style={{ maxHeight: 1100, width: Math.min(window.innerWidth*0.8, 500) }} />
                    </div>
                </div>
            </div>
        );
    };
}

const PAYTM_QR = '/images/sgssblr-paytm-qr.jpeg';
const MAX_WIDTH = 500;
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

