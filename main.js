console.log("Hello, World!");

let h1_arr = document.getElementsByTagName("h1")
console.log(h1_arr["Lab12 Assignment"]);

let h1 = h1_arr[0] 
h1.innerHTML = "Lab12 Assignment"
h1.style.color = "blue"

let hr = document.createElement("hr")

let h2 = document.createElement("h2")
h2.innerText = "Task"
h2.style.color = "red"

let p = document.createElement("p")
p.innerText = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"

let ul1 = document.createElement("ul")

let li1 = document.createElement("li")
li1.innerText = "find elements in the DOM (<b>5 points</b>);"
li1.style.color = "green"

let li2 = document.createElement("li")
li2.innerText = "create/add/remove elements (<b>5 points</b>);"
li2.style.color = "purple"

let li3 = document.createElement("li")
li3.innerText = "change content of the elements (<b>5 points</b>);"
li3.style.color = "green"

let li4 = document.createElement("li")
li4.innerText = "change styles of the elements (<b>5 points</b>);"
li4.style.color = "purple"

let li5 = document.createElement("li")
li5.innerText = "change attributes of the elements (<b>5 points</b>);"
li5.style.color = "green"

let li6 = document.createElement("li")
li6.innerText = "change classes of the elements (<b>5 points</b>)."
li6.style.color = "purple"

let p2 = document.createElement("p")
let a1 = document.createElement("a")
p2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
p2.style.display= "inline"
a1.innerText = "link."
a1.href= "https://github.com/yessen/nu_web_programming/tree/main/week12"




let hr2 = document.createElement("hr")

let h3 = document.createElement("h2")
h3.innerText = "Submission"
h3.style.color = "red"

let p3 = document.createElement("p")
p3.innerText = "To submit your work, follow these instructions:"

let ul2 = document.createElement("ul")

let li7 = document.createElement("li")
li7.innerText = "Create a new repository on Github, named <b>lab12 (1 point)</b>."
li7.style.color = "green"

let li8 = document.createElement("li")
li8.innerText = "Clone this repository to your local machine and work inside it."
li8.style.color = "purple"

let li9 = document.createElement("li")
li9.innerText = "Create a new HTML file, called <b>index.html</b>, which has only one <h1> tag with 'Hello, World!' message (<b>1 point</b>)."
li9.style.color = "green"

let li10 = document.createElement("li")
li10.innerText = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
li10.style.color = "purple"

let li11 = document.createElement("li")
li11.innerText = "Link this <b>main.js</b> file to your <b>index.html file (Note: place your script at the end of the <b>body</b> section)."
li11.style.color = "green"

let li12 = document.createElement("li")
li12.innerText = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
li12.style.color = "purple"

let li13 = document.createElement("li")
li13.innerText = "After you finish your work, submit it to the Github (<b>2 points</b>)."
li13.style.color = "green"

let hr3 = document.createElement("hr")

console.log(hr);
document.body.appendChild(hr);
document.body.appendChild(h2);
document.body.appendChild(p);
document.body.appendChild(ul1);
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);
ul1.appendChild(li5);
ul1.appendChild(li6);
document.body.appendChild(p2);
document.body.appendChild(a1);
document.body.appendChild(hr2);
document.body.appendChild(h3);
document.body.appendChild(ul2);
ul2.appendChild(li7);
ul2.appendChild(li8);
ul2.appendChild(li9);
ul2.appendChild(li10);
ul2.appendChild(li11);
ul2.appendChild(li12);
ul2.appendChild(li13);
document.body.appendChild(hr3);
