let ComponentModule = {}

// CORE
const TemplatesFolderPath = "Static/Templates";

// Functions
// MECHANICS
async function Setup() 
{
    const JSONApps = await fetch("Static/Model/Apps.json").then(res => res.json());
    const JSONTaskbar = await fetch("Static/Model/Taskbar.json").then(res => res.json());
    const JSONCore = await fetch("Static/Model/Core.json").then(res => res.json());

    window.Core = JSONCore;
    window.Taskbar = JSONTaskbar;
    window.Apps = JSONApps;

    //console.log("Apps vv");
    //console.log(JSONApps);
}

async function AddHTMLComponent(ComponentName) 
{
    // Functions
    // INIT
    await fetch(TemplatesFolderPath + "/Components/" + ComponentName + ".html")
        .then(response => response.text())
        .then(data => 
            {
                document.body.innerHTML += "<div id='Component" + ComponentName +"'>" + data + "</div>";
            }
        );
}

function Initialise() 
{
    // Functions
    // INIT
    Setup();


    AddHTMLComponent("Body").then( () =>
    {
        AddHTMLComponent("Taskbar");
    });
}

function End() 
{
    // Functions
    // INIT


    localStorage.clear();
}


// DIRECT
ComponentModule.Initialise = Initialise;
ComponentModule.End = End;

export default ComponentModule;