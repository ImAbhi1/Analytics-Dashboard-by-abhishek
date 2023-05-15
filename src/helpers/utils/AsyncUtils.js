
export const storeItem = (key, item) => {
  let jsonOfItem = window.localStorage.setItem(key, JSON.stringify(item));
  return jsonOfItem;
};

export const getItem = (key) => {
  const retrievedItem = window.localStorage.getItem(key);
  const item = JSON.parse(retrievedItem);
  return item;

};

export const removeItem = (key) => {
  const removedItem = localStorage.removeItem(key);
  return removedItem;
};

export const regexIncase = val => {
  let reg = new RegExp(`${val}`);
  let regObj = {
      $regex: reg,
      $options: "i"
  };
  return regObj;
}

export const generateUrlParams = (arr = []) => {
  if (arr.length) {
    let after_one = arr.filter((item, index) => index > 0);
    if (after_one.length) {
      let str = '';
      after_one.forEach((item, index) => {
        if (index === 0) {
          str = `?id${index + 2}=${item}`;
        } else {
          str = str + `&id${index + 2}=${item}`;
        }
      });
      return str;
    }
    return '';
  }
};
export const dateConverter=(datedata)=>{
  let input = datedata
let date = new Date(input);
let options = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
 
};
let options2={
  day: 'numeric',
 
}
let options3={
  year: 'numeric'
}
let options4={
  month: 'short'
}
// let formattedDate = date.toLocaleString('en-US', options);
let formattedDate=date.toLocaleTimeString("en-US", options) +","+date.toLocaleDateString("en-US", options2)+" "+date.toLocaleDateString("en-US", options4)+","+date.toLocaleDateString("en-US", options3)

return formattedDate

}
export function formatDate(dateString) {
  let date = new Date(dateString);
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}


