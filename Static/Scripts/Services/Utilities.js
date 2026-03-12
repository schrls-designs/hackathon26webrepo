let UtilitiesService = {}

// Functions
// Direct
UtilitiesService.Lerp = function(StartValue, EndValue, Alpha) 
{
    // Functions
    // INIT
    return StartValue + (EndValue - StartValue) * Alpha;

}

UtilitiesService.Clamp = function(Value, Min, Max) 
{
    // Functions
    // INIT
    return Math.min(Math.max(Value, Min), Max);
}

UtilitiesService.Time = function() 
{
    // Functions
    // INIT
    return performance.now() / 1000;
}

UtilitiesService.Round = function(Value, Decimals) 
{
    // Functions
    // INIT
    return Math.round(Value * Math.pow(10, Decimals)) / Math.pow(10, Decimals);
}

export default UtilitiesService;