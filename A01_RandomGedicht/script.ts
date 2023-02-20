/*
Aufgabe: L01_Zufallsgedicht
Name: Daniel Kelesov
Matrikel: 268399
Datum: 20.02.2023
Quellen: -
*/


namespace Gedicht {
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Snape", "Trump", "Dumbledore"];
    let verbs: string[] = ["studiert", "hasst", "zaubert", "zerstört", "annektiert", "liebt"];
    let objects: string[] = ["Zaubertränke", "Lupin", "Hogwarts", "Dementoren", "Putin", "den Grimm"];
    //console.log(subjects);
    //console.log(verbs);
    //console.log(objects);

    function getVerse(_arr1: string[], _arr2: string[], _arr3: string[]) {
        for (let i = _arr1.length; i >= 1; i--) {
            let verse: string = "";
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
    }
    getVerse(subjects,verbs,objects);
}

