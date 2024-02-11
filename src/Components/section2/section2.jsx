import React, { useRef } from "react";
import Ldo1 from "../img/nisahon.svg";
import Ldo2 from "../img/diagrm.svg";
import Ldo3 from "../img/varoq.svg";
import Ldo4 from "../img/afrontend.svg";
import "../section2/section2.css";

function Section2() {
    const xref = useRef();

    return (
        <>
            <section className="section2">
                <div className="container">
                    <div className="nimadir">
                        <h4 className="how">What we do</h4>
                        <h2 className="we">We Are Here To Help You Build Your Business 🚀</h2>
                        <p className="sed">Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta.</p>
                        <div className="kimdir" ref={xref}>
                        Siz "Digital Marketing" haqida nima haqida ma'lumot olishni istaysiz? "Digital Marketing" (raqamli bozorlash) internet va boshqa elektron vositalar orqali mahsulotlarni sotish va xizmatlarni sotishni o'z ichiga olgan marketing uslubi hisoblanadi. Bu uslub, veb-saytlar, mobil ilovalar, ijtimoiy tarmoqlar, elektron pochta, bloglar, va boshqa onlayn platformalar orqali amalga oshiriladi.

Raqamli bozorlash quyidagi asosiy komponentlarga ega bo'ladi:

1. **Veb-Sayt Optimizatsiyasi (SEO)**: Veb-saytlarni qidiruv tizimlarida o'rnatingizni oshirishni maqsad qiladi, shuningdek, foydalanuvchilar uchun yaxshi tajribani ta'minlash.

2. **Reklama (PPC)**: To'lovga tayyorlangan reklama o'rinlari orqali mahsulotlarni va xizmatlarni qidiruv tizimlarida ko'rsatiladi. Google Ads va Bing Ads kabi platformalar ko'p ishlatiladi.

3. **Ijtimoiy Tarmoq Reklamasi**: SMM (ijtimoiy tarmoq marketingi) orqali ijtimoiy tarmoqlarda reklama ko'rsatiladi, masalan, Facebook, Instagram, Twitter, LinkedIn va boshqalar.

4. **Mijozlar bilan qandaydir munosabatlar yaratish (CRM)**: Mijozlar bilan bog'lanishni oshirish va ularga shaxsiy tarzda xizmat ko'rsatishni ta'minlash.

5. **Ishonchlilik va Brend bilan bog'liqlik (Brand Management)**: Brending strategiyalari orqali kompaniya identifikatsiyasini yaratish, uning e'tiboriga ko'z tikanligini oshirish.

6. **Ishonchsizlik bo'limi (Conversion Rate Optimization)**: Mijozlar saytdan xarid qilish, ro'yxatdan o'tish, yoki boshqa amallarni bajarmasliklarini yaxshilash.

7. **Tarkib Marketingi (Content Marketing)**: Foydali va maqbul tarkib (matnlar, rasmlar, videolar, bloglar) orqali mijozlar bilan munosabatlarni o'rnatish.

8. **Elektron pochta Marketingi**: Abonentlar va mijozlar bilan aloqani oshirish uchun elektron pochta yordamida xabarlar jo'natish.

9. **Mobil Marketing**: Mobil ilovalar, veb-saytlar va elektron pochtalarni ishlatish orqali mobil qurilmalar orqali mijozlar bilan munosabatlarni o'rnatish.

Raqamli bozorlashning asosiy maqsadi, potentsial mijozlar bilan bog'liqlikni yaxshilash va kompaniyangizning mahsulotlarini yoki xizmatlarini sotishni oshirishdir. Bu uslublar, mijozlarga ko'proq qiziqish va joyni bilishlari uchun strategiyalarni amalga oshirishda yordam beradi.
                       <button className="lololo"
                       onClick={()=>{
                        xref.current.classList.remove("nimadirda")
                       }}
                       >Exit</button>
                       
                        </div>
                        <button className="lalabtn" onClick={() => { xref.current.classList.add("nimadirda") }}>Explore all service</button>
                    </div>

                    <ul className="list2">
                        <li className="nimadirlarda">
                            <img src={Ldo1} alt="logo" />
                            <h2 className="h2lar">Digital Marketing</h2>
                            <p className="textlarlar">That is the simply dummy text the printing and typesetting industry. </p>
                            <a className="linkk" href="#">Read more</a>
                        </li>
                        <li className="nimadirlarda">
                            <img src={Ldo2} alt="logo" />
                            <h2 className="h2lar">SEO</h2>
                            <p className="textlarlar">That is the simply dummy text the printing and typesetting industry. </p>
                            <a className="linkk" href="#">Read more</a>
                        </li>
                        <li className="nimadirlarda">
                            <img src={Ldo3} alt="logo" />
                            <h2 className="h2lar">UI UX Design</h2>
                            <p className="textlarlar">That is the simply dummy text the printing and typesetting industry. </p>
                            <a className="linkkk" href="#">Read more</a>
                            <span className="lalalala"></span>
                        </li>
                        <li className="nimadirlarda">
                            <img src={Ldo4} alt="logo" />
                            <h2 className="h2lar">Web Development</h2>
                            <p className="textlarlar">That is the simply dummy text the printing and typesetting industry. </p>
                            <a className="linkk" href="#">Read more</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Section2;
