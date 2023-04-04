var Aufgabenliste;
(function (Aufgabenliste) {
    console.log("start");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("loaded");
        let sendBtn = document.querySelector("#sendBtn");
        sendBtn.addEventListener("click", sendTask);
        let commentBtn = document.querySelector("#commentBtn");
        commentBtn.addEventListener("click", commentTask);
        let progressBtn = document.querySelector("#progressBtn");
        progressBtn.addEventListener("click", progressTask);
        let deleteBtn = document.querySelector("#deleteBtn");
        deleteBtn.addEventListener("click", deleteTask);
    }
    function sendTask(_event) {
        console.log("task sent");
    }
    function commentTask(_event) {
        console.log("task commented");
    }
    function progressTask(_event) {
        console.log("Set Task to in Progress");
    }
    function deleteTask(_event) {
        console.log("task done");
    }
})(Aufgabenliste || (Aufgabenliste = {}));
//# sourceMappingURL=script.js.map