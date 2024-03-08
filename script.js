const accesskey="5yTCa8tBkXJ9R1JQfR33hPf6rtvBWi8aHBjScAamEaU"

const FormEl=document.querySelector("form")
const inputEl=document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showMore= document.getElementById("show-more-button")


let inputData=""
let page=1;

async function searchImages(){

    inputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`
  const response = await fetch(url)
  const data=await response.json()
  const result=data.results
  if(page===1){
    searchResults.innerHTML=""
  }
  result.map((results)=>{

    const imageWrapper=document.createElement("div")
    imageWrapper.classList.add("search-result")
    const image=document.createElement("img")
    image.src= results.urls.small
    image.alt=results.alt_description
    const imageLink=document.createElement("a")
    imageLink.href=results.links.html
    imageLink.target="_blank"
    imageLink.textContent=results.alt_description

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLink)
    searchResults.appendChild(imageWrapper)
})
page++
if(page>1){

    showMore.style.display="block"
}
}

FormEl.addEventListener("submit",(event)=>{

    event.preventDefault()
    page=1;
    searchImages()
})


showMore.addEventListener("click",()=>{
    searchImages()
})
