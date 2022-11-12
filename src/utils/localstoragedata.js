

export const getlocaldata=(key)=>{
   try{
    let data=localStorage.getItem(key);
    data=JSON.parse(data);
    return data;
   }catch(err){
    return null
   }
}

export const setlocaldata=(key,val)=>{
   localStorage.setItem(key,JSON.stringify(val))
}