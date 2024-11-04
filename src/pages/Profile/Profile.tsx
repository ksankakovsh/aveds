import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ProfileProps } from "../../interfaces/user";
import classes from "./Profile.module.css";

const Profile: React.FC<ProfileProps> = ({ user, setUser }) => {
    const logout = () => {
      localStorage.removeItem('user');
      setUser(null);
    };
  
    return (
        <>
        <Header setUser={setUser} />
        <div className={classes.wrap}>
            <h1>Привет, {user.name}</h1>
            <div className={classes.buttonsNav}>
                    <Link to="/profile" className={classes.buttonNav}  onClick={logout}>Выйти из аккаунта</Link>
                    <Link to="/contacts" className={classes.buttonNav}>Перейти в контакты</Link>
            </div>
        </div>
        </>
      
    );
  };
  
export {Profile};