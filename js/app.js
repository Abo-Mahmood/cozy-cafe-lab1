const mainElementTitle = document.getElementById('main-title');
mainElementTitle.textContent = 'Welcome to the Cozy Cafe';
console.log(mainElementTitle);
mainElementTitle.style.textAlign = 'center';
const bodyElement = document.querySelector('body');

bodyElement.style.backgroundColor = 'lightsteelblue';
console.dir(bodyElement);
const paragraphElement = document.querySelector('p');
paragraphElement.textContent ='Life happens, coffee helps';
const highlightElements = document.getElementsByClassName('highlight-title');


for (let i = 0; i < highlightElements.length; i++) {
    highlightElements.fontStyle = "italic";
};
// highlightElements.forEach((highlightElement)=>{
// highlightElement.style.fontstyle = 'italic'});
console.log(highlightElements);
// highlightElements.forEach((highlightElement)=>{
//     highlightElement.style.fontSize ='30px'
// })
const liElement = document.createElement('li');
liElement.textContent = "Rose Cake";
// console.log(liElement);
const ulElement = document.getElementById ("cafe-specialties");
console.log(ulElement);
ulElement.appendChild(liElement);

 const div1Element = document.createElement('div');
// const divElement = document.getElementsByClassName ('blog-post');
//console.log(divElement);
const parElement = document.createElement('p')
const h3Element = document.createElement('h3');
h3Element.textContent ='Karak Tea Tasting Event';
parElement.textContent ='Try our Tea and you will feel at the see';

div1Element.appendChild(h3Element);
div1Element.appendChild(parElement);
//section.appendChild(div1Element);
div1Element.classList.add('blog-post');
const sectionElement = document.getElementById('blogs');
sectionElement.appendChild(div1Element);
parElement.before(h3Element);


const divElement = document.getElementsByClassName ('blog-post');
console.log(divElement);

























