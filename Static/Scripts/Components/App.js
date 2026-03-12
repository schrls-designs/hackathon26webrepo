// Modules
import CoreComponentModule from "../Core.js";
import UtilitiesService from "../Services/Utilities.js";


// CORE

// CLASS
class AppComponent
{
    constructor(DOMElement) 
    {
        this.Element = DOMElement;
        this.AppIconImage = DOMElement.querySelector("#AppIcon");
        this.AppNameParagraph = DOMElement.querySelector("#AppName");
    }

    Initialise(Name, Type) 
    {
        // CORE
        let AppMeta = window.Apps[Name];

        console.log("AppName: " + Name);
        console.log(AppMeta);

        // Functions
        // INIT
        this.Name = Name;
        this.Type = Type;

        this.DisplayName = AppMeta["DisplayName"];
        this.IconURL = AppMeta["Icon"];

        this.AppIconImage.src = this.IconURL;
        this.AppNameParagraph.innerHTML = this.DisplayName;
    }

    End() 
    {
        // Functions
        // INIT
    }

}

export default AppComponent;