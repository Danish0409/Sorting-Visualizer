const container = document.querySelector('.data-container');
function generateBar(num=20){
    for(let i=1; i<=num; i+=1){
        const value = Math.floor(Math.random()*100)+1;
        const bar = document.createElement("div")
        bar.classList.add("bar")
        bar.style.height = `${value * 5}px`;
        bar.style.transform = `translateX(${i * 30}px)`;
        const barLabel1 = document.createElement("label");
        barLabel1.classList.add("bar_id");
        barLabel1.innerHTML = value;
        bar.appendChild(barLabel1);
        container.appendChild(bar);
    }
}
async function SelectionSort(delay=300){
    let bars = document.querySelectorAll(".bar");
    var min_idx = 0;
    for(var i=0; i<bars.length; i+=1){
        min_idx=i;
        bars[i].style.backgroundColor = "red";
        for(var j=i+1; j<bars.length; j+=1){
            bars[j].style.backgroundColor = "yellow";
            await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 200)
          );
            var val1 = parseInt(bars[j].childNodes[0].innerHTML)
            var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML)
            if(val1<val2){
                if(min_idx!=i){
                    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
                }
                min_idx=j;
            }
                else{
                    bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
                }
        }
        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerHTML;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
      );
      bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
      bars[i].style.backgroundColor = "green";
    }
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;

}
async function BubbleSort(delay=300){
  let arr = document.querySelectorAll(".bar");
  for(let i=0; i<arr.length-1; i+=1){
    for(let j=0; j<arr.length-i-1; j+=1){
      arr[j].style.backgroundColor = "yellow";
      arr[j+1].style.backgroundColor = "yellow";
      await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 200)
    );
    var temp1 = parseInt(arr[j].childNodes[0].innerHTML)
    var temp2 = parseInt(arr[j+1].childNodes[0].innerHTML)
    if(temp1>temp2){
      var h1 = arr[j].style.height;
      arr[j].style.height = arr[j+1].style.height;
      arr[j].childNodes[0].innerHTML = temp2;
      arr[j+1].style.height = h1;
      arr[j+1].childNodes[0].innerHTML = temp1;
    }
    arr[j].style.backgroundColor = "  rgb(24, 190, 255)";
    arr[j+1].style.backgroundColor = "  rgb(24, 190, 255)";
    }
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 200)
  );
  let a = arr.length-i-1;
  arr[a].style.backgroundColor = "green";

  }
  arr[0].style.backgroundColor = "green";
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn5").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
}
async function InsertionSort(delay=300){
  let arr = document.querySelectorAll(".bar");
  for(var i=1; i<arr.length; i+=1){
    var j = i-1;
    var key = parseInt(arr[i].childNodes[0].innerHTML);
    var height = arr[i].style.height;
    arr[i].style.backgroundColor = "yellow";
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 200)
  );
    while(j>=0 && parseInt(arr[j].childNodes[0].innerHTML)>key){
      arr[j].style.backgroundColor = "yellow";
        arr[j+1].style.height = arr[j].style.height;
        arr[j+1].childNodes[0].innerHTML = arr[j].childNodes[0].innerHTML;
        j=j-1;
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
      );
      for(var k=i;k>=0;k--){
        arr[k].style.backgroundColor = "green";
    }
  }
    arr[j+1].style.height = height;
    arr[j+1].childNodes[0].innerHTML = key;
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 200)
  );
  
    arr[i].style.backgroundColor = "green";
  }
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn5").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
}
generateBar();
  
// function to generate new random array 
function generate()
{
  window.location.reload();
 }
 function disable(){
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn5").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;
 }
