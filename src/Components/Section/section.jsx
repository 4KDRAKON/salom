import React, { useRef } from "react";
import LOgaga from "../img/asosiyrasm.png";
import "../Section/salom.css";
import Lodo from "../img/Slack (logo — Colour).jpg";
import Lodo1 from "../img/Descript (logo — Colour).png";
import Lodo2 from "../img/Etsy (logo — Colour).png";
import Lodo3 from "../img/Spotify (logo — Colour).png";
import Lodo4 from "../img/Logitech (logo — Colour).png";

function Section() {
    const exref = useRef();

    return (
        <section className="section">
            <div className="container">
                <div className="sasiy__div">
                    <h1 className="h1">
                        Best
                        <span className="span__section">Marketing</span> Digital Agency
                    </h1>
                    <p className="section__text">
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    </p>
                    <div className="start" ref={exref}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dolor dicta fugiat nesciunt. Eius quisquam veritatis, totam aspernatur ea ipsum dignissimos tempore sunt! At suscipit atque blanditiis dicta est accusantium! Placeat hic nobis iure impedit minima vero ratione, omnis nam inventore nisi? Illo sequi facilis porro fuga eveniet molestias, libero inventore in ipsa maiores totam ad ut explicabo voluptates ea iusto reprehenderit assumenda facere deserunt beatae quae incidunt optio! Eos sapiente ipsum similique quas culpa earum, explicabo nihil non, ab itaque aliquid perferendis voluptate facere iusto, eum rem? Quam ipsum in quos assumenda nam voluptatem ipsam nostrum facere nisi quidem?
                    </div>
                    <button className="startt" onClick={() => { exref.current.classList.add("getstart") }}>
                        Get Started
                    </button>
                    <div className="watch" ref={exref}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7fY6jn2EG3M?si=kuBItLyHyJI_qODF&amp;start=3970" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <button className="saloaloal" onClick={()=>{
                            exref.current.classList.remove("watchh")
                    }}  >
                        Exit

                    </button>
                    </div>
                    <button className="watchh" onClick={() => { exref.current.classList.add("watch2") }}>
                        Watch Video
                    </button>
                </div>
                <img src={LOgaga} alt="rasm" width={550} height={550} />
                <h3 className="salomlarrr">OUR TRUSTED CLIENTS</h3>
                <ul className="listt">
                    <li className="img__item">
                        <img src={Lodo} alt="logo" width={158} height={40} />
                    </li>
                    <li className="img__item">
                        <img src={Lodo1} alt="logo" width={158} height={40} />
                    </li>
                    <li className="img__item">
                        <img src={Lodo2} alt="logo" width={158} height={40} />
                    </li>
                    <li className="img__item">
                        <img src={Lodo3} alt="logo" width={158} height={40} />
                    </li>
                    <li className="img__item">
                        <img src={Lodo4} alt="logo" width={158} height={40} />
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Section;
