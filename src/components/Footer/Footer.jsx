import Container from "../Container/Container";
import style from "./Footer.module.css"
import { ReactComponent as VKIcon } from "../../img/vk.svg";
import { ReactComponent as TGIcon } from "../../img/tg.svg";
import { ReactComponent as PINIcon } from "../../img/pinterest.svg";
import { ReactComponent as STMIcon } from "../../img/stumbleupon.svg";

const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href="#">Anastasia Ilina</a></p>
                    <p>Coder: <a href="#">Ilya Salanovich</a></p>
                    <p>HBCard, 2022</p>
                </div>

                <ul className={style.social}>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <VKIcon/>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <PINIcon/>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <STMIcon/>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <TGIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
);  

export default Footer;