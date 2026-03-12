// Modules
import CoreComponentModule from "../Core.js";

class AppHandler 
{
    constructor(App) 
    {
        // Functions
        // INIT
        this.App = App;
    }

    Clicked() 
    {
        // Functions
        // INIT

        CoreComponentModule.AddHTMLComponent("ErrorForm");
    }
}

export default AppHandler;