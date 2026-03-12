import UtilitiesService from "../Services/Utilities.js";

class AppHandler 
{
    constructor(App) 
    {
        // Functions
        // INIT
        console.log("INITIALISING FULL SCREEN!!");

        this.App = App;
    }

    Clicked() 
    {
        // Functions
        // INIT
        UtilitiesService.RequestFullScreen();
    }
}

export default AppHandler;