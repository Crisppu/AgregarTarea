export const uniqueDates = (tasks) =>{
  //console.log(tasks)
 const unique = [];
   tasks.forEach((task) => {// cuenta si las fechas estan repetidas
     //console.log(task.dateFormat)
        if(!unique.includes(task.dateFormat)){//si todavía no existe task.dateFormat lo agregas
         unique.push(task.dateFormat)//lo agregas
        }
    });
 return unique;

};

export const orderDates = (dates) =>{
return dates.sort((a, b) =>{
  const firsDate = moment(a, "DD/MM/YYYY");
  const secondDate = moment(b, "DD/MM/YYYY");
  return firsDate - secondDate;

});
};