import styles from '../Info.module.scss';

function Item() {
    return (
        <>
            <div className={styles.info1_item}>
                <div>&lt;&frasl;&gt;</div>
                <h2><b>25000</b></h2>
                <div>PROJECT COMPPLETED</div>
            </div>
            <div className={styles.info1_item}>
                <div>&lt;&frasl;&gt;</div>
                <h2><b>10</b></h2>
                <div>YEARS OF EXPERIENCE</div>
            </div>
            <div className={styles.info1_item}>
                <div>&lt;&frasl;&gt;</div>
                <div>TEAM OF</div>
                <div>PROFESSIONALS</div>
            </div>
            <div className={styles.info1_item}>
                <div>&lt;&frasl;&gt;</div>
                <div>BASED</div>
                <div>IN ARMENIA</div>
            </div>
        </>
    )
}

export default Item;