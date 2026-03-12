let PaneDowsComponentModule = {}

// MODULES
import CoreComponentModule from "./Core.js";

// CORE
const Audios = {
    "StartUp": new Audio("Static/Audio/startup.mp3"),
    "Error": new Audio("Static/Audio/error.mp3")
}

// Functions
// MECHANICS
function BSOD() 
{
    // Functions
    // INIT
    CoreComponentModule.AddHTMLComponent("BSOD");
    Audios["Error"].play();
}

function HandleBSOD() // Countdown of doom
{
    // Functions
    // INIT
    setTimeout(BSOD, window.Core["BSODTimer"] * 1000);
}


function HandleApps() 
{
    // Functions
    // INIT

}



function Initialise() 
{
    // CORE

    
    // Functions
    // INIT
    HandleBSOD();

    Audios["StartUp"].play();
}

function End() 
{
    
}


// DIRECT
PaneDowsComponentModule.Initialise = Initialise;
PaneDowsComponentModule.End = End;

export default PaneDowsComponentModule
