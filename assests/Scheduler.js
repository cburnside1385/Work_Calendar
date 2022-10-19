//date
const d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var todayDate = month + "/" + day + "/" + year

function time() {
    setInterval(() => {
        const time = new Date();


        const hour = time.getHours();
        const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        

        const ampm = hour >= 12 ? 'PM' : 'AM'


        $("#currentTime").html((hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds) + ' ' + `<span id="am-pm">${ampm}</span>`)



    }, 1000);
}
$(document).ready(function () {


    time();
    schedule();
    $("#currentDay").html(todayDate)
    $(".save").on("click", function () {

        var data = $(this).siblings(".occurence").val();
        var time = $(this).parent().attr("id");


        localStorage.setItem(time, data);

        alertify.success("Information Saved!")
    })

    function schedule() {

        var timeNow = moment().hour();


        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("time")[1]);
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    //save local data
    $("#time8 .occurence").val(localStorage.getItem("time8"));
    $("#time9 .occurence").val(localStorage.getItem("time9"));
    $("#time10 .occurence").val(localStorage.getItem("time10"));
    $("#time11 .occurence").val(localStorage.getItem("time11"));
    $("#time12 .occurence").val(localStorage.getItem("time12"));
    $("#time13 .occurence").val(localStorage.getItem("time13"));
    $("#time14 .occurence").val(localStorage.getItem("time14"));
    $("#time15 .occurence").val(localStorage.getItem("time15"));
    $("#time16 .occurence").val(localStorage.getItem("time16"));
    $("#time17 .occurence").val(localStorage.getItem("time17"));

    
    
});