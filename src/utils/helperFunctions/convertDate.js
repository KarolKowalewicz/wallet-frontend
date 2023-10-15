const convertDate = (dateToFormat) => {
  const parsedDate = new Date(dateToFormat);
  const formattedDate = `${parsedDate.getDate().toString().padStart(2, "0")}.${(
    parsedDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${parsedDate.getFullYear().toString().slice(-2)}`;
  return formattedDate;
};

export default convertDate;
