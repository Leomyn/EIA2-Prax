namespace EventInspector{

    console.log("start");
    window.addEventListener("load",handleLoad);

    function handleLoad(_event: Event): void{
        document.addEventListener("mousemove",setInfoBox);
        document.addEventListener("click",logInfo);
        document.addEventListener("keyup",logInfo);
        let body: HTMLBodyElement = <HTMLBodyElement> document.querySelector("body");
        body.addEventListener("click",logInfo);
        body.addEventListener("keyup",logInfo);
        let div0: HTMLElement = <HTMLElement> document.getElementById("div0");
        let div1: HTMLElement = <HTMLElement> document.getElementById("div1");
        div0.addEventListener("mousemove",setInfoBox);
        div1.addEventListener("mousemove",setInfoBox);
        let button: HTMLButtonElement = document.createElement("button");
        button.textContent = "Click me";
        div0.appendChild(button);
    }

    function setInfoBox(_event: MouseEvent): void{
        //console.log(_event);
        let span: HTMLElement = <HTMLElement> document.getElementById("infoBox");
        let x:number = _event.clientX;
        let y:number = _event.clientY;
        let target: EventTarget = _event.target;
        span.style.left = x + 10+ "px";
        span.style.top = y + 20+ "px";
        span.textContent = "x =" + x + " " + "y =" + y + target;
    }

    function logInfo(_event: Event): void{
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }



}