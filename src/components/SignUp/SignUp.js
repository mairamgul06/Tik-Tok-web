
import { singInWithGoogle } from "../firebase";
import './SignUp.css';
import QrCodeIcon from "@mui/icons-material/QrCode";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import facebook from "./facebook.png";
import google from "./google.png";
import twitter from "./twitter.png";
import apple from "./apple.png";
import instagram from "./instagrem.png";
import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import Login from "./Login";
import { useState } from "react";


function SignUp({ closeModal }) {
    const [login, setLogin] = useState(false);
    return (
        <div className="Signup">
            <div className="sign__form">
                <div className="sign__fixed">
                    <div onClick={() => closeModal(false)} className="sign-clear"><ClearIcon sx={{ fontSize: 22 }} /></div>
                </div>

                <div className="sign__app">
                    <div className="sign-blog">
                        <h1 className="sign-title">Войти в TikTok</h1>
                        <div className="sign__user">
                            <QrCodeIcon className="sign__pange" /><p className="sign__user-task">Исползовать QR-код</p>
                        </div>
                        <div className="sign__user">
                            <PersonOutlineIcon /><p>Исползовать телефон/почту/имя пользовотеля</p>
                        </div>
                        <div className="sign__user">
                            <img src={facebook} alt="sign" /><p className="sign__user-task">Продолжить в Facebook</p>
                        </div>
                        <Link to={"/"} className="sign__link">
                            <div onClick={singInWithGoogle} className="sign__user">
                                <img src={google} alt="sign" /><p className="sign__user-task">Продолжить в Google</p>
                            </div>
                        </Link>
                        <div className="sign__user">
                            <img src={twitter} alt="sign" /><p className="sign__user-task">Продолжить в Twitter</p>
                        </div>
                        <div className="sign__user">
                            <img src={apple} alt="sign" /><p className="sign__user-task">Продолжить в Apple</p>
                        </div>
                        <div className="sign__user">
                            <img src={instagram} alt="sign" /><p className="sign__user-task">Продолжить в Instagram</p>
                        </div>
                    </div>
                </div>
                <div className="sign__blog">
                    <div className="sign__user-subtitle">Продолжая, вы принимаете <a href="">Условия использования</a> TikTok и <br /> подтверждаете, что прочли <a
                        href="">Политика конфиденциальности</a> TikTok.</div>
                    <div className="registration">
                        <div className="sign__user-text"><p>Еще нет аккаунта?</p></div>
                        <span onClick={() => { setLogin(!login) }} className="to-registor" >Регистрация</span>
                    </div>
                </div>
                {login && (
                    <Login closeModal={setLogin} />
                )}
            </div>

        </div>

    );
}

export default SignUp;