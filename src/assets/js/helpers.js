const toastBgColors = {
    success: "linear-gradient(to right, #00b09b, #96c93d)",
    error: "linear-gradient(to right, #ff5f6d, #ffc371)"
};

const toastDuration = 3000;
const longDuration = 10000;

//#region Filter

var previousSearch = null;

function filterWith(icons, search, replaceCallback){
    if (previousSearch == search){
        return;
    }

    if (Array.isArray(icons) && icons.length){
        let _icons = icons.filter((icon) => {
            if (icon.indexOf(search) > -1){
                return icon;
            }
        });

        if (_icons && _icons.length){
            Toastify({
                text: `${_icons.length} icons found.`,
                duration: toastDuration,
                backgroundColor: toastBgColors.success
            }).showToast();

            previousSearch = search;
            
            return _icons.map((icon) => replaceCallback(icon)).join('');
        }
    }

    Toastify({
        text: `Icon not found`,
        duration: toastDuration,
        backgroundColor: toastBgColors.error
    }).showToast();
}

//#endregion

//#region Clipboard

var clipboard = null;

function setClickAndCopy(selector) {
    clipboard = new ClipboardJS(selector);

    clipboard.on('success', function(e) {
        Toastify({
            text: `"${e.text}" copied to clipboard`,
            duration: toastDuration
        }).showToast();
    });
    
    clipboard.on('error', function(e) {
        Toastify({
            text: `Failed action: ${e.action}`,
            duration: toastDuration,
            backgroundColor: toastBgColors.error
        }).showToast();
    });
}

function removeClickAndCopy(){
    if (clipboard != null){
        clipboard.destroy();

        clipboard = null;
    }
}

//#endregion

// inject script
function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}
