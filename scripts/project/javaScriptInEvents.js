

const scriptsInEvents = {

	async General_Event20_Act46(runtime, localVars)
	{
		const params = new URLSearchParams(window.location.search);
		let rawName = params.get("name");
		if (rawName) {
		    try {
		        rawName = decodeURIComponent(rawName);
		    } catch (e) {
		        // fallback if decodeURIComponent fails
		        console.warn("Could not decode name, using raw value instead.");
		    }
		    runtime.globalVars.name = rawName;
		}
		
	},

	async Loading_sheet_Event1_Act7(runtime, localVars)
	{
		GameAnalytics && GameAnalytics("configureUserId", runtime.globalVars.ID);
		GameAnalytics && GameAnalytics("setExternalUserId", runtime.globalVars.ID);
		
	},

	async Base_sheet_Event364(runtime, localVars)
	{
		runtime.globalVars.NowISO = new Date().toISOString();
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
