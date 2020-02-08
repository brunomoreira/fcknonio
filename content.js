window.onload = function() {

    let regex = /layer_gatting?=*/i
    let divs = document.getElementsByTagName('div')

    for(let div of divs) {

        if(regex.test(div.id)) {
            div.remove()
        }
   
    }

}
