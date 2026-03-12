// Modules
import CoreComponentModule from "../Core.js";
import UtilitiesService from "../Services/Utilities.js";


// CORE

// CLASS
class BSODComponent
{
    constructor(DOMElement) 
    {
        this.Element = DOMElement;

        this.PinnedItemsList = DOMElement.querySelector("#PinnedItems");
    }

    async AddPinnedApp(AppName) 
    {
        // CORE
        const AppInfo = window.Apps[AppName];

        // Functions
        // INIT
        let ListElement = document.createElement("li");

        let App = await CoreComponentModule.AddHTMLComponent("App", 
        {
            "Parent" : ListElement,
            "Args" : [AppName, "Taskbar"]
        });
        
        //let AppIconImage = document.createElement("img")
        //AppIconImage.src = AppInfo["Icon"];

        ListElement.appendChild(App);

        this.PinnedItemsList.appendChild(ListElement);

    }

    Initialise() 
    {
        // Functions
        // INIT
        window.Taskbar["PinnedItems"].forEach(function(AppName, Index)
        {
            console.log("Adding: " + AppName);

            this.AddPinnedApp(AppName);
        }.bind(this));

        //<li>
        //<img src="Static\Images\filicon.png" alt=""> 
        //</li>
    }

    End() 
    {
        // Functions
        // INIT
    }

}

export default BSODComponent;