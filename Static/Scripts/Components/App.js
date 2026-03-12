// Modules
import CoreComponentModule from "../Core.js";
import UtilitiesService from "../Services/Utilities.js";
import AppBehaviour from "../AppBehaviour.js";

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


    HandleTaskbarApp() 
    {
        // Functions
        // INIT
        this.Element.classList.add("TaskbarApp");

        this.AppNameParagraph.parentNode.removeChild(this.AppNameParagraph);
    }

    HandleDesktopApp() 
    {
        // FunctionS
        // INIT
        this.Element.classList.add("DesktopApp");
    }


    Initialise(Name, Type) 
    {
        // CORE
        const TypeToHandle = 
        {
            "Taskbar" : this.HandleTaskbarApp.bind(this),
            "Desktop" : this.HandleDesktopApp.bind(this)
        }


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

        TypeToHandle[Type || "Desktop"](); // TYPE BEHAVIOUR

        this.AppBehaviour = new AppBehaviour(this);
        

    }

    End() 
    {
        // Functions
        // INIT
    }

}


export default AppComponent;