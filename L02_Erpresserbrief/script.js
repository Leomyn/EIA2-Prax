var ErpresserBriefApp;
(function (ErpresserBriefApp) {
    console.log("start");
    let chosenChar;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail");
        //mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
        console.log("loaded");
        document.addEventListener("click", checkTarget);
        let selection = document.querySelector("div#letterSelection");
        selection.addEventListener("click", selectCharacter);
    }
    function checkTarget(_event) {
        let mail = document.querySelector("div#mail");
        let letter = document.createElement("span");
        if (_event.target == mail) {
            placeLetter(_event);
        }
        if (_event.target == document.querySelector("span")) {
            deleteLetter(_event);
        }
    }
    function placeLetter(_event) {
        console.log(_event);
        //if(_event.target != document.querySelector("div#mail")){
        //return;
        //}
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target; //ermöglicht es ein weiteres Span element in ein anderes Span einzufügen
        //let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        let letter = document.createElement("span");
        mail.appendChild(letter);
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.textContent = chosenChar;
        letter.addEventListener("click", checkTarget);
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
    }
    function chooseCharacter(_event) {
        console.log(_event);
        chosenChar = _event.key;
        //console.log(chosenChar);
    }
    function selectCharacter(_event) {
        //console.log(_event);
        let selectedChar = _event.target;
        console.log(selectedChar);
        chosenChar = selectedChar.innerText;
        selectedChar.id = "selected";
    }
})(ErpresserBriefApp || (ErpresserBriefApp = {}));
//# sourceMappingURL=script.js.map