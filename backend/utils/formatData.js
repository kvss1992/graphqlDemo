export const formatData = data => {
  // return a single object.
  let formattedData = data.reduce((acc, curVal) => {
    if(Array.isArray(curVal)) {
      acc["breaking_bad"] = curVal[0]
    } else if(curVal.status !== "success"){
      acc[curVal.type] = curVal
    } else {
      acc["dog"] = curVal
    }
    return acc;
  }, {});
  return formattedData;
}
