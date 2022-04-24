const record = [
    {year: "2018", result: "L"},
    {year: "2015", result: "W"},
    {year: "2016", result: "N/A"}
  ]
function superbowlWin(record) {
    let variable;
    record.find(function(element,index,record)
    {
        
        if(record[index].result==="W")
        {
            variable=record[index].year
            console.log(variable)
            return variable
        }
    })
    return variable 
  }
console.log(superbowlWin(record))
