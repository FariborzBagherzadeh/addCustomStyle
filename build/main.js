"use strict";
class addStyle {
    addCustomStyle(styleidentifier, selector, attributes, mediaQuerry) {
        // Select element
        const myElement = document.getElementById(styleidentifier);
        // Check media query
        if (mediaQuerry) {
            // const removeQuote = mediaQuerry.slice(1, mediaQuerry.length - 1);
            let check = window.matchMedia(`"(${mediaQuerry})"`);
            this.checkMedia(check);
            check.addListener(this.checkMedia);
            check.addEventListener("change", (e) => {
                console.log(check);
                if (check.matches) {
                    console.log("asdwasdw");
                    if (myElement) {
                        console.log("yessss");
                        Object.keys(attributes).forEach((key) => {
                            myElement.style[key] = attributes[key];
                        });
                    }
                }
            });
        }
        else {
            console.log("Nooooo");
            if (myElement) {
                Object.keys(attributes).forEach((key) => {
                    myElement.style[key] = attributes[key];
                });
            }
        }
    }
    checkMedia(media) {
        console.log("salaaaammm", media);
    }
}
const newStyle = new addStyle();
newStyle.addCustomStyle("test1", "myClass", {
    "background-color": "#cccccc",
    color: "red",
}, "max-width: 700px");
