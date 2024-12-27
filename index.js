
const container= document.querySelector(".container")
 
let currentTimeframe= "weekly" 
let imgCounter= 0
const imgArr = ['images/icon-work.svg', 'images/icon-play.svg', 'images/icon-study.svg', 
                'images/icon-exercise.svg', 'images/icon-social.svg', 'images/icon-self-care.svg']
const headerBgColor= ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)',
                        'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)']
const appendData = (item) => {
    const current = item.timeframes[currentTimeframe].current
    const previous = item.timeframes[currentTimeframe].previous
    const title= item.title
   
    container.innerHTML+=`
    <div class="item" style="background-color: ${headerBgColor[imgCounter]} "> 
    <div class="item-header" style="background-color: transparent ">
      <img src="${imgArr[imgCounter]}" class="icon" />
    </div>
    <div class="item-footer">
      <div class="item-footer--item1">
        <p>${title}</p>
        <p class="light">...</p>
      </div>
      <div class="item-footer--item2">
        <p class="medium"> ${current} </p>
        <p class="light">Last Week -  ${previous}hrs </p>
      </div>
    </div>
  </div>
    `
     
    imgCounter++
}

const populateDom= (data) =>{
    for (const item of data){
       
        appendData(item);
        console.log(item)
    }
}

// fetch the JSON data
fetch('data.json').then((response) => {
    if(!response.ok) return console.log('Oops! Something went wrong.');
  
    return response.json();
  }).then((data) => {
    // handle the data
    populateDom(data);
  });