// Modules
import CoreComponentModule from "../Core.js";
import UtilitiesService from "../Services/Utilities.js";


// CORE
const ErrorAudio = new Audio("/Static/Audio/Error.mp3");

// CLASS
class ErrorFormComponent
{
    constructor(DOMElement) 
    {
        this.Element = DOMElement;
    }

    Initialise() 
    {
        // Functions
        //

        const x = ((Math.random() * window.innerWidth) / 2) - (window.innerWidth / 4);
        const y = ((Math.random() * window.innerHeight) / 2) - (window.innerHeight / 4);

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

export default ErrorFormComponent;