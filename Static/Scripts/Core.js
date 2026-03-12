let CoreComponentModule = {}

// MODULES
import UtilitiesService from "./Services/Utilities.js";
import PaneDowsComponentModule from "./PaneDows.js";

// CORE
const TemplatesFolderPath = "Static/Templates";
const ScriptsFolderPath = "Static/Scripts";

let RuntimeMethods = {};

// Functions
// MECHANICS
async function RuntimeLoop() {
    // CORE
    //let AccumulatedTime = 0;

    let LastFrameTime = UtilitiesService.Time();

    // Functions
    // MECHANICS
    function Render()  
    {
        // CORE
        const TimeNow = UtilitiesService.Time();
        const DeltaTime = TimeNow - LastFrameTime;

        //console.log("Tick: " + AccumulatedTime);

        for (const CallableName in RuntimeMethods) 
        {
            const CallableMeta = RuntimeMethods[CallableName];
            const AccumulatedTime = TimeNow - CallableMeta["StartTime"];

            const CallbackFunction = CallableMeta["Function"];

            CallbackFunction(DeltaTime, AccumulatedTime);
        }

        LastFrameTime = TimeNow;
        requestAnimationFrame(Render);

    }

    // INIT
    Render();
}

async function Setup() 
{
    // CORE
    const JSONApps = await fetch("Static/Model/Apps.json").then(res => res.json());
    const JSONTaskbar = await fetch("Static/Model/Taskbar.json").then(res => res.json());
    const JSONCore = await fetch("Static/Model/Core.json").then(res => res.json());
    const JSONDesktop = await fetch("Static/Model/Desktop.json").then(res => res.json());

    // Functions
    // INIT
    window.Core = JSONCore;
    window.Taskbar = JSONTaskbar;
    window.Apps = JSONApps;
    window.Desktop = JSONDesktop;

    //console.log("Apps vv");
    //console.log(JSONApps);
}

async function GetHTMLComponent(ComponentName) 
{
    // Functions
    // INIT
    const response = await fetch(TemplatesFolderPath + "/Components/" + ComponentName + ".html");
    return await response.text();
}

async function AddHTMLComponent(ComponentName, Options) 
{
    // CORE
    Options = Options || {};
    Options["Args"] = Options["Args"] || [];

    // Functions
    // INIT
    let ComponentHTML = await GetHTMLComponent(ComponentName);
    let ComponentHandlerClass;

    let ComponentWrapperDiv = document.createElement("div");
    ComponentWrapperDiv.id = "Component" + ComponentName;
    ComponentWrapperDiv.innerHTML = ComponentHTML;

    (Options["Parent"] || document.body).appendChild(ComponentWrapperDiv);

    try {
        const Module = await import("./Components/" + ComponentName + ".js");

        ComponentHandlerClass = new Module.default(ComponentWrapperDiv);
        ComponentHandlerClass.Initialise(...Options["Args"]);
    } catch (Error) {
        console.log("Failed:", Error);
    }

    return ComponentWrapperDiv; 
}

function BindRuntimeMethod(Name, CallbackFunction) 
{
    // Functions
    // INIT
    RuntimeMethods[Name] = 
    {
        "StartTime": UtilitiesService.Time(),
        "Function": CallbackFunction
    }
}

function UnbindRuntimeMethod(Name) 
{
    // Functions
    // INIT
    delete RuntimeMethods[Name];
}

function LoadingBarFinished() 
{
    // Functions
    // INIT
    PaneDowsComponentModule.Initialise();
}

function ComponentLoadedCallback() 
{
    // Functions
    // INIT
    RuntimeLoop();
    AddHTMLComponent("LoadingBar");
}

async function Initialise() 
{
    // Functions
    // INIT
    await Setup();

    document.title = window.Core["SiteName"];

    AddHTMLComponent("Body").then( () =>
    {
        AddHTMLComponent("Taskbar").then( () => 
        {
            return ComponentLoadedCallback();
        });
    });
}

function End() 
{
    // Functions
    // INIT


    localStorage.clear();
}


// DIRECT
CoreComponentModule.BindRuntimeMethod = BindRuntimeMethod;
CoreComponentModule.UnbindRuntimeMethod = UnbindRuntimeMethod;
CoreComponentModule.LoadingBarFinished = LoadingBarFinished;

CoreComponentModule.AddHTMLComponent = AddHTMLComponent;

CoreComponentModule.Initialise = Initialise;
CoreComponentModule.End = End;

export default CoreComponentModule;