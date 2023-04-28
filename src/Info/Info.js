import Index from "./Components";
import styles from './Info.module.scss';

function Info(){
    return(
        <>
          <div className={styles.info}>
            <Index />
          </div>
        </>
    );
};

export default Info;