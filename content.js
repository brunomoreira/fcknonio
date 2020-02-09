function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

window.onload = function() {

    let regexes = [
        /layer_gatting?=*/i,
        /imp-content-gate-root?=*/i,
        /wrapperContentGatingNonio?=*/i
    ]

    let classes = [
        "tp-modal", 
        "tp-backdrop tp-active",
        "nonioBox",
        "pop-out-lightbox",
        "warning-nonio-overlay"
    ]

    let divs = document.getElementsByTagName('div')

    for(let div of divs) {

        regexes.forEach(function(regex) {

            if(
                regex.test(div.id)
            ) {
                div.remove()
            }
        
        })
        
        classes.forEach(function(item) {

            if(hasClass(div, item)) {
                div.remove()
            }

        })
    }


}
