// var apikey="f813d8dc4707c066fc5bd7894c56a044";

// var api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";



// var enter=document.getElementById("input");
// 	enter.addEventListener("keypress", function (event){
// 		if(event.key==="Enter")
// 			weather();
// 	})


async function weather(){


	var city = document.getElementById("input").value;
	console.log(city)

	var city_json=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f813d8dc4707c066fc5bd7894c56a044&units=metric`);
	var data=await city_json.json();
	console.log(data)
	if(data.message=="city not found"){
		alert("Please enter correct name.")
	}
	else{
	if(data.main.temp<10)
		document.getElementById("temp").innerHTML="0"+parseInt((data.main.temp));
	else
		document.getElementById("temp").innerHTML=parseInt((data.main.temp));

	document.getElementById("weather_situation").innerHTML=data.weather[0].main;
	document.getElementById("distict").innerHTML=data.name;

	

	if(parseInt((data.wind.speed))>9)
		document.getElementById("wind").innerHTML=(data.wind.speed);
	else
		document.getElementById("wind").innerHTML="0"+(data.wind.speed);

	
	document.getElementById("humidity").innerHTML=data.main.humidity;

	

	

	if(data.weather[0].main=="Clouds" )
		document.getElementById("center_img").firstElementChild.setAttribute("src","images/clouds.png");

	if(data.weather[0].main=="Clear")
		document.getElementById("center_img").firstElementChild.setAttribute("src","images/clear.png");
	if(data.weather[0].main=="Haze")
		document.getElementById("center_img").firstElementChild.setAttribute("src","images/fog.png");
	if(data.weather[0].main=="Drizzle")
		document.getElementById("center_img").firstElementChild.setAttribute("src","images/drizzle.png");
	if(data.weather[0].main=="Mist")
		document.getElementById("center_img").firstElementChild.setAttribute("src","images/mist.png");
	if(data.weather[0].main=="Rain")
		document.getElementById("center_img").firstElementChild.setAttribute("src","images/rain.png");
	if(data.weather[0].main=="Snow")
		document.getElementById("center_img").firstElementChild.setAttribute("src","images/snow.png");
	}
}

