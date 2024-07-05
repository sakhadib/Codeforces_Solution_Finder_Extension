chrome.action.onClicked.addListener((tab)=>{
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if(tabs.length > 0){
            let url = tabs[0].url;
            let parts = url.split('/');
            let contest = parts[parts.length - 2];
            let problem = parts[parts.length - 1];

            let newurl = `https://codeforces.com/contest/${contest}/status/${problem}`;

            chrome.tabs.create({url: newurl});
        }
    });
});

