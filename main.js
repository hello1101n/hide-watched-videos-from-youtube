
/* TODO check is it the best way to run script and work with DOM in chrome extension*/
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    function hideWatchedVideos() {
        const allVideos = Array.from(document.querySelectorAll('ytd-playlist-video-renderer'))

        allVideos.forEach(video => {
            const progressBar = video.querySelector('#progress')
            /* TODO add threshold */
            if (progressBar && progressBar.style.width === '100%') {
                video.hidden = true
            }
        })
    }

    /* TODO run only in youtube */
    /* TODO run with set interval or after new videos in the page*/
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: hideWatchedVideos,
    });
});
/* TODO check permissions in manifest */
/* TODO */

