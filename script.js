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