import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react';

import styles from './Calendar.module.scss';

import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const Calendar = forwardRef(({ value, onChange }, ref) => {
    const dtRef = useRef(null);
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        openCalendar: () => setOpen(true)
    }));

    const handleChange = (selectedDate) => {
        // Store the current cursor position
        const cursorPosition = dtRef.current.selectionStart;
    
        if (onChange) {
            onChange(selectedDate);
        }
    
        // Restore the cursor position after the state update
        setTimeout(() => {
            dtRef.current.selectionStart = cursorPosition;
            dtRef.current.selectionEnd = cursorPosition;
        }, 0);
    
        // close calendar after pickup date
        setOpen(false);
    };
    
    return (
        <DateTime
            ref={dtRef}
            value={value}
            onChange={handleChange}
            timeFormat={false}
            dateFormat="YYYY-MM-DD"
            open={open}
            inputProps={{ className: styles.dateInput }}
        />
    );
});

export default Calendar

// const Calendar = forwardRef(({ value, onChange }, ref) => {
//     const dtRef = useRef(null);
//     const [open, setOpen] = useState(false);
    
//     useImperativeHandle(ref, () => ({
//         openCalendar: () => setOpen(true)
//     }));
    
//     const handleChange = (selectedDate) => {
//         if (onChange) {
//             onChange(selectedDate);
//         }
//         // close calendar after pickup date
//         setOpen(false);
//     };

//     return (
//         <DateTime
//             ref={dtRef}
//             value={value}
//             onChange={handleChange}
//             timeFormat={false}
//             dateFormat="YYYY-MM-DD"
//             open={open}
//             inputProps={{ className: styles.dateInput }}
//         />
//     );
// });

// export default Calendar