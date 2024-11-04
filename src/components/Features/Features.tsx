import { FeaturesProps } from "../../interfaces/cards";
import classes from "./Features.module.css";

const Features: React.FC<FeaturesProps> = ({ cards }) => {
    return (
        <>
            {
                cards.map((card) => {
                    return (
                        <div className={classes.feature} key={card.id}>
                            <img
                            className={classes.image}
                            src={card.imagee}
                            alt={'Icon'}
                            />
                            <h3 className={classes.cardTitle}>{card.title}</h3>
                            <hr className={classes.separation}/>
                            <p className={classes.cardText}>{card.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export {Features};