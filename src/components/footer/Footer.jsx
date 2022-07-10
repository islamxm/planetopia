import './Footer.scss';
import twitter from '../../images/icons/twitter.svg';
import telegram from '../../images/icons/telegram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__in">
                    <div className="footer__copy">2022 Planetopia. All Rights Reserved</div>
                    <div className="footer__soc">
                        <a href="#" className="footer__soc_item">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="#" className="footer__soc_item">
                            <img src={telegram} alt="telegram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;