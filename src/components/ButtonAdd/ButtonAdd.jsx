import styles from './ButtonAdd.module.scss'

import { ReactComponent as ButtonPlus } from './../../img/+ btn.svg';
import { useState } from 'react';
import ModalAddTrans from '../ModalAddTrans/ModalAddTrans';


const ButtonAdd = () => {

    const [ modal, setModal ] = useState(false)

    const openModal = () => {
        setModal(true);
      };
    
      const closeModal = () => {
        setModal(false);
      };


     return(
        <div className={styles.btnDiv}>
            <ButtonPlus  className={styles.btn} onClick={openModal}/>
            

            {modal && (
                <ModalAddTrans onClose={closeModal}/>
                //komponent
                
                //ewentualne propsy

            )}


        </div>
     )
}

export default ButtonAdd




{/* <button className={styles.button}>+</button> */}
            {/* <button  className={styles.btn2}><ButtonPlus/></button> */}


            {/* //onClick={openModal} na buttonie lub na komponencie */}