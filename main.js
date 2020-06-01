const name = "Mariusz";
const age = 100;
console.log(name);
console.log(age);

console.log(
    `Czołgiem, nazywam się ${name} i mam ${age} lat.`
    );

const heading = document.querySelector(' .resume__header--js ');
console.log(heading.innerHTML);
heading.innerHTML = `joł joł joł`;
console.log(heading.innerHTML);

const emptyParagraph = document.querySelector('.resume__paragraph--js')
emptyParagraph.innerHTML = 'Javascript jest super. Uzupełniam nim treść '