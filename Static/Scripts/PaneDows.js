let PaneDowsComponentModule = {}

// MODULES
import CoreComponentModule from "./Core.js";

// Functions
// MECHANICS
function BSOD() 
{
    // Functions
    // INIT
    CoreComponentModule.AddHTMLComponent("BSOD");
}

function HandleBSOD() // Countdown of doom
{
    // Functions
    // INIT
    setTimeout(BSOD, 5000);
}

function Initialise() 
{
    // Functions
    // INIT
    HandleBSOD();
}

function End() 
{
    
}


// DIRECT
PaneDowsComponentModule.Initialise = Initialise;
PaneDowsComponentModule.End = End;

export default PaneDowsComponentModule
