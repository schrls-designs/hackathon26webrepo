// Modules
import CoreComponentModule from "../Core.js";
import UtilitiesService from "../Services/Utilities.js";


// CORE
const ErrorAudio = new Audio("/Static/Audio/Error.mp3");

// CLASS
class FormComponent
{
    constructor(DOMElement) 
    {
        this.Element = DOMElement;

        this.FormHeader = DOMElement.querySelector("#FormHeader");
        this.FormContentTitle = DOMElement.querySelector("#FormContentTitle");
        this.FormContentBody = DOMElement.querySelector("#FormContentBody");
        this.FormMainButton = DOMElement.querySelector("#FormMainButton");
    }

    Initialise(Header, Title, Body) 
    {
        // Functions
        // MECHANICS

        // DIRECT
        this.FormMainButton.onclick = function() {
            return CoreComponentModule.RemoveHTMLComponent(this);
        }.bind(this);

        // INIT
        this.FormHeader.innerHTML = Header || "";
        this.FormContentTitle.innerHTML = Title || "";
        this.FormContentBody.innerHTML = Body || "";
        
        const x = (Math.random() * window.innerWidth);
        const y = (Math.random() * window.innerHeight);

        this.Element.style.position = "fixed";
        this.Element.style.zIndex = "10";
        this.Element.style.top = y + "px";
        this.Element.style.left = x + "px";

        ErrorAudio.play();
    }

    End() 
    {
        // Functions
        // INIT
    }

}

export default FormComponent;