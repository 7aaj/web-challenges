// creating header section with his children
let headerElement = document.createElement("header");
let divElement = document.createElement("div");
let navBarElement = document.createElement("nav");
let ulElement = document.createElement("ul");
// loop for creating li and append them
for (i = 1; i <= 4; i++) {
    let listElements = document.createElement("li");
    ulElement.append(listElements);
};

// adding the children

headerElement.appendChild(divElement);
headerElement.appendChild(navBarElement);
navBarElement.appendChild(ulElement);

// create logo and links to the header children
let logoText = document.createTextNode("elzero")
let liLinks1 = document.createTextNode("home")
let liLinks2 = document.createTextNode("about")
let liLinks3 = document.createTextNode("service")
let liLinks4 = document.createTextNode("contact")

// adding logo and links text to the header children
divElement.appendChild(logoText)
ulElement.firstChild.appendChild(liLinks1)
ulElement.children[1].appendChild(liLinks2)
ulElement.children[2].appendChild(liLinks3)
ulElement.lastChild.appendChild(liLinks4)

// the global style
document.body.style.cssText = "font-family: Arial, Helvetica, sans-serif; text-transform:capitalize;"
// this is the media query i learned from internet
window.onload = function () {
    let media = window.matchMedia(`(max-width: 600px)`)
    if (media.matches) {
        headerElement.style.cssText = "justify-content:center;text-align:center;"
    }
}

// styling the header
headerElement.style.cssText = ` display:flex;
                                flex-wrap:wrap;
                                justify-content:space-between;
                                align-items:center;
                                padding:10px `

divElement.style.cssText = `    font-weight:bold;
                                font-size:20px;
                                color:#23a96e `

ulElement.style.cssText = `     display:flex;
                                justify-content:center;
                                list-style:none `
// loop for style the li links
for (i = 0; i < ulElement.children.length; i++) {
    ulElement.children[i].style.cssText = "margin-right:15px ; color:#777;cursor:pointer "
}


document.body.prepend(headerElement)
// end header

// start main

// creating main element
let mainElement = document.createElement("main");

// adding the main element childrens in a loop
// adding class name for them in a loop
// adding content for them in a loop
// styling them on loop
for (i = 1; i <= 15; i++) {
    let boxDivElement = document.createElement("div")
    mainElement.append(boxDivElement)
    boxDivElement.style.cssText = ` display:grid;
                                    place-items:center;
                                    background-color:white;
                                    padding:50px;
                                    border-radius:8px;
                                    box-shadow:#0000002b -1px 2px 10px 0px;`

    let spanElement = document.createElement("span")
    boxDivElement.append(spanElement)
    let spanContent = document.createTextNode(`${i}`)
    spanElement.append(spanContent)
    spanElement.style.cssText = `font-size:30px;`

    let pElement = document.createElement("p")
    spanElement.after(pElement)
    pElement.style.cssText = `  margin:0;
                                font-size:14px;
                                color: #777 `
    let pContent = document.createTextNode(`product`)
    pElement.append(pContent)
}

// styling the main Elements

mainElement.style.cssText = `   display:grid;
                                grid-template-columns: repeat(auto-fill, minmax(300px , 1fr));
                                gap:50px;
                                background-color:#ececec;
                                padding:20px `
headerElement.after(mainElement)
// end main

// start footer
let footer = document.createElement("footer")
let footerP = document.createElement("p")
footerP = document.createTextNode(`copyright 2021`)
footer.append(footerP)
footer.style.cssText = `display:grid;
                        place-items:center;
                        background-color:#23a96e;
                        text-align:center;
                        height:100px;
                        font-size:25px;
                        color:white;`

mainElement.after(footer)
// end footer