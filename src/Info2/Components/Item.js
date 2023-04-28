import styles from '../Info2.module.scss';

function Item() {
  return (
      <>
        <>
            <div className={styles.info2_item}>
                <div><img src="image/phone.svg" alt="" /></div>
                <div>Phone</div>
                <div>+374-95-583042</div>
            </div>
            <div className={styles.info2_item}>
                <div><img src="image/Map.svg" alt="" /></div>
                <div>Address</div>
                <div>Yerevan, Republic of Armenia</div>
            </div>
            <div className={styles.info2_item}>
                <div><img src="image/Message_light.svg" alt="" /></div>
                <div>Email</div>
                <div>3dprimellc@gmail.com</div>
            </div>
        </> 
      </>
  )
}

export default Item;