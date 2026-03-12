class AppHandler 
{
    constructor(App) 
    {
        // Functions
        // INIT
        this.App = App;

        let FileInput = document.createElement("input");
        FileInput.type = "File";
        FileInput.classList.add("FileInput");
        
        App.Element.appendChild(FileInput);
    }

    Clicked() 
    {
        // Functions
        // INIT
    }
}

export default AppHandler;