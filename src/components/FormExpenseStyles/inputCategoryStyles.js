// add styles for react-select input category in
// FormExpense in AddTransaction
// FormExpense in EditTransaction
export const stylesForDevice = {
  mobile: {
    container: (provided) => ({
      ...provided,
      padding: "0",
      height: "24px",
    }),
    control: (provided) => ({
      ...provided,
      marginLeft: "20px",
      padding: "0",
      width: "240px",
      minHeight: "24px",
      height: "24px",
      flexShrink: 0,
      color: "#000",
      fontFamily: "Circe",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    }),
    valueContainer: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      height: "24px",
      cursor: "pointer",
    }),
    placeholder: (provided) => ({
      ...provided,
      width: "190px",
      // flexShrink: '0',
      color: "#BDBDBD",
      fontFamily: "Circe",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    }),
    inputContainer: (provided) => ({
      ...provided,
      margin: "0 32px 0 0",
      padding: "0",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      width: "190px",
      color: "#000",
      fontFamily: "Circe",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal,",
      className: "inputAfterRemove",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      padding: "0",
      width: "19px",
      height: "24px",
      // cursor: 'pointer',
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      width: "18px",
      height: "9px",
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: "12px",
      marginLeft: "-20px",
      width: "280px",
      flexShrink: 0,
      borderRadius: "20px",
      background: "rgba(255, 255, 255, 0.70)",
      boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.10)",
      backdropFilter: "blur(25px)",
    }),
    menuList: (provided) => ({
      ...provided,
      maxWidth: "280px",
      maxHeight: "444px",
      padding: "10px 23px 10px 20px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Circe",
      fontSize: "18px",
      fontWeight: 400,
      color: state.isFocused ? "#FF6596" : "#000",
      background: state.isFocused ? "#fff" : "none",
      borderRadius: "10px",
    }),
  },
  // TABLET
  tablet: {
    container: (provided) => ({
      ...provided,
      padding: "0",
      height: "24px",
    }),
    control: (provided) => ({
      ...provided,
      marginLeft: "20px",
      padding: "0",
      width: "378px",
      minHeight: "24px",
      height: "24px",
      flexShrink: 0,
      color: "#000",
      fontFamily: "Circe",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    }),
    valueContainer: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      height: "24px",
      cursor: "pointer",
    }),
    placeholder: (provided) => ({
      ...provided,
      width: "190px",
      // flexShrink: '0',
      color: "#BDBDBD",
      fontFamily: "Circe",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    }),
    inputContainer: (provided) => ({
      ...provided,
      margin: "0 32px 0 0",
      padding: "0",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      width: "190px",
      color: "#000",
      fontFamily: "Circe",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal,",
      className: "inputAfterRemove",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      padding: "0",
      width: "19px",
      height: "24px",
      // cursor: 'pointer',
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      width: "18px",
      height: "9px",
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: "12px",
      marginLeft: "-8px",
      width: "394px",
      flexShrink: 0,
      borderRadius: "20px",
      background: "rgba(255, 255, 255, 0.70)",
      boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.10)",
      backdropFilter: "blur(25px)",
    }),
    menuList: (provided) => ({
      ...provided,
      maxWidth: "394px",
      maxHeight: "444px",
      padding: "10px 23px 10px 20px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Circe",
      fontSize: "18px",
      fontWeight: 400,
      color: state.isFocused ? "#FF6596" : "#000",
      background: state.isFocused ? "#fff" : "none",
      borderRadius: "10px",
    }),
  },
  // DESKTOP
  desktop: {
    container: (provided) => ({
      ...provided,
      padding: "0",
      height: "24px",
    }),
    control: (provided) => ({
      ...provided,
      marginLeft: "20px",
      padding: "0",
      width: "378px",
      minHeight: "24px",
      height: "24px",
      flexShrink: 0,
      color: "#000",
      fontFamily: "Circe",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    }),
    valueContainer: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      height: "24px",
      cursor: "pointer",
    }),
    placeholder: (provided) => ({
      ...provided,
      width: "190px",
      // flexShrink: '0',
      color: "#BDBDBD",
      fontFamily: "Circe",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    }),
    inputContainer: (provided) => ({
      ...provided,
      margin: "0 32px 0 0",
      padding: "0",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      width: "190px",
      color: "#000",
      fontFamily: "Circe",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal,",
      className: "inputAfterRemove",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      padding: "0",
      width: "19px",
      height: "24px",
      // cursor: 'pointer',
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      width: "18px",
      height: "9px",
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: "12px",
      marginLeft: "-8px",
      width: "394px",
      flexShrink: 0,
      borderRadius: "20px",
      background: "rgba(255, 255, 255, 0.70)",
      boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.10)",
      backdropFilter: "blur(25px)",
    }),
    menuList: (provided) => ({
      ...provided,
      maxWidth: "394px",
      maxHeight: "444px",
      padding: "10px 23px 10px 20px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Circe",
      fontSize: "18px",
      fontWeight: 400,
      color: state.isFocused ? "#FF6596" : "#000",
      background: state.isFocused ? "#fff" : "none",
      borderRadius: "10px",
    }),
  },
};

// types of devices
export const getDeviceConfig = (width) => {
  if (width < 768) {
    return "mobile";
  } else if (width >= 768 && width < 1280) {
    return "tablet";
  } else {
    return "desktop";
  }
};
