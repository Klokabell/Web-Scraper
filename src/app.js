const feeder = document.querySelector('#feed') 



 

fetch('http://localhost:8000/results')
    .then(response => {return response.json()})
    .then(data => {


        data.forEach(article => {

            // Clean the links
            const linkage = article.url.replace(/"/g, '')

            //Create the HTML with working links using each object in array
            const newsThing = `<div><h3><a href= ${linkage} />` + article.title + `</h3><p></div>`

            // Put the content onto the page
            feeder.insertAdjacentHTML("beforeend", newsThing)
            
        })
    })
    .catch(err => console.log(err))


var date= new Date();
var day = date.getDate()
var month = date.getMonth() +1
var year = date.getFullYear()

document.getElementById("date").innerHTML = day + "/" +  month + "/" + year