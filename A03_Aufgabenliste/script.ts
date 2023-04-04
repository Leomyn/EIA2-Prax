namespace Aufgabenliste{
    console.log("start");
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event){
        console.log("loaded");
        let sendBtn:HTMLElement = <HTMLElement> document.querySelector("#sendBtn");
        sendBtn.addEventListener("click",sendTask);
        let commentBtn:HTMLElement = <HTMLElement> document.querySelector("#commentBtn");
        commentBtn.addEventListener("click",commentTask);
        let progressBtn:HTMLElement = <HTMLElement> document.querySelector("#progressBtn");
        progressBtn.addEventListener("click",progressTask);
        let deleteBtn:HTMLElement = <HTMLElement> document.querySelector("#deleteBtn");
        deleteBtn.addEventListener("click",deleteTask);
    }



    function sendTask(_event: Event): void{
        console.log("task sent");
    }

    function commentTask(_event: Event): void{
        console.log("task commented");
    }

    function progressTask(_event: Event): void{
        console.log("Set Task to in Progress");
    }
    
    function deleteTask(_event: Event): void{
        console.log("task done");
    }

}