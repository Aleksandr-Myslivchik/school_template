import { requestData, renderWeatherData } from '../view/weather.view'

import { clearData } from '../view/app.view'

const handler = (e) => {
  const { target } = e
  if (target.classList.contains('btn') || (e.key === 'Enter' && (target.classList.contains('city') || target.classList.contains('country')))) {
    requestData().then((data) => {
      clearData()
      renderWeatherData(data)
    })
      .catch((err) => {
        console.log(new Error('Something Went Wrong'), err.message)
      })
  }
}

export default function initRootController(rootCmp) {
  rootCmp.addEventListener('click', handler)
  rootCmp.addEventListener('keypress', handler)
}
