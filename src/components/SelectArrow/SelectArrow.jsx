import { components } from 'react-select';
import { ReactComponent as SelectArrowIcon } from '../../img/select-arrow.svg';
import styles from './SelectArrow.module.scss';

const SelectArrow = (props) => {
    const { isMenuOpen } = props;
    return (
        <components.DropdownIndicator {...props}>
            <SelectArrowIcon className={`${styles.icon} ${isMenuOpen ? styles.iconRotated : ''}`} />
        </components.DropdownIndicator>
    );
};

export default SelectArrow;
