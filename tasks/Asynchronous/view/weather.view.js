import Parameters from '../model/app.model'
import { city, country } from './app.view'

export const ROOT_NODE = document.getElementById('root')

export const requestData = async () => {
  const url = (new Parameters(city, country)).getUrl()
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch {
    throw new Error('Something went wrong')
  }
}

const makeWeatherData = ({ current, location }) => {
  const weatherData = document.createElement('div')
  weatherData.classList.add('weather-data-wrapper')

  weatherData.insertAdjacentHTML('beforeend', `
    <div class="row custom-row" id="degree-row">
                  <div class="col">
                    <span id='degree'>${current.temperature}&#xb0;C</span><br>
                    <span id='location'>${location.name}${location.country ? `, ${location.country}` : ''}</span>
                  </div>
                </div>
                <div class="row custom-row description-row">
                  <div class="col">
                    <span>Time: ${current.observation_time}</span>
                  </div>
                  <div class="col middle-col">
                    <span>Feels like: ${current.feelslike}&#xb0;C</span>
                  </div>
                  <div class="col">
                    <span>${current.weather_descriptions[0]}</span>
                  </div>
                </div>
                <div class="row custom-row description-row">
                  <div class="col">
                    <span>Wind: ${current.wind_dir}</span>
                  </div>
                  <div class="col middle-col">
                    <span>Speed: ${current.wind_speed} km/h</span>  
                  </div>
                  <div class="col">
                    <span>Pressure: ${current.pressure} MB</span>
                  </div>
                </div>
    `)

  return weatherData
}

export const renderWeatherData = (options) => {
  const $weatherNode = makeWeatherData(options)
  ROOT_NODE.insertAdjacentElement('beforeend', $weatherNode)
}
