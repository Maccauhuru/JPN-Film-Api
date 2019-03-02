const app = document.getElementById("root");
const logo = document.createElement("img");
logo.src = 'images/logo.png';
logo.setAttribute('class','m-0');
const container = document.createElement('div');
container.setAttribute('class','container');
app.appendChild(logo);
app.appendChild(container);
const request = new XMLHttpRequest();

//open connection on endpoint
request.open('GET','https://ghibliapi.herokuapp.com/films',true);


request.onload = function () {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {

        data.forEach(film => {
            //main elements
            const card = document.createElement('div');
            const heading = document.createElement('h1');
            const paragraph = document.createElement('p');
            const errorMessage = document.createElement('marquee');

            //content
            const title = `${film.title} - ${film.release_date}` ;
            const blurb = `${film.description.substring(0, 300)}...`;

            card.setAttribute('class', 'card mt-2 p-1');
            heading.textContent = title;
            paragraph.textContent = blurb;


            container.append(card);
            card.appendChild(heading);
            card.appendChild(paragraph);
           
        });
    } else {
        errorMessage.textContent = "Data could not be retrived!"
        app.appendChild(errorMessage);
    }
    
}

//send GET request
request.send();