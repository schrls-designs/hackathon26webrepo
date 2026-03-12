// CORE
let CachedAppHandlers = {};

// Functions
// MECHANICS
async function Setup() 
{
    // Functions
    // INIT
    for (const AppName in window.Apps) 
    {
        const AppMeta = window.Apps[AppName];

        try 
        {
            let Module = await import("./Apps/" + AppName + ".js");
            CachedAppHandlers[AppName] = Module.default;
        }
        catch(Error) 
        {
            console.log("Failed: " + Error);
        }
    }

}

// CLASS
class AppBehaviour 
{
    constructor(App) 
    {
        // Functions
        // INIT
        this.App = App;

        console.log("Cached App Handlers");
        console.log(CachedAppHandlers);

        if (CachedAppHandlers[App.Name] != undefined) 
        {
            this.Handler = new CachedAppHandlers[App.Name](App);
            App.Element.onclick = this.Handler.Clicked;
            console.log("Binded click event");
        } //else 
        //{
        //    this.Handler = {};
        //}

        App.Element.style.cursor = "pointer";
    }

}


await Setup();

export default AppBehaviour;