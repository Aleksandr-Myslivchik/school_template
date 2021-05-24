document.addEventListener('DOMContentLoaded', () => {
  const city = document.querySelector('#city')
  const country = document.querySelector('#country')
  const submit = document.querySelector('#query-btn')

  class Parameters {
    constructor() {
      this.baseurl = 'http://api.weatherstack.com/current'
      this.urlPath = {
        access_key: '2cdeee692fa4f8af043dc7efa5a07de7',
        query: `${city.value ? city.value : ''}${country.value ? `, ${country.value}` : ''}`,
      }
    }

    getUrl() {
      const url = new URL(this.baseurl)
      url.search = new URLSearchParams(this.urlPath)
      return url.toString()
    }
  }

  const makeWeatherData = (params) => {
    const weatherData = document.createElement('div')
    weatherData.classList.add('weather-data-wrapper')

    weatherData.insertAdjacentHTML('beforeend', `
  <div class="row custom-row" id="degree-row">
                <div class="col">
                  <span id='degree'>${params.current.temperature}&#xb0;C</span><br>
                  <span id='location'>${params.location.name}${params.location.country ? `, ${params.location.country}` : ''}</span>
                </div>
              </div>
              <div class="row custom-row description-row">
                <div class="col">
                  <span>Time: ${params.current.observation_time}</span>
                </div>
                <div class="col middle-col">
                  <span>Feels like: ${params.current.feelslike}&#xb0;C</span>
                </div>
                <div class="col">
                  <span>${params.current.weather_descriptions[0]}</span>
                </div>
              </div>
              <div class="row custom-row description-row">
                <div class="col">
                  <span>Wind: ${params.current.wind_dir}</span>
                </div>
                <div class="col middle-col">
                  <span>Speed: ${params.current.wind_speed} km/h</span>  
                </div>
                <div class="col">
                  <span>Pressure: ${params.current.pressure} MB</span>
                </div>
              </div>
  `)

    return weatherData
  }

  const renderWeatherData = (options) => {
    const $weatheWrapper = makeWeatherData(options)
    const wrapper = document.querySelector('#container')
    wrapper.insertAdjacentElement('beforeend', $weatheWrapper)
  }

  const requestData = async () => {
    const url = (new Parameters()).getUrl()
    try {
      const response = await fetch(url)
      const data = await response.json()

      return data
    } catch {
      throw new Error('Something went wrong')
    }
  }

  const clearData = () => {
    const data = document.querySelector('.weather-data-wrapper')
    city.value = ''
    country.value = ''
    if (!data) return
    data.parentElement.removeChild(data)
  }

  const handler = () => {
    requestData().then((d) => {
      clearData()
      renderWeatherData(d)
    })
      .catch(() => {
        throw new Error('Something Went Wrong')
      })
  }

  submit.addEventListener('click', handler)

  city.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return
    handler()
  })

  country.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return
    handler()
  })
})
