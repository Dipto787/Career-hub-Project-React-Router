 
 let getLocalStorageData=()=>{
    let storedData=localStorage.getItem('job-applied');
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
 }

 let setDataOnLocalStorage=(id)=>{
    console.log(id)
    let storedData=getLocalStorageData();
    let exist=storedData.find(e=>e===id);
    if(!exist){
        storedData.push(id);
        localStorage.setItem('job-applied',JSON.stringify(storedData))
    } 
 }

 export {getLocalStorageData,setDataOnLocalStorage}