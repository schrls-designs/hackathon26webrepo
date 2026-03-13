// Modules
import CoreComponentModule from "../Core.js";
import UtilitiesService from "../Services/Utilities.js";


// CORE

// CLASS
class BodyComponent
{
    constructor(DOMElement) 
    {
        this.Element = DOMElement;
        this.DesktopAppsDiv = DOMElement.querySelector("#DesktopApp");
    }

    async Initialise() 
    {
        // Functions
        // INIT
        for (const i in window.Desktop["Items"]) 
        {
            const AppName = window.Desktop["Items"][i];

            let App = await CoreComponentModule.AddHTMLComponent("App", 
            {
                "Parent" : this.DesktopAppsDiv,
                "Args" : [AppName, "Desktop"]
            });

            //this.DesktopAppsDiv.appendChild(App);    
        }
    }

    End() 
    {
        // Functions
        // INIT
    }

}

export default BodyComponent;