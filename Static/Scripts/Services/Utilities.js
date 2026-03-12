let UtilitiesService = {}

// CORE
let MouseX = 0;
let MouseY = 0;

// Functions
// MECHANICS
function Setup() 
{
    // Functions
    // DIRECT
    document.addEventListener('mousemove', (Event) => {
        MouseX = Event.clientX;
        MouseY = Event.clientY;
    });
}

// Direct
UtilitiesService.MousePosition = function()
{
    // Functions
    // INIT
    return  {
        "X" : MouseX,
        "Y" : MouseY
    }
}

UtilitiesService.Lerp = function(StartValue, EndValue, Alpha) // Linear Interpolation
{
    // Functions
    // INIT
    return StartValue + (EndValue - StartValue) * Alpha;

}

UtilitiesService.Clamp = function(Value, Min, Max) // Double clamped number -> Doesn't exceed bounds
{
    // Functions
    // INIT
    return Math.min(Math.max(Value, Min), Max);
}

UtilitiesService.Time = function() // Get "Tick" in seconds
{
    // Functions
    // INIT
    return performance.now() / 1000;
}

UtilitiesService.Round = function(Value, Decimals) // Round Number to Decimal Place
{
    // Functions
    // INIT
    return Math.round(Value * Math.pow(10, Decimals)) / Math.pow(10, Decimals);
}

Setup();

export default UtilitiesService;