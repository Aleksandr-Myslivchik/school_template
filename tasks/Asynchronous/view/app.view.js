export const city = document.querySelector('#city')
export const country = document.querySelector('#country')

export const clearData = () => {
  const data = document.querySelector('.weather-data-wrapper')
  city.value = ''
  country.value = ''
  if (!data) return
  data.parentElement.removeChild(data)
}
