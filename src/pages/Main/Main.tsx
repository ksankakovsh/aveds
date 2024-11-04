
import { useState } from "react";
import { Features } from "../../components/Features/Features";
import { Header } from "../../components/Header/Header";
import { Card } from "../../interfaces/cards";
import { MainProps, User } from "../../interfaces/user";
import classes from "./Main.module.css";
import LoginModal from "../LoginModal/LoginModal";
import { Link } from "react-router-dom";



const cards: Card[] = [
    {id: 1, imagee: './1.svg', title: 'Онлайн-прием', description: 'Рыба текст'},
    {id: 2, imagee: './2.svg', title: 'Экстренный Случай', description: 'Рыба текст'},
    {id: 3, imagee: './3.svg', title: 'Лечение рака', description: 'Рыба текст'}
];



const Main : React.FC<MainProps> = ({ setUser }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <Header  setUser={setUser} />
            <div className={classes.wrap}>
                <h1>Место для получения медицинской помощи</h1>
                <div className={classes.buttonsNav}>
                    <Link to="/profile" className={classes.buttonNav} onClick={openModal}>Войти</Link>
                    <Link to="/contacts" className={classes.buttonNav}>Контакты</Link>
                
                    {isModalOpen && <LoginModal setUser={setUser} closeModal={closeModal} />}
                </div>
                <div className={classes.features}>
                    <Features cards={cards}/>
                </div>
                
            </div>
        </>     
    )
}
export {Main};