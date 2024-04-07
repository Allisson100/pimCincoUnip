const getNewTime = (time) => {
  const newTime = time.replace(":", "");

  return newTime;
};

export default getNewTime;
