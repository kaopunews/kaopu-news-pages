// turn timestamp into descriptive expression
const ONE_MINUTE_IN_SECONDS = 60;
const ONE_HOUR_IN_SECONDS = 3600;
const ONE_DAY_IN_SECONDS = 86400;


function convertTS(ts) {
    const UTCNow = Date.now() / 1000; // turn milliseconds into seconds
    const timeDiff = UTCNow - ts;
    if (timeDiff / ONE_HOUR_IN_SECONDS < 1) return `${Math.round(timeDiff / ONE_MINUTE_IN_SECONDS)}分钟前`;
    if (timeDiff / ONE_DAY_IN_SECONDS < 1) return  `${Math.round(timeDiff / ONE_HOUR_IN_SECONDS)}小时前`;
    return  `${Math.round(timeDiff / ONE_DAY_IN_SECONDS)}天前`;
}

/* start of filter functionality, ref https://www.w3schools.com/howto/howto_js_filter_elements.asp */

function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("g-thing");
    if (c === "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.getElementsByClassName("control");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* end of filter functionality */