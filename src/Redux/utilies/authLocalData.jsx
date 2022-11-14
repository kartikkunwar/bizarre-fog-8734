const authgetData = (key) => {
    try {
      let data = localStorage.getItem(key);
      data = JSON.parse(data);
      return data;
    } catch (e) {
      return null;
    }
  };
  
  const authsaveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  const saveCartData = (key, value) => {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export { authgetData, authsaveData, saveCartData };