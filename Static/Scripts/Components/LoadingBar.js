// Modules
import CoreComponentModule from "../Core.js";
import UtilitiesService from "../Services/Utilities.js";


// CORE
const LoadingMeta = {
    "Standard": {
        "Duration": 1, // 3 Seconds to 99%
        "Target": 0.99 // Percentage to fake to
    },
    "Fake": {
        "Duration": 1, // 10 Seconds to get to 100%
        "Target": 1 // Percentage to die waiting for
    }
}


// CLASS
class LoadingBarComponent
{
    constructor(DOMElement) 
    {
        this.Element = DOMElement;

        this.State = "Standard";
        this.StateStartTime = 0;

        this.CurrentLoadPercentage = 0;
        this.LoadPercentageAtState = 0;

        this.BlackScreenDiv = DOMElement.querySelector("#BlackScreen");
        this.LoadingBarBackingDiv = this.BlackScreenDiv.querySelector("#LoadingBacking");
        this.LoadingBarDiv = this.LoadingBarBackingDiv.querySelector("#LoadingBar");
        this.LoadingTextHeader = this.BlackScreenDiv.querySelector("#LoadingText");
    }

    RenderLoading(DeltaTime, AccumulatedTime) 
    {

        // CORE
        const TimeSpan = AccumulatedTime - this.StateStartTime;

        const StateMeta = LoadingMeta[this.State];
        const TargetDuration = StateMeta["Duration"];

        const TargetPercentageToDisplay = StateMeta["Target"];

        const DurationPercentage = UtilitiesService.Clamp(TimeSpan / TargetDuration, 0, 1); 

        this.CurrentLoadPercentage = UtilitiesService.Lerp(this.LoadPercentageAtState, TargetPercentageToDisplay, DurationPercentage);

        // Functions
        // INIT

        const MappedPercentage = UtilitiesService.Round(this.CurrentLoadPercentage * 100, 2);

        this.LoadingBarDiv.style.width = MappedPercentage + "%";
        this.LoadingTextHeader.innerHTML = MappedPercentage +  "%";

        if (DurationPercentage == 1)    
        {
            this.ChangeState();
            this.StateStartTime = AccumulatedTime;
            this.LoadPercentageAtState = this.CurrentLoadPercentage;
        }

    }


    ChangeState() 
    {
        // Functions
        // INIT
        if (this.State == "Standard") 
        {
            this.State = "Fake";
        }
        else if (this.State == "Fake") 
        {
            CoreComponentModule.RemoveHTMLComponent(this);
        }
    }


    Initialise() 
    {
        // Functions
        // INIT
        CoreComponentModule.BindRuntimeMethod(this.Element, this.RenderLoading.bind(this));
    }

    End() 
    {
        // Functions
        // INIT
        CoreComponentModule.UnbindRuntimeMethod(this.Element);
        return CoreComponentModule.LoadingBarFinished();
    }

}

export default LoadingBarComponent;