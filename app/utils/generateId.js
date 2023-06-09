const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = date.getDate();
  return `${year}${month}${day}`;
};

const generateSalesId = () => {
  return "SA" + getDate() + "0" + Math.floor(100 + Math.random() * 900);
};

console.log(generateSalesId());
module.exports = { generateSalesId };
