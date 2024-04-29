//tabs
import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";


const createTabs = () => {
    const content = document.querySelector('#content');

    //create 3 divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //set ids for divs
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    //set classes for divs
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //text content for divs
    div1.textContent = "Home";
    div2.textContent= "Menu";
    div3.textContent= "Contact Us";

    //append all
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    //add event listners
div1.addEventListener('click', () => {
    createRestaurantHomePage();
});
div2.addEventListener('click', () => {
    createMenuPage();
});
div3.addEventListener('click', () => {
    createContactPage();
});


}
 export default createTabs;