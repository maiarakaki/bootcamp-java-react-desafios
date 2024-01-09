export const getDate = () =>{
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() +1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let dateString = `${day}/${month}/${year} ${hour}:${minutes}`
    return dateString;
}