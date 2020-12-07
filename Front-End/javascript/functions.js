var tasks = null;
var currentRoom = null;

var jsonLocation = './maps.json' //Json location file
var obj; //contains the json file with all the map names and tasks
var mapNames; //Contains the names of all the maps
var currentMap;
var currentMapRooms; //Contains the name of the rooms of the current map
var roomList = []; //Contains all the ids of the rooms for the current maps. Used when we want to switch to a new map and want rooms deleted
var currentRoomTasks = []; //Contains the name of the tasks of the current room
var taskList = []; //Contains all the ids of the tasks for the current room. 
var currentRoomID = ""; //Contains the id of the room that is currently highlighted;
var currentTaskID = ""; //Contains the id of the task that is currently highlighted;

var currentRoomValue = ""; //The actual name of the room that is currently selected
var currentTaskValue = ""; //The actual name of the task that is currently selected

var roundNumber = 1; //Current Round

var currentRoundArray = [];//Array containing all the text values of the current round

var addTaskID = []; //to contain the ids of the task that have been added
var taskCounter = 0; //counter of all the ids that have been added

var mapSize;

var selectPrompt = true;

var card_ids = [];

async function body_init() {
    document.getElementById("currentRound").innerText = "Round " + roundNumber;
    //Download Json File
    await fetch(jsonLocation)
        .then(res => res.json())
        .then(data => obj = data)
    mapNames = Object.keys(obj); //Assign all the map names to this variable
    var selectName = document.getElementById("mapSelection");
    for (let i = 0; i < mapNames.length; i++)//Adds the map names to the select menu
    {
        console.log(mapNames[i]);
        opt = document.createElement("option");
        opt.setAttribute("class", "text-center")
        opt.setAttribute("id", mapNames[i]);
        opt.appendChild(document.createTextNode(mapNames[i]));
        selectName.appendChild(opt);
    }
    load_rooms();
}
function load_rooms() {
    //This is to prevent null pointer errors when switching room and selecting tasks
    currentTaskValue = "";
    currentTaskID = "";
    currentRoomID = "";
    currentRoomValue = "";
    for (let i = 0; i < roomList.length; i++) {
        var element = document.getElementById(roomList[i]);
        element.parentNode.removeChild(element);
    }
    roomList = [];
    currentMap = document.getElementById("mapSelection").value;
    var currentMapRooms = Object.keys(obj[currentMap]);;
    mapSize = currentMapRooms.length;
    var ul = document.getElementById("roomList");
    var al = document.getElementById("taskList");
    for (let i = 0; i < currentMapRooms.length; i++) {
        {
            a = document.createElement("a");
            a.setAttribute("id", currentMap + i.toString());
            roomList.push(currentMap + i.toString());
            a.setAttribute("class", "list-group-item list-group-item-dark text-center");
            a.setAttribute("onClick", "load_tasks('" + currentMap + i.toString() + "','" + currentMapRooms[i] + "')");
            a.appendChild(document.createTextNode(currentMapRooms[i]));
            ul.appendChild(a);
        }
    }
}
function load_tasks(roomID, room) {
    document.getElementById("addTask").setAttribute("class","list-group-item list-group-item-success text-center")
    document.getElementById("addTask").innerText = "Add Task"
    document.getElementById("completeRound").setAttribute("class","list-group-item list-group-item-warning text-center")
    document.getElementById("completeRound").innerText = "Complete Round"
    if (selectPrompt == true) {
        let m = document.getElementById("selectTaskPrompt");
        let x = document.createElement("h4");
        x.setAttribute("style", "color:white");
        x.appendChild(document.createTextNode("Select a task"));
        m.appendChild(x);
        selectPrompt = false;
    }
    currentTaskValue = "";
    currentTaskID = "";
    //This is for highlighting the selected option
    if (currentRoomID != "") {
        document.getElementById(currentRoomID).setAttribute("class", "list-group-item list-group-item-dark text-center");
    }
    document.getElementById(roomID).setAttribute("class", "list-group-item list-group-item-primary text-center");
    currentRoomValue = document.getElementById(roomID).innerText;
    //This is for removing the previous tasks
    currentRoomID = roomID;
    for (let i = 0; i < taskList.length; i++) {
        var element = document.getElementById(taskList[i]);
        element.parentNode.removeChild(element);
    }
    taskList = [];
    //This gets all the tasks in the new room and makes them into a list
    currentRoomTasks = obj[currentMap][room]
    ul = document.getElementById("taskList");
    for (let i = 0; i < currentRoomTasks.length; i++) {
        {
            a = document.createElement("a");
            a.setAttribute("id", room + i.toString());
            taskList.push(room + i.toString());
            a.setAttribute("class", "list-group-item list-group-item-dark text-center");
            a.setAttribute("onClick", "select_task('" + room + i.toString() + "')");
            a.appendChild(document.createTextNode(currentRoomTasks[i]));
            ul.appendChild(a);
        }
    }
}
function select_task(taskID) {
    document.getElementById("addTask").setAttribute("class","list-group-item list-group-item-success text-center")
    document.getElementById("addTask").innerText = "Add Task"
    document.getElementById("completeRound").setAttribute("class","list-group-item list-group-item-warning text-center")
    document.getElementById("completeRound").innerText = "Complete Round"

    if (currentTaskID != "") {
        document.getElementById(currentTaskID).setAttribute("class", "list-group-item list-group-item-dark text-center");
    }
    document.getElementById(taskID).setAttribute("class", "list-group-item list-group-item-primary text-center");
    currentTaskValue = document.getElementById(taskID).innerText;
    currentTaskID = taskID;
}
function add_task() {
    document.getElementById("completeRound").setAttribute("class","list-group-item list-group-item-warning text-center")
    document.getElementById("completeRound").innerText = "Complete Round"
    //This takes a single task and adds it to the current round view
    if (currentTaskValue != "") {
        ul = document.getElementById("selectedTasks");
        a = document.createElement("a");
        a.setAttribute("id", taskCounter.toString());
        addTaskID.push(taskCounter.toString());
        taskCounter++;
        a.setAttribute("class", "list-group-item list-group-item-action text-center");
        // a.setAttribute("onClick", "select_task('" + room + i.toString() + "')");
        currentRoundArray.push(currentRoomValue + " - " + currentTaskValue);
        a.appendChild(document.createTextNode(currentRoomValue + " - " + currentTaskValue));
        ul.appendChild(a);
        document.getElementById("addTask").setAttribute("class","list-group-item  list-group-item-primary text-center")
        document.getElementById("addTask").innerText = "Task Added, Scroll Down To See!"
    }
}
function complete_round() {
    //This will remove all the values under "Current round"
    for (let i = 0; i < addTaskID.length; i++) {
        var element = document.getElementById(addTaskID[i]);
        element.parentNode.removeChild(element);
    }
    addTaskID = [];

    let div = document.getElementById("stopPls");
    let divChild = document.createElement("div");
    divChild.setAttribute("class", "card ml-4 mt-4 mr-4 mb-4");
    divChild.setAttribute("id", "cardHeader" + roundNumber);
    divChild.setAttribute("style", "width: 18rem;")
    div.appendChild(divChild);
    card_ids.push("cardHeader" + roundNumber);

    let card = document.getElementById("cardHeader" + roundNumber);
    c = document.createElement("div");
    c.setAttribute("class", "card-body");
    c.setAttribute("id", "card" + roundNumber.toString());
    card.appendChild(c);

    card = document.getElementById("card" + roundNumber.toString())
    a = document.createElement("h5");
    a.setAttribute("class", "card-title text-center");
    a.appendChild(document.createTextNode("Round " + roundNumber));
    card.appendChild(a);
    for (let i = 0; i < currentRoundArray.length; i++) {
        a = document.createElement("p");
        a.setAttribute("class", "card-text");
        a.appendChild(document.createTextNode(currentRoundArray[i]));
        card.appendChild(a);
    }
    currentRoundArray = [];
    roundNumber++;
    document.getElementById("currentRound").innerText = "Round " + roundNumber;

    document.getElementById("completeRound").setAttribute("class","list-group-item list-group-item-primary text-center")
    document.getElementById("completeRound").innerText = "Round Complete, Scroll Down To See!"
}
function reset()
{
    //Removes all tasks from this round
    for (let i = 0; i < addTaskID.length; i++) {
        var element = document.getElementById(addTaskID[i]);
        element.parentNode.removeChild(element);
    }
    addTaskID = [];

    //Removes all completed rounds
    for (let i = 0; i < card_ids.length; i++) {
        var element = document.getElementById(card_ids[i]);
        element.parentNode.removeChild(element);
    }
    card_ids = [];

    //Updates Rounds back to 1
    document.getElementById("currentRound").innerText = "Round " + 1;
    roundNumber = 1;
}