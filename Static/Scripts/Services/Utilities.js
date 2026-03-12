let UtilitiesService = {}

// Functions
// Direct
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

export default UtilitiesService;