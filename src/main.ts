class addStyle {
  addCustomStyle(
    styleidentifier: string,
    selector: string,
    attributes: any,
    mediaQuerry?: string
  ): void {
    // Select element
    const myElement: HTMLElement | null =
      document.getElementById(styleidentifier);
    const myElementClass: HTMLElement | null = document.querySelector(selector);
    // Check media query
    if (mediaQuerry) {
      let checkMediaQuerry = window.matchMedia(`(${mediaQuerry})`);
      checkMediaQuerry.addEventListener("change", (e) => {
        if (e.matches) {
          Object.keys(attributes).forEach((key: any) => {
            // Check if given id or given class are existed
            if (myElement) {
              myElement!.style[key] = attributes[key];
            } else if (myElementClass) {
              myElementClass!.style[key] = attributes[key];
            } else {
              console.log("No id or class founded!");
            }
          });
        } else {
          Object.keys(attributes).forEach((key: any) => {
            if (myElement) {
              myElement!.style[key] = "";
            } else if (myElementClass) {
              myElementClass!.style[key] = "";
            } else {
              console.log("No id or Class founded");
            }
          });
        }
      });
      // No mediaQuery arg
    } else {
      // Check if given id or given class are existed
      if (myElement) {
        Object.keys(attributes).forEach((key: any) => {
          myElement!.style[key] = attributes[key];
        });
      } else if (myElementClass) {
        Object.keys(attributes).forEach((key: any) => {
          myElementClass!.style[key] = attributes[key];
        });
      } else {
        console.log("No id or class founded!");
      }
    }
  }
}

const newStyle = new addStyle();
newStyle.addCustomStyle(
  "test1",
  ".myClass",
  {
    "background-color": "#cccccc",
    color: "red",
  },
  "min-width: 300px"
);
