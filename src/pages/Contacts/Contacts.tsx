import { Header } from "../../components/Header/Header";
import { MainProps } from "../../interfaces/user";
import classes from "./Contacts.module.css";

const Contacts: React.FC<MainProps>  = ({ setUser }) => {
    return (
        <>
        <Header setUser={setUser} />
        <div className={classes.wrap}>
           <h1>Контакты</h1>
        </div>
        </>
        
    )
}
export {Contacts};