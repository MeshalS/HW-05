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