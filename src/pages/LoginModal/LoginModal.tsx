import React, { useState } from 'react';
import users from '../../data.json';
import { User } from '../../interfaces/user';
import classes from './LoginModal.module.css';
import { useNavigate } from 'react-router-dom';


interface LoginModalProps {
  setUser: (user: User) => void;
  closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ setUser, closeModal }) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const foundUser = (users as User[]).find((u) => u.login === login && u.password === password);
    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      setUser(foundUser);
      closeModal();
      navigate("/profile");
    } else {
      setError('Invalid login or password');
    }
  };

  return (
    <div className={classes.modal}>
        <div className={classes.modal__content}>
        <a className={classes.modal__button_close} onClick={closeModal}>&#10006;</a>
            <input type="text" className={classes.modal__input} value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" />
            <input
                className={classes.modal__input} 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                minLength={8}
            />
            <button className={classes.modal__button} onClick={handleSubmit}>Login</button>
            {error && <p>{error}</p>}
        </div>
    </div>
  );
};

export default LoginModal;