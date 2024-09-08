import "../css/components/Footer.css"

const Footer =()=>{
    return(
        <div className="footermaincontainer">
            <div className="left">
                <h2 className="footerheader">Features</h2>
                <ol className="footerlist">
                    <li>API Docs</li>
                    <li>WP Extention</li>
                    <li>QR Code Generate</li>
                </ol>
            </div>

            <div className="Middle">
                <h2 className="footerheader">Resources</h2>
                <ol className="footerlist">
                    <li>FAQ</li>
                    <li>Privicy Policy</li>
                    <li>Terms</li>
                </ol>
            </div>

            <div className="right">
                <h2 className="footerheader">Company</h2>
                <ol className="footerlist">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ol>
            </div>
        </div>
    )
}

export default Footer;