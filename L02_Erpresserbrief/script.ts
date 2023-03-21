namespace ErpresserBriefApp {
    console.log("start");
    let chosenChar: string;
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        //mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
        console.log("loaded");
        document.addEventListener("click", checkTarget);
        let selection: HTMLElement = <HTMLElement>document.querySelector("div#letterSelection");
        selection.addEventListener("click", selectCharacter);
    }

    function checkTarget(_event: MouseEvent): void{
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        let letter: HTMLSpanElement = document.createElement("span");
        if (_event.target == mail){
            placeLetter(_event);
        }
        if (_event.target == document.querySelector("span")){
            deleteLetter(_event);
        }
    }


    function placeLetter(_event: MouseEvent): void {
        console.log(_event);
        //if(_event.target != document.querySelector("div#mail")){
        //return;
        //}
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        let mail: HTMLElement = <HTMLElement>_event.target; //ermöglicht es ein weiteres Span element in ein anderes Span einzufügen
        //let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        let letter: HTMLSpanElement = document.createElement("span");
        mail.appendChild(letter);
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.textContent = chosenChar;
        letter.addEventListener("click", checkTarget);

    }
    
    function deleteLetter(_event: MouseEvent): void {
        let target: Node = <Node>_event.target;
        let parent: Node = <Node> target.parentNode
        parent.removeChild(target);
        
    }

    function chooseCharacter(_event: KeyboardEvent): void {
        console.log(_event);
        chosenChar = _event.key;
        //console.log(chosenChar);
    }

    function selectCharacter(_event: MouseEvent): void {
        //console.log(_event);
        let selectedChar: HTMLElement =<HTMLElement> _event.target;
        console.log(selectedChar);
        chosenChar = selectedChar.innerText;
        selectedChar.id = "selected";
    }


}