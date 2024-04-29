//menu

const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pagecontent = document.createElement('div');
    pagecontent.classList.add('page-content')

    const heading = document.createElement('h1');
    heading.textContent = "Menu";

    const menulist = document.createElement('ul');
    const menuIteam1 = document.createElement('li')
    menuIteam1.textContent = "Sizzler";
    const menuIteam2 = document.createElement('li');
    menuIteam2.textContent = "Rolls";
    const menuIteam3 = document.createElement('li');
    menuIteam3.textContent = "Momos";
    menulist.appendChild(menuIteam1);
    menulist.appendChild(menuIteam2);
    menulist.appendChild(menuIteam3);

    pagecontent.appendChild(heading);
    pagecontent.appendChild(menulist);
    content.appendChild(pagecontent);
    
}

export default createMenuPage;