import './footerpage.css'

const FooterPage = () => {
    return (
        <div className='footer__container'>
            <div>
            <a className="about-me" target='_blank' href='https://github.com/tan004'><i className="fab footer-icon fa-github"></i></a>
            </div>
            <div>
            <a className="about-me" target='_blank' href='https://www.linkedin.com/in/zhuoxin-tan-491587172/'><i className="fab footer-icon fa-linkedin"></i></a>
            </div>
            <div>
            <a className="about-me" target='_blank' href='https://angel.co/u/zhuoxin-tan-1'><i className="fab footer-icon fa-angellist"></i></a>
            </div>
        </div>
    )
}

export default FooterPage;
