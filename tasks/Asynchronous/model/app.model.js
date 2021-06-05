export default class Parameters {
  constructor(city, country) {
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
