// READ the giphy API docs: https://developers.giphy.com/
//declar our variables and select our elements
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_KEY = "Uq4halWVmr1vfmgU4SZfY8qvcRJ6A6Pz"

var searchForm = document.querySelector("#search-form")
var searchInput = searchForm.querySelector("input") // var searchForm = document.querySelector("#search-form input")
var results = document.querySelector(".results")
// define our functions
function getGifs(){
    //console.log("Running getGifs")
    results.innerHTML = ""   //it breaks previous result & shows new result
    $.ajax({
        type: "GET",
        url: `${giphy_endpoint}/gifs/search?api_key=${API_KEY}&q=${searchInput.value}`,
        dataType: "json",  //get back informatiom from the URL
        success: function(data){
            console.log(data)
            // data[""0""].images.preview_gif.url
            for(var i=0; i<data.data.length; i++){
                
                results.innerHTML += `
                <img src = "${data.data[i].images.preview_gif.url}" alt="giphy gif " />
                `
            }
           
        },
        error: function(error){
            console.log("There was an error")
        }
    })
}
// call our functions and add our event listeners
searchForm.addEventListener("submit", function(event){
    event.preventDefault()
   // console.log(searchInput.value)
   getGifs()
})


