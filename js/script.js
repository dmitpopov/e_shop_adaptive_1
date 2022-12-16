
// Function opening and closing catalogue onclick

function operateCatalogueByClick () {
    let catProps = getItemProps('.main-header__cat-open');
    operateCatalogueDisplayProps(catProps);
}

// Function getting element's props

function getItemProps (arg) {
    return  document.querySelector(arg);
}

// Function operating display property of element

function operateCatalogueDisplayProps (arg) {
    getComputedStyle(arg).display === 'none' ? arg.style.display = 'block' : arg.style.display = 'none';
}

// Function checking img of catalogue menu-open button

function operateImgCatButton (arg) {

}


