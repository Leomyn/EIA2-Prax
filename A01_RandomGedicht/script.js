/*
Aufgabe: L01_Zufallsgedicht
Name: Daniel Kelesov
Matrikel: 268399
Datum: 20.02.2023
Quellen: -
*/
var Gedicht;
(function (Gedicht) {
    let subjects = ["Harry", "Hermine", "Ron", "Snape", "Trump", "Dumbledore"];
    let verbs = ["studiert", "hasst", "zaubert", "zerstört", "annektiert", "liebt"];
    let objects = ["Zaubertränke", "Lupin", "Hogwarts", "Dementoren", "Putin", "den Grimm"];
    //console.log(subjects);
    //console.log(verbs);
    //console.log(objects);
    function getVerse(_arr1, _arr2, _arr3) {
        for (let i = _arr1.length; i >= 1; i--) {
            let verse = "";
            let nr = Math.random() * _arr1.length;
            nr = Math.floor(nr);
            let word = _arr1.splice(nr, 1);
            verse = word[0] + " ";
            nr = Math.floor(nr);
            word = _arr2.splice(nr, 1);
            verse += word[0] + " ";
            nr = Math.floor(nr);
            word = _arr3.splice(nr, 1);
            verse += word[0] + " ";
            console.log(verse);
        }
        return;
    }
    getVerse(subjects, verbs, objects);
})(Gedicht || (Gedicht = {}));
//# sourceMappingURL=script.js.map