import {Items} from "./Components";
import styles from'./What.module.scss';

function What(){
    return(
        <>
            <h2 className={styles.what_h2}>What Do We Offer</h2>
            <div className={styles.what}>
                <Items />
            </div>
        </>
    );
};

export default What;