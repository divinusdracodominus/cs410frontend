// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

function fetch_got_data() {
    console.log("fetching data");
    fetch(url).then(response => response.json()).then(response => response.forEach(element => {  
        let current = document.createElement("div");
        current.setAttribute("class", "charDisplay");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        console.log("setting image: " + element.imageUrl); 
        img.setAttribute("src", element.imageUrl);
        img.setAttribute("class", "api_img");
        img.setAttribute("width", "150px");
        img.setAttribute("height", "200px"); 
        
        figure.appendChild(img);
        let caption = document.createElement("figcaption");
        caption.innerText = element.fullName + " " + element.title;
        figure.appendChild(caption);
        current.appendChild(figure);
        document.getElementById("view").appendChild(current); 
    }));
}

fetch_got_data();
