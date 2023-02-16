let subjects = ["Harry", "Hermine", "Ron", "Snape"];
let verbs = ["studiert", "hasst", "zaubert", "zerstört"];
let objects = ["Zaubertränke", "Lupin", "Hogwarts", "Dementoren"];
console.log(subjects);
console.log(verbs);
console.log(objects);
function getVerse(arr1, arr2, arr3) {
    for (let i = arr1.length; i >= 1; i--) {
        let verse = "";
        let nr = Math.random() * arr1.length;
        nr = Math.floor(nr);
        let word = arr1.splice(nr, 1);
        verse = word[0] + " ";
        nr = Math.floor(nr);
        word = arr2.splice(nr, 1);
        verse += word[0] + " ";
        nr = Math.floor(nr);
        word = arr3.splice(nr, 1);
        verse += word[0] + " ";
        console.log(verse);
    }
}
getVerse(subjects, verbs, objects);
//# sourceMappingURL=script.js.map