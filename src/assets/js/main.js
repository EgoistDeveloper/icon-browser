var root = null,
    iconSource = null,
    icons = [],
    currentPalette = null,
    clickAndCopyStatus = true;

function printIconsListTemplate(){
    root.innerHTML = `<div class="row m-2 my-3">
        <div class="container-fluid">
            <div class="page-header">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a id="goto-root" href="#">
                                Icon Palettes
                            </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page" data-palette-title="selector">
                            #?
                        </li>
                    </ol>
                </nav>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header pb-0">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-12">
                                    <h3 class="page-title" data-palette-title="selector">
                                        #?
                                    </h3>
                                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12">
                                    <div class="input-group mb-3">
                                        <input type="search" class="form-control form-control-lg"
                                            placeholder="Press enter for search icon class"
                                            aria-describedby="basic-addon1">
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon1">
                                                <button class="btn p-0">
                                                <!-- maginfier emoji icon -->
                                                &#x1F50E;
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="row">
                                <div class="container-fluid mb-3 px-1">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="click-and-copy" 
                                            ${clickAndCopyStatus ? 'checked' : ''}>
                                        <label class="custom-control-label" for="click-and-copy">
                                            Use click and copy
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row icons-list">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

function printPaletteListTemplate(){
    root.innerHTML = `<div class="row m-2 my-3">
        <div class="container-fluid">
            <div class="page-header">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">
                                Icon Palettes
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div id="icon-palettes" class="row"></div>
        </div>
    </div>`;
}

function iconsInit(){
    // clear previous events
    removeClickAndCopy();

    printIconsListTemplate();

    // get icons as html
    const iconsHtml = icons.map((icon) => { return currentPalette.printIcon(icon); }).join('');

    // root element for icon listing
    var iconsList = document.querySelector('.icons-list');

    // set icons html
    iconsList.innerHTML = iconsHtml;

    //#region Search

    // search input
    const search = document.querySelector('input[type="search"]');
    
    // search input event
    search.addEventListener('keydown', function(e){
        if(e.keyCode == 13) {
            const value = e.target.value;

            if (value && value.length){
                const filteredIcons = filterWith(icons, value, currentPalette.printIcon);

                if (filteredIcons){
                    iconsList.innerHTML = filteredIcons;
                }
            } else {
                iconsList.innerHTML = iconsHtml;
            }
        }
    });

    //#endregion

    //#region Click & Copy

    // click and copy checkbox
    const clickAndCopy = document.getElementById('click-and-copy');

    if (clickAndCopy.checked){
        setClickAndCopy('#icon-holder');
    }

    // click and copy checkbox change event
    clickAndCopy.addEventListener('change', (e) => {
        if (e.target.checked && !clickAndCopyStatus) {
            clickAndCopyStatus = true;

            setClickAndCopy('#icon-holder');
        } else {
            clickAndCopyStatus = false;

            removeClickAndCopy();
        }
    });

    //#endregion

    //#region Set Current Titles

    var titles = document.querySelectorAll('[data-palette-title]');

    titles.forEach(function(item){
        item.textContent = currentPalette.title;
    });

    document.querySelector('.card-subtitle').textContent = currentPalette.description;

    //#endregion

    //#region Go to Root

    document.getElementById('goto-root').addEventListener('click', function(e){
        e.preventDefault();

        iconSource.href = '';
        currentPalette = null;
        icons = [];

        removeClickAndCopy();

        palettesInit();
    });

    //#endregion

    Toastify({
        text: `"${icons.length}" icons loaded.`,
        duration: toastDuration
    }).showToast();

    if (currentPalette.messages.length){
        currentPalette.messages.forEach(function(message){
            Toastify({
                text: message,
                duration: longDuration,
                backgroundColor: toastBgColors.error
            }).showToast();
        });
    }
}

function gotoIcons(index){
    currentPalette = iconPalettes[index];

    if (currentPalette){
        iconSource.href = `assets/node_modules/${currentPalette.css_path}`;

        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', function(){
            icons = JSON.parse(this.responseText);

            if (currentPalette.js_path){
                injectScript(`assets/node_modules/${currentPalette.js_path}`)
                .then(() => {
                    iconsInit();

                    localStorage.setItem('current_page', index);
                }).catch(error => {
                    Toastify({
                        text: `Palette not found`,
                        duration: toastDuration,
                        backgroundColor: toastBgColors.error
                    }).showToast();
                });
            } else {
                iconsInit();

                localStorage.setItem('current_page', index);
            }
        });
        oReq.open('GET', `assets/data/${currentPalette.icons_file}`);
        oReq.send();
    } else {
        Toastify({
            text: `Palette not found`,
            duration: toastDuration,
            backgroundColor: toastBgColors.error
        }).showToast();
    }
}

function palettesInit(){
    // clear current page
    localStorage.removeItem('current_page');

    printPaletteListTemplate();

    var _iconPalettes = document.querySelector('#icon-palettes');

    _iconPalettes.innerHTML = iconPalettes.map((palette, i) => {
        let index = palette.title.length % 10;

        return `<div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div id="browse-icons" data-index="${i}">
                        <a href="#" class="text-dark">
                            <h5 class="card-title">
                                ${palette.title}
                            </h5>
                        </a>

                        <div class="card-text m-0">
                            <p class="mb-4 text-muted" title="${palette.description}">
                                ${palette.description.length >= 55 ? palette.description.substring(0, 55) + '...' : palette.description}
                            </p>
                        </div>
                    </div>

                    <div class="npm npm-i" data-clipboard-text="npm i ${palette.npm}" title="click for copy">
                        > npm i ${palette.npm}
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');

    // set copy npm
    setClickAndCopy('.npm');

    //#region Browse icons event

    document.querySelectorAll('#browse-icons').forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault();

            gotoIcons(parseInt(item.getAttribute('data-index')));
        })
    });

    //#endregion

}

(function() {
    root = document.getElementById('root');
    iconSource = document.getElementById('icon-source');

    const currentPage = localStorage.getItem('current_page');

    if (currentPage){
        gotoIcons(currentPage);
    } else {
        palettesInit();
    }
})();