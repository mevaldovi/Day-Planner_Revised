
console.log("update time");
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar --CHECK!
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours --CHECK!
// WHEN I view the timeblocks for that day
function update() {
    $("#currentDay").html(moment().format("MMMM D YYYY hh:mm:ss"));
}

setInterval(update, 1000);
var timeNow = moment();
var currentHour = timeNow.hours();

// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


//var currentHour = Date.now().update();
function timeColor() {
    $('.time-block').each(function() {
        var timeSection = $(this).attr("id")
        if (timeSection < currentHour) {
            $(this).addClass("past")
        } else if (timeSection == currentHour) {
            $(this).addClass("present")
        } else {
            $(this).removeClass("past present")
            $(this).addClass("future")
        }

    })
}

function saveToDo(event)
{
    event.preventDefault();
    $('.time-block').each(function ()
    {
        if (localStorage.getItem(parseInt(($(this)).attr('id'))) === null)
        {return;}

        else
        {$(this).children('.description').val(localStorage.getItem(parseInt(($(this)).attr('id'))));}
    })
}

$('.saveBtn').click(function (event) 
{
    event.preventDefault();//stops Chrome from clearing entered data when refreshing the page 
    var t = $(event.target);
    localStorage.setItem(parseInt(t.parent().attr('id')), t.siblings('.description').val())
})

timeColor();
saveToDo();


// WHEN I click into a timeblock THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```