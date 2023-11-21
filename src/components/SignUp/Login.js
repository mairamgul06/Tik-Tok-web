
import { singInWithGoogle } from "../firebase";
import './Login.css';
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import facebook from "./facebook.png";
import google from "./google.png";
import twitter from "./twitter.png";
import SignUp from "./SignUp";

function Login({ closeModal }) {
    const [login, setLogin] = useState(false);
    return (
        <div className="Login">
            <div className="login__form">
                <div className="login__fixed">
                    <div className="login__user-image" onClick={() => closeModal(false)} ><ClearIcon sx={{ fontSize: 22 }} /></div>
                </div>

                <div className="login__app">
                    <h1 className="login-title">Зарегистрироваться <br /> в ТикТок</h1>
                    <div className="login__user">
                        <PersonOutlineIcon /><p>Исползовать телефон/почту/имя пользовотеля</p>
                    </div>
                    <div className="login__user">
                        <img src={facebook} alt="login" /><p className="login__user-task">Продолжить в Facebook</p>
                    </div>
                    <div onClick={singInWithGoogle} className="login__user">
                        <img src={google} alt="login" /><p className="login__user-task">Продолжить в Google</p>
                    </div>
                    <div className="login__user">
                        <img src={twitter} alt="login" /><p className="login__user-task">Продолжить в Twitter</p>
                    </div>
                </div>
                <div className="login__blog">
                    <div className="login__user-subtitle">Продолжая, вы принимаете <a href="">Условия использования</a> TikTok и <br /> подтверждаете, что прочли <a
                        href="">Политика конфиденциальности</a> TikTok.</div>
                    <div className="login-in">
                        <div className="login__user-text"><p>Еще нет аккаунта?</p></div>
                        <span onClick={() => { setLogin(!login) }} className="login-registor" >Войти</span>
                    </div>
                </div>
                {login && (
                    <SignUp />
                )}
            </div>
        </div>

    );
}

export default Login;