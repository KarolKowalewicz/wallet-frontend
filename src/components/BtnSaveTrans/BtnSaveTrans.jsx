import styles from './BtnSaveTrans.module.scss'

const BtnSaveTrans = ({onSubmit}) => {

    return(
            <button className={styles.btn} type='submit' onClick={onSubmit}>
                <p className={styles.btn__label}>save</p>
            </button>            
    )
}

export default BtnSaveTrans