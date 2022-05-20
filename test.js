const returnEven = () => {
  const newArray = [];
  for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }
  return newArray;
};
