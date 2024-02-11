import React, { useState } from 'react';
import Logo from "../img/Logo.svg";

function Header() {
    const xref = React.useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="container">
                    <a href="/">
                        <img src={Logo} alt="logo" width={189} height={40} />
                    </a>

                    <ul className="Header__list">
                        <li className="header__item">
                            <a className="alar" href="http://">Features</a>
                        </li>
                        <li className="header__item">
                            <a className="alar" href="http://">Pricing & Plans</a>
                        </li>
                        <li className="header__item">
                            <a className="alar" href="http://">Support</a>
                        </li>
                        <li className="header__item">
                            <a className="alar" href="http://">About Us</a>
                        </li>
                    </ul>
                    <div className={isModalOpen ? "header__modal2" : "header__modal"} ref={xref}>
                        <a className="Heamodal" href="tel:+998919021416">+998919021416</a>
                        <a className="Heamodal" href="email:Uzbcordinalochilov@gmail.com">Gamil</a>
                    </div>
                    <button className="header__btn" onClick={() => setIsModalOpen(!isModalOpen)}>Contact Us</button>
                </div>
            </header>
        </>
    )
}

export default Header;
