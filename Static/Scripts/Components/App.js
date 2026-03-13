// Modules
import CoreComponentModule from "../Core.js";
import UtilitiesService from "../Services/Utilities.js";
import AppBehaviour from "../AppBehaviour.js";

// CORE 
let CurrentlySelectedDesktopApp;
let Apps = [];

// Functions
// MECHANICS
function SelectDesktopApp(_AppComponent) 
{
    // Functions
    // INIT
    _AppComponent.Element.classList.add("DesktopApp-Clicked");
    CurrentlySelectedDesktopApp = _AppComponent;

    Apps.forEach(OtherAppComponent => {
        // Functions
        // INIT
        if (OtherAppComponent.Type !== "Desktop") 
        {
            return;
        }

        if (OtherAppComponent !== CurrentlySelectedDesktopApp) 
        {
            OtherAppComponent.Element.classList.remove("DesktopApp-Clicked");
        }
    });
}

// CLASS
class AppComponent
{
    constructor(DOMElement) 
    {
        this.Element = DOMElement;
        this.AppIconImage = DOMElement.querySelector("#AppIcon");
        this.AppNameParagraph = DOMElement.querySelector("#AppName");

        this.TypeToHandle = 
        {
            "Taskbar" : this.HandleTaskbarApp.bind(this),
            "Desktop" : this.HandleDesktopApp.bind(this)
        }

        Apps.push(this);
    }

    FakeLoading() 
    {
        // CORE
        let CursorImage = document.createElement("img");
        CursorImage.src = "Static/Images/loadingsticker.gif";
        CursorImage.style.position = "fixed";
        CursorImage.style.height = "30px";
        CursorImage.style.width = "30px";
        CursorImage.style.zIndex = "2";

        const xOffset = 15;
        const yOffset = 15;

        document.body.appendChild(CursorImage);

        // Functions
        // MECHANICS
        function Render(DeltaTime, AccumulatedTime) 
        {
            // CORE
            const MousePosition = UtilitiesService.MousePosition();

            // Functions
            // INIT
            CursorImage.style.top = (MousePosition.Y + yOffset) + "px";
            CursorImage.style.left = (MousePosition.X + xOffset) + "px";

            if (AccumulatedTime > 5) 
            {
                return CoreComponentModule.UnbindRuntimeMethod("FakeLoading");
            }
        }

        function Disconnected() 
        {
            // Functions
            // INIT
            return UtilitiesService.Destroy(CursorImage);
        }

        CoreComponentModule.UnbindRuntimeMethod("FakeLoading");
        CoreComponentModule.BindRuntimeMethod("FakeLoading", Render, Disconnected);

    }


    HandleTaskbarApp() 
    {
        // CORE
        

        // Functions
        // MECHANICS
        function Clicked()
        {
            // Functions
            // INIT

        }

        // INIT
        this.Element.classList.add("TaskbarApp");

        this.AppNameParagraph.parentNode.removeChild(this.AppNameParagraph);

        return {"Clicked" : Clicked}
    }

    HandleDesktopApp() 
    {
        // CORE
        let ToggleState = false;

        // FunctionS
        // MECHANICS
        function Clicked() 
        {
            // Functions
            // INIT

            SelectDesktopApp(this);

            /*ToggleState = !ToggleState;

            if (ToggleState) 
            {
                this.Element.classList.add("DesktopApp-Clicked");
            }
            else 
            {
                this.Element.classList.remove("DesktopApp-Clicked")
            }*/

        }   
        
        // INIT
        this.Element.classList.add("DesktopApp");
        
        return {"Clicked" : Clicked}
    }


    Initialise(Name, Type) 
    {
        // CORE
        let ClickedEvents = [
            this.FakeLoading
        ];

        let AppMeta = window.Apps[Name];

        console.log("AppName: " + Name);
        console.log(AppMeta);

        // Functions
        // MECHANICS
        function onClick() 
        {
            // Functions
            // INIT
            
            /*console.log("Clicked!");
            console.log(ClickedEvents);*/

            for (const i in ClickedEvents) 
            {
                let CallbackFunction = ClickedEvents[i];
                CallbackFunction();
            }
        }

        // INIT
        this.Name = Name;
        this.Type = Type;

        this.DisplayName = AppMeta["DisplayName"];
        this.IconURL = AppMeta["Icon"];

        this.AppIconImage.src = this.IconURL;
        this.AppNameParagraph.innerHTML = this.DisplayName;

        let TypeMeta = this.TypeToHandle[Type || "Desktop"](); // TYPE BEHAVIOUR
        ClickedEvents.push(TypeMeta["Clicked"].bind(this));

            
        this.AppBehaviour = new AppBehaviour(this);
        ClickedEvents.push(this.AppBehaviour.Clicked.bind(this.AppBehaviour));
        
        // EVENTS
        this.Element.onclick = onClick;
    }

    End() 
    {
        // Functions
        // INIT
    }

}


export default AppComponent;