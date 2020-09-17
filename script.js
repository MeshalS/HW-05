// taking the selecotr using JQuery 
const timeBlock = $("#Timeblocks")
// start with 9 as intial value 
let hours = 9;
// run the doc
$(document).ready(function () {
    let nowHours24 = moment().format('DD-MM-YYYY hh:mm');
    $("#currentDay").text(nowHours24)
    timeLine()

});
// this ffunction using tkaing the hour so it will set it and comper if it is PM or AM 
function buildhtml(hour) {
    let time = '';
    if (hour > 11) {
        time = hour + 'PM'
    } else {
        time = hour + 'AM'
    }
// to know the color 
    let colorClass = calculateColor(hour);
// creating the row and col and then have the tim where PMM or AM and tkaing the hour and onlcin 
    let row = `<div class="row align-items-center" > 

      <div class="col-1 border btn btn-lg" > ${time} </div>
    
      <div class="col-10 ">
        <input id="${hour}"
         class="w-20 border-0 outline-0 form-control form-control-lg ${colorClass}"  type="text" name="User-input" value='${getTask(hour)}' >
      </div>
    
      <button class="col-1 bg-primary btn btn-lg text-white" onclick='saveTask("${hour}")' > Save </button>
    </div>`
    return row;
}
function timeLine() {
    while (hours <= 17) {
        timeBlock.append(buildhtml(hours))
        hours++
    }

}
// save task 
function saveTask(saveHourKey){
    
// getting the ids 
   let inputValue = $("#" + saveHourKey).val(); 
   var listOfTasksObj = localStorage.getItem('listOfTasksObj');
   if (listOfTasksObj == undefined){
       // means the obj has not been created 
       // only happens once. In first creation. 
       listOfTasksObj = {}; 
       listOfTasksObj[saveHourKey] = inputValue; 
   }else {
       // if already created , then change back into a js obj from a json string. 
       listOfTasksObj = JSON.parse(listOfTasksObj); 
       listOfTasksObj[saveHourKey] = inputValue; //saves the value 
   }

   localStorage.setItem('listOfTasksObj', JSON.stringify(listOfTasksObj));

}

function getTask(hourKey){
    var listOfTasksObj = localStorage.getItem('listOfTasksObj');
    if (listOfTasksObj == undefined){
        return ""; 
    }
    // convert to js obj 
    listOfTasksObj = JSON.parse(listOfTasksObj); 
    var taskValue = listOfTasksObj[hourKey]; 
    if (taskValue != undefined){
        return taskValue;
    }else {
        return "";  ///value not stored yet 
    }
    
}
function calculateColor(hour) {

    // 3 color classes: present, future, past 
        let d= new Date();
        let currentHours = d.getHours();  // 24 hr consistent format with hour passed in parameter
        // return hour == currentHours ? "present" : hour
        if (hour == currentHours){
            return "present";
        }else if (hour > currentHours){
            /// time is ahead of us 
            return "future"; 
        }else if (hour < currentHours) {
            // means the time is behind... so past 
            return "past"; 
        }else {
            return ""; 
        }
    //     if (h > currentTime) {
    //         //future
    //         let element=$("#".concat(h));
    //         element.addClass("future")
    //     }
    // alert($("#".concat(h).) )

}
