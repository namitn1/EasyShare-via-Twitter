var list = ["selection", "link", "page", "image"];

for(j=0;j<list.length;j++) {

	var context = list[j];
	var abc = "Share this " + context + " via twitter";
	chrome.contextMenus.create({
		title: abc,
		contexts: [context],
		onclick: follow,
		id : context
	});
}
function follow(data, tab) {
		//alert(data.selectionText);
		switch(data.menuItemId) {
			case "selection" : 
			chrome.windows.create({url: "https://twitter.com/intent/tweet?text=" + encodeURIComponent(data.selectionText), type: "panel" });
			break;

			case "link" : 
			chrome.windows.create({url: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(data.linkUrl), type: "panel" });
			break;

			case "page" : 
			chrome.windows.create({url: "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tab.title) + "&url=" + (data.pageUrl),type: "panel" });
			break;

			case "image" :
			chrome.windows.create({url: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(data.srcUrl), type: "panel" });
			break;
		}
		
}
