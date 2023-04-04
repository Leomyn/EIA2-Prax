var EventInspector;
(function (EventInspector) {
    console.log("start");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        let body = document.querySelector("body");
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        let div0 = document.getElementById("div0");
        let div1 = document.getElementById("div1");
        div0.addEventListener("mousemove", setInfoBox);
        div1.addEventListener("mousemove", setInfoBox);
        let button = document.createElement("button");
        button.textContent = "Click me";
        div0.appendChild(button);
    }
    function setInfoBox(_event) {
        //console.log(_event);
        let span = document.getElementById("infoBox");
        let x = _event.clientX;
        let y = _event.clientY;
        let target = _event.target;
        span.style.left = x + 10 + "px";
        span.style.top = y + 20 + "px";
        span.textContent = "x =" + x + " " + "y =" + y + target;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=script.js.map