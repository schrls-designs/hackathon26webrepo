let RedirectService = {}

// Functions
// MECHANICS
function Redirect(PageName) // OPTIONAL 
{
    // CORE
    const TargetPageName = PageName || localStorage.getItem("TargetPageName");

    // Functions
    // INIT
    window.location.href = TargetPageName + ".html";
}

// DIRECT
RedirectService.Redirect = Redirect;

export default RedirectService;