//restautant.js

const createRestaurantHomePage = () => {
     const content = document.querySelector("#content");
     const pagecontent = document.createElement('div');
     pagecontent.classList.add('page-content');

     //create image and append 

     const image = document.createElement('img');
     image.src = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg";
     image.height = 400;
     pagecontent.appendChild(image);

     //create headline and append

     const headline = document.createElement('h1');
     headline.textContent = "Welcome to our Restaurant";
     pagecontent.appendChild(headline);


     //create para and append 

     const para = document.createElement('p');
     para.textContent = "We provide the best food and fastest table service";
     pagecontent.appendChild(para);
     content.appendChild(pagecontent);

     
};

export default createRestaurantHomePage