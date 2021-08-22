

// GLOBAL VARIABLE
var topHTML = $('#currentDay'); // Grabs the top ID
topHTML = topHTML.text(moment().format("MMMM Do YYYY hh:mm:ss")); // Assigns the time to the jumbotron to be displayed

// Checks the time and assigns the color to which it represents
// Time past = Gray, Current Time = red, Time future = green
// REASON FOR IDS: The IDS are used to run through each ID, the problem with the classes we have right now that is if we assign to it itll only go once since they all share the same name
function setColor()
{
    $('.time-block').each(function ()
    {
        var timeID = parseInt(($(this)).attr('id')); // Grabs the time-blocks ID (used for comparing to hour)
        var hour = moment().format('H'); // Gets the current hour (NUMBER ONLY)
        var textarea = $(this).children('.textValue') // Grabs the textarea div (TO BE ABLE TO MANIPULATE CLASS AND CHANGE COLOR)

        if (timeID == hour)
        {textarea.addClass('present');}
        else if (timeID > hour)
        {textarea.addClass('future');}
        else
        {textarea.addClass('past');}
    })
}

function saveToDo()
{
    $('.time-block').each(function ()
    {
        if (localStorage.getItem(parseInt(($(this)).attr('id'))) === null)
        {return;}

        else
        {$(this).children('.textValue').val(localStorage.getItem(parseInt(($(this)).attr('id'))));}
    })
}

$('.saveBtn').click(function (event) 
{
    // event.preventDefault();//stops Chrome from clearing entered data when refreshing the page 
    var t = $(event.target);
    localStorage.setItem(parseInt(t.parent().attr('id')), t.siblings('.textValue').val())
})

setColor();
saveToDo();


// WHEN I click into a timeblock THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
// ```