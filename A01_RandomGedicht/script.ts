let subjects: string[] = ["Harry","Hermine","Ron","Snape","Trump","Dumbledore"];
let verbs: string[] = ["studiert","hasst","zaubert","zerstört","annektiert","liebt"];
let objects: string[] = ["Zaubertränke","Lupin","Hogwarts","Dementoren","Putin","den Grimm"];
console.log(subjects);
console.log(verbs);
console.log(objects);

function getVerse(arr1:string[],arr2:string[],arr3:string[]){
    for(let i = arr1.length; i >= 1; i--){
        let verse:string = "";
        let nr = Math.random()*arr1.length;
        nr = Math.floor(nr);
        let word = arr1.splice(nr,1);
        verse = word[0] + " ";
        nr = Math.floor(nr);
        word = arr2.splice(nr,1);
        verse += word[0] + " ";
        nr = Math.floor(nr);
        word = arr3.splice(nr,1);
        verse += word[0] + " ";
        console.log(verse);
    }
}
getVerse(subjects,verbs,objects);