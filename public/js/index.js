const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


const getInfo = async (event) => {
    event.preventDefault();
    // below alert works as i click on search button 
    // alert("hey");
    const cityVal = cityName.Value;
    if (cityVal === "") {
        city_name.innerText = `Provide name of city before search`;
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=66735fe0c4c8ecee27dd18376ac52b38`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;




        } catch {
            city_name.innerText = `pProvide name of city before search`;

        }

    }
}

submitBtn.addEventListener('click', getInfo);

