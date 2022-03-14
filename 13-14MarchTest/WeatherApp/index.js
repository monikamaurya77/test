//console.log('123')

const json_value= function(res){
    return res.json();
}

const handle_data=function(a){

console.log(a);
console.log(a.main.temp);
console.log(a.wind.speed);
console.log(a.weather[0].description);
console.log(a.weather[0].id);
let celcius=Math.round(((a.main.temp)-273));
let max_cel=Math.round(((a.main.temp_max)-273));
let min_cel=Math.round(((a.main.temp_min)-273));
//   <div class="weather-card">
//   <p>City</p>
//   <p>Tempareture</p>
//   <p>Wind speed</p>
//   <p>Maxium tepareture</p>
//   <p>Lowest tempareture</p>
// </div>
const parent_container=document.getElementById("parent-container");
parent_container.innerHTML='';
const div_element=document.createElement("div");
const first_parent_element=document.createElement("p");
const second_parent_element=document.createElement("p");
const third_parent_element=document.createElement("p");
const fourth_parent_element=document.createElement("p");
const fifth_parent_element=document.createElement("p");
const sixth_parent_element=document.createElement("p");
const image=document.createElement("img");
first_parent_element.innerText=`City-${a.name}`;
first_parent_element.style.textAlign="center";
second_parent_element.innerText=`Tempareture :- ${celcius}\u00B0 C`;
third_parent_element.innerText=`Wind Speed :- ${a.wind.speed}`;
fourth_parent_element.innerText=`Maxium Tempareture :- ${max_cel}\u00B0 C`;
fifth_parent_element.innerHTML=`Minimum Tempareture :- ${min_cel}\u00B0 C`;
sixth_parent_element.innerHTML=`Sky Condition :- ${a.weather[0].description}`;
// image.style.height="200px";
if(a.weather[0].id < 250 && a.weather[0].id >= 200){
image.src="https://openweathermap.org/img/wn/11d@2x.png";
}
else if(a.weather[0].id < 322 && a.weather[0].id >= 300){
image.src="https://openweathermap.org/img/wn/09d@2x.png";
}
else if(a.weather[0].id < 532 && a.weather[0].id >= 500){
image.src="https://openweathermap.org/img/wn/10d@2x.png";
}
else if(a.weather[0].id < 623 && a.weather[0].id >= 600){
image.src="https://openweathermap.org/img/wn/13d@2x.png";
}
else if(a.weather[0].id < 782 && a.weather[0].id <= 701){
image.src="https://openweathermap.org/img/wn/50d@2x.png";
}
else if(a.weather[0].id == 800){
image.src="https://openweathermap.org/img/wn/01d@2x.png";
}
else if(a.weather[0].id < 805 && a.weather[0].id >= 701){
image.src="https://openweathermap.org/img/wn/02d@2x.png";
}

div_element.classList.add("weather-card");
div_element.appendChild(first_parent_element);
div_element.appendChild(second_parent_element);
div_element.appendChild(third_parent_element);
div_element.appendChild(fourth_parent_element);
div_element.appendChild(fifth_parent_element);
div_element.appendChild(sixth_parent_element);
div_element.appendChild(image);

parent_container.appendChild(div_element);
document.getElementById("default").classList.add("hide");  



}
const fetch_Api= function(){
  const search_value=search_feild.value;
  // document.getElementById("default").classList.add("hide");
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_value}&appid=fad8cf590e6a7deb9644126001e185fe`).then(json_value).then(handle_data);
}
document.getElementById("search_btn").addEventListener('click',fetch_Api);
const enter_fn=function(e){
if(e.key =='Enter'){
  // document.getElementById("default").classList.add("hide");
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=fad8cf590e6a7deb9644126001e185fe`).then(json_value).then(handle_data);
}
}
document.getElementById("search_feild").addEventListener('keyup',enter_fn);







