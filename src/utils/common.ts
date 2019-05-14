var Tool = {
  addZero(val) {
    val = String(val)
    return val.length < 2 ? '0' + val : val
  }
};

export default Tool
