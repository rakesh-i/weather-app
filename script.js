const apiKey = 'BMGGFXHYFKY67QFH8NRZS97SN';

async function weatherdata(){
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/581355/?key=${apiKey}`);
        const weather = await response.json();
        // console.log(weather);
        return weather; 
    }
    catch(error){
        console.log(error);
    }
}

async function displayWeather() {
    try {
        const data = await weatherdata();
        console.log(data);
        const container = document.getElementById('content');
        container.innerHTML = `<p> ${JSON.stringify(data.currentConditions.cloudcover)}</p>`;
    } catch (error) {
        console.log(error);
    }
}

displayWeather();

