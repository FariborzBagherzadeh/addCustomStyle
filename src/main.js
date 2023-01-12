var addStyle = /** @class */ (function () {
    function addStyle() {
    }
    addStyle.prototype.addCustomStyle = function (styleidentifier, selector, attributes, mediaQuerry) {
        // Select element
        var myElement = document.getElementById(styleidentifier);
        var myElementClass = document.querySelector(selector);
        // Check media query
        if (mediaQuerry) {
            var checkMediaQuerry = window.matchMedia("(".concat(mediaQuerry, ")"));
            checkMediaQuerry.addEventListener("change", function (e) {
                if (e.matches) {
                    Object.keys(attributes).forEach(function (key) {
                        // Check if given id or given class are existed
                        if (myElement) {
                            myElement.style[key] = attributes[key];
                        }
                        else if (myElementClass) {
                            myElementClass.style[key] = attributes[key];
                        }
                        else {
                            console.log("No id or class founded!");
                        }
                    });
                }
                else {
                    Object.keys(attributes).forEach(function (key) {
                        if (myElement) {
                            myElement.style[key] = "";
                        }
                        else if (myElementClass) {
                            myElementClass.style[key] = "";
                        }
                        else {
                            console.log("No id or Class founded");
                        }
                    });
                }
            });
            // No mediaQuery arg
        }
        else {
            // Check if given id or given class are existed
            if (myElement) {
                Object.keys(attributes).forEach(function (key) {
                    myElement.style[key] = attributes[key];
                });
            }
            else if (myElementClass) {
                Object.keys(attributes).forEach(function (key) {
                    myElementClass.style[key] = attributes[key];
                });
            }
            else {
                console.log("No id or class founded!");
            }
        }
    };
    return addStyle;
}());
var newStyle = new addStyle();
newStyle.addCustomStyle("test1", ".myClass", {
    "background-color": "#cccccc",
    color: "red"
}, "min-width: 300px");
