class AppHandler 
{
    constructor(App) 
    {
        // Functions
        // INIT
        this.App = App;

        console.log("SETTING UP APP HANDLER: ")
        console.log(App);
    }

    Clicked() 
    {
        // Functions
        // INIT
        console.log("CLICKED"); 
        window.print();
    }
}

export default AppHandler;