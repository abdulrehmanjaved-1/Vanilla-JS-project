// const a=document.getElementById("btn1");
var gloval;
var count = 0;
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  count++;

  let k = key.value;
  let k1 = key1.value;
  localStorage.setItem(key2.value, JSON.stringify([k, k1]));
  gloval = key2.value;
  let a1 = document.getElementById("todo");
  let bdy = document.body;
  let a2 = document.createElement("div");
  // a2.setAttribute("id","newid")
  a2.id = `div-${count}`;
  // let a3=document.createElement("div")
  // var rmv=()=>{
  //     // e.preventDefault()
  //     // let g=document.getElementById(`btn-${count}`);
  //     // g.parentNode.removeChild(div);
  //     console.log("shdvhsdhd")
  // }
  a2.innerHTML = `
    <span class="general space">Task${count} :</span>
    <span class="new space">${key2.value}</span> 
     <span class="general space">Work :</span> 
     <span class="new space">${k}</span>  <span class="general space"> Time :
     </span> --- <span class="time2 space">${k1}</span>
     <button onclick="deleteDiv(this)" id="btn-${count}" style="color:white;width: 75px;
     height: 62px;background-color:red;border-radius:10px">Remove</button>
    `;
  // document.getElementById(`btn-${count}`).addEventListener('click',rmv());
  a2.style.color = "white";
  a2.style.padding = "19px";
  // bdy.append(a2);
  a1.append(a2);
  key.value = "";
  key2.value = "";
  key1.value = "";
  console.log(e);
});
// console.log("ajd")
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  // var a=key2.value;
  // localStorage.removeItem(gloval);
  // // let b1=document.getElementById("newid");
  // let b1=document.getElementById("todo");
  // b1.innerHTML=""
  if (count > 0) {
    const div = document.getElementById(`div-${count}`);
    div.parentNode.removeChild(div);
    count--;
  }
});
btn3.addEventListener("click", (e) => {
  e.preventDefault();
  let b1 = document.getElementById("todo");
  b1.innerHTML = "";
  localStorage.clear();
});
searchbtn.addEventListener("click", () => {
  let search1 = document.getElementById("input1");
  let search2 = document.getElementById(`div-${search1.value}`);
  search2.remove();
  coout++;
});

function deleteDiv(button) {
  var div = button.parentNode;
  var divId = div.id;
  console.log("ID of the div:", divId);
  div.parentNode.removeChild(div);
}
