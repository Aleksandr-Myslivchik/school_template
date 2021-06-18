export class MakeRequest {
    
    constructor(opts) {
        this.baseUrl = opts.url
        this.query = opts.queries
    }

    getURL = () => {
        
        const url = new URL(this.baseUrl)
        const params = new URLSearchParams(this.query)
        url.search = params
        return url.toString()

    }

    getData = async () => {

        const response = await fetch(this.getURL())
        const data = await response.json()

        return data

    }

}
