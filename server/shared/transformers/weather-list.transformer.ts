const fullDateToDayString = (fullDate) => fullDate.split(' ')[0];
const reduceWeatherDays = async (list) => {
  return list.reduce((accumulator, element) => {
    const isInAccumulator = accumulator.some((accumulatorElement) =>
      (fullDateToDayString(accumulatorElement.dt_txt) === fullDateToDayString(element.dt_txt)))
    if (!isInAccumulator) {
      accumulator.push(element)
    }
    return accumulator
  }, [])
};

export default reduceWeatherDays;
