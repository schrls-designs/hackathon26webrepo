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

        CoreComponentModule.AddHTMLComponent("Form", 
        {
            "Args": ["CRITICAL DRAGGABLE ERROR", "ERROR", "Error Code 0xC47"]
        });
    }
}

export default AppHandler;