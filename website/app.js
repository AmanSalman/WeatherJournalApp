/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const Button = document.getElementById('generate');
const apiKey = '28942728fee9468f43a27def803e9623&units=imperial'
Button.addEventListener('click', async (e)=>{
  e.preventDefault()
  const zip = document.getElementById('zip').value 
  const feelings = document.getElementById('feelings').value
  const weather = await getWeather(apiKey, zip)
  await postData('http://localhost:3000/add', {temperature: weather.main.temp, date: newDate, feelings: feelings}).then(
    updateUI()
  )
})

const getWeather = async (apiKey, zip)=>{
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`
  console.log(zip, apiKey);
    const response = await fetch(baseURL);
    try {
      const newData = await response.json();
      return newData;
    } catch(error) {
    console.log("error", error);
    }
}

const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

const updateUI = async ()=>{
  console.log('updateUI');
  const request = await fetch('http://localhost:3000/all');
  try {
    const allData = await request.json();
    console.log("all",allData);
    document.getElementById('date').innerHTML = `Date: ${allData.date}`;
    document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature}°F`;
    document.getElementById('content').innerHTML = `Feelings: ${allData.feelings}`;
    // document.getElementById('city').innerHTML = `City: ${allData.city}`;
  } catch(error) {
    console.log("error", error);
  }
}