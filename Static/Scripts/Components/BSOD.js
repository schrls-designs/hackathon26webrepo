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
    }

    Refresh() 
    {
        // Functions
        // INIT
        return location.reload();
    }

    HandleRefresh() 
    {
        // Functions
        // INIT    
        setTimeout(this.Refresh, window.Core["BSODRefreshTimer"] * 1000);
    }

    Initialise() 
    {
        // Functions
        // INIT
        this.HandleRefresh();
    }

    End() 
    {
        // Functions
        // INIT
    }

}

export default BSODComponent;