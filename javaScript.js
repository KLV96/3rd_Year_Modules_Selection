var moduleLimit = 6;
var isAllowed = true;

function allowDrop(ev) 
{
    ev.preventDefault();
}

function drag(ev,id) 
{
	hideInfo(id);
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("id", id);

}

function dontAllowDrop(ev)
{
	 // var x = document.getElementsByClassName("moduleitem");	
	 window.alert("You can't do that");
	 ev.preventDefault();
	 isAllowed = false;

}	

function drop(ev,id) 
{
	if (isAllowed==false)
	{
		isAllowed = true;
		return false;
	}
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    var id = ev.dataTransfer.getData("id");

	document.getElementById(id).style.padding = "10px 10px";


    ev.target.appendChild(document.getElementById(data));

    hideInfo(id);
    update();
}


function setVisible()
{
	if(document.getElementById("With_Management").checked == true)      
		{      
			document.getElementById("6SSMN339").style.display = "block";  
			document.getElementById("6SSMN325").style.display = "block"; 
			moduleLimit = 4;
		}  
		else
		{
			document.getElementById("6SSMN339").style.display = "none"; 
			document.getElementById("6SSMN325").style.display = "none";  
			moduleLimit = 6;
		}
}

function getInfo(moduleID)
{
	// we want to have a variable that will store the id of the module that has been clicked ( to show the info) and when 
	// another one is clicked it should close the info of that module and display the one that is being clicked 
		
		// document.getElementById(moduleID + "Info").style.display = "inline";


		document.getElementById(moduleID+"Info").style.visibility = "visible"; 

		document.getElementById(moduleID+"Info").style.display = "inline"; 

		window.scroll(0,findPos(document.getElementById(moduleID+"Info")));


}

function hideInfo(moduleID)
{
	document.getElementById(moduleID+"Info").style.display = "none"; 

}

function update()
{
	var modulesSelected = document.getElementById("table2").children;
	var moduleCount = modulesSelected.length - 3;
	var output = "Optional modules selected: " + moduleCount + '\n';
	if (moduleCount > moduleLimit) {
		output += "ERROR: You can't have that many modules!" + '\n';
	}
	// Each module in the HTML needs either a "sem1" or "sem2" class, depending on which semester it is taken, in order for this code to work
	var sem1Count = 0;
	var sem1Modules = document.querySelectorAll('li.sem1');


	for (var i = 0; i < sem1Modules.length; i++)
	{
		for (var j = 2; j < modulesSelected.length; j++)
		{
			

			if (sem1Modules[i].id === modulesSelected[j].id) {
				sem1Count++;
			}
		}
	}
	output += "Semester 1 modules: " + sem1Count + '\n';
	if (sem1Count > moduleLimit / 2) {
		output += "ERROR: Too many modules selected for semester 1!" + '\n';
	}
	var sem2Count = moduleCount - sem1Count;
	output += "Semester 2 modules: " + sem2Count + '\n';
	if (sem2Count > moduleLimit / 2) {
		output += "ERROR: Too many modules selected for semester 2!" + '\n';
	}
	window.alert(output);
}

function autoScroll(moduleID)
{
	if (moduleID == "6CCS3TSP")
	{	
		document.getElementById(moduleID+'Info').scollIntoView();
	}
}