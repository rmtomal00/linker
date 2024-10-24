import '../css/routes/Price.css'
import Footer from '../components/Footer'
import bkashLogo from '../assets/bkashLogo.png'
import nagadLogo from '../assets/nagadLogo.png'
import binanceLogo from '../assets/binanceLogo.png'
const Price = () =>{
    return(
        <div className="pr-main-continer">
            <div className="header-price">
                <p className="heading-price">
                    Choice the package which is the best for your Brand or Business
                </p>
                <p className="sub-h-price">
                    Connect to your audience with branded links, QR Codes that will get their attention.
                </p>
            </div>
            <div className="sub-main-price">
                <div className="price-design-container">
                    <div className="head-price-container">
                        <div className="content-pri-con">
                            <div className="p-c-he-dat">
                                <div className='pkg-name'>
                                    <p className="n-pkg">FREE</p>
                                </div>
                                <div className="pkg-price-per-mon">
                                    <p className="first">$0.00</p>
                                    <p className="las-m">/month</p>
                                </div>
                                <div className="pkg-features">
                                    <ol className="features">
                                        <li className="iteam-pri-fea">Unlimited Click</li>
                                        <li className="iteam-pri-fea">20 Link shorts per month</li>
                                        <li className="iteam-pri-fea">3 QR code scan</li>
                                        <li className="iteam-pri-fea">3 QR code creation</li>
                                        <li className="iteam-pri-fea">QR code customizetion</li>
                                        <li className="iteam-pri-fea">Click history</li>
                                        <li className="iteam-pri-fea">API Access</li>
                                        <li className="iteam-pri-fea"></li>
                                        <li className="iteam-pri-fea"></li>
                                        <li className="iteam-pri-fea"></li>
                                    </ol>
                                </div>
                                <div className="or-btn-contain">
                                    <button className="or-pr-pa">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="price-design-container">
                    <div className="head-price-container">
                        <div className="content-pri-con">
                            <div className="p-c-he-dat">
                                <div className='pkg-name'>
                                    <p className="n-pkg">GOLD</p>
                                </div>
                                <div className="pkg-price-per-mon">
                                    <p className="first">$4.00</p>
                                    <p className="las-m">/month</p>
                                </div>
                                <div className="pkg-features">
                                    <ol className="features">
                                        <li className="iteam-pri-fea">Unlimited Click</li>
                                        <li className="iteam-pri-fea">100 Link shorts per month</li>
                                        <li className="iteam-pri-fea">100 QR code scan</li>
                                        <li className="iteam-pri-fea">20 QR code creation</li>
                                        <li className="iteam-pri-fea">QR code customizetion</li>
                                        <li className="iteam-pri-fea">Click history</li>
                                        <li className="iteam-pri-fea">API Access</li>
                                        <li className="iteam-pri-fea">Advence Analysis</li>
                                        <li className="iteam-pri-fea">Click Hostory for 1 year</li>
                                        <li className="iteam-pri-fea">Clicker IP track</li>
                                        <li className="iteam-pri-fea">Custom Link</li>
                                    </ol>
                                </div>
                                <div className="or-btn-contain">
                                    <button className="or-pr-pa">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="price-design-container">
                    <div className="head-price-container">
                        <div className="content-pri-con">
                            <div className="p-c-he-dat">
                                <div className='pkg-name'>
                                    <p className="n-pkg">PLATINUM</p>
                                </div>
                                <div className="pkg-price-per-mon">
                                    <p className="first">$90.00</p>
                                    <p className="las-m">/month</p>
                                </div>
                                <div className="pkg-features">
                                <ol className="features">
                                        <li className="iteam-pri-fea">Unlimited Click</li>
                                        <li className="iteam-pri-fea">1500 Link shorts per month</li>
                                        <li className="iteam-pri-fea">300 QR code scan</li>
                                        <li className="iteam-pri-fea">150 QR code creation</li>
                                        <li className="iteam-pri-fea">QR code customizetion</li>
                                        <li className="iteam-pri-fea">Click history</li>
                                        <li className="iteam-pri-fea">API Access</li>
                                        <li className="iteam-pri-fea">Advence Analysis</li>
                                        <li className="iteam-pri-fea">Click Hostory for 1 year</li>
                                        <li className="iteam-pri-fea">Clicker IP track</li>
                                        <li className="iteam-pri-fea">Custom Link</li>
                                        <li className="iteam-pri-fea">Support 24/7 days</li>
                                    </ol>
                                </div>
                                <div className="or-btn-contain">
                                    <button className="or-pr-pa">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="payment-support-bar">
                <div className="custom-offer-div">
                    <p className="cus-offer-buy">
                        If you need a custom package, You can contact us.
                    </p>
                    <p className="cus-offer-buy">
                        <span className="note-in-price">Note:</span> Price shoud be up to <span className="value-custom-price">$7.00</span>
                    </p>
                </div>
                <p className="text-c-pr">
                    We accept multiple payment system. You can select any of them to pay us.
                </p>
                <div className="payment-option-images">
                    <img src={bkashLogo} className= "payment-logo-price" alt="" srcset="" />
                    <img src={nagadLogo} className= "nagadlogo" alt="" srcset="" />
                    <img src={binanceLogo} className= "binanceLogo" alt="" srcset="" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Price;