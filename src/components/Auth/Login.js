import React, { useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import { usePromotions } from '../../contexts/PromotionsContext.js';
import google from '../../assets/img/icons/common/icon-google.png';

function Login(){
	const histoty = useHistory();
	const { setUser } = usePromotions();

	const pseudoRef = useRef();

	const onSubmit = event => {
		event.preventDefault();
		setUser(pseudoRef.current.value);
		histoty.push(process.env.PUBLIC_URL +  "/");
	}

	return (
		<div id="auth">
			<div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
				<form className="login100-form validate-form" onSubmit={onSubmit}>
					<span className="login100-form-title p-b-37">
						Se connecter
					</span>

					<div className="wrap-input100 validate-input m-b-20" data-validate="Entrer votre pseudo">
						<input className="input100" type="text" ref={pseudoRef} name="username" placeholder="Pseudo" required/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-25" data-validate = "Entrer votre mot de passe">
						<input className="input100" type="password" name="pass" placeholder="Mot de passe" required/>
						<span className="focus-input100"></span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Se connecter
						</button>
					</div>

					<div className="text-center p-t-57 p-b-20">
						<span className="txt1">
							Ou se connecter avec
						</span>
					</div>

					<div className="flex-c p-b-112">
						<a href="#" className="login100-social-item">
							<i className="fa fa-facebook-f"></i>
						</a>

						<a href="#" className="login100-social-item">
							<img src={google} alt="GOOGLE"/>
						</a>
					</div>

					<div className="text-center">
						<Link to={process.env.PUBLIC_URL +  "/signup/"} className="txt2 hov1">
							S'enregistrer
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;