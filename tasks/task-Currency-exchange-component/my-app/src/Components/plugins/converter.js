import { MakeRequest } from './requestApi'
import { CURRENCIES } from '../../Constants/Currencies'

const reqApi = new MakeRequest({
    url: 'http://api.exchangeratesapi.io/v1/latest',
    queries: {
        access_key: '8f5d2554a576352bd743176032276120',
        symbols: 'BYN,USD,CHF,EUR'
    }
})

export const convert = async (base, convTo, n) => {

    const { rates } = await reqApi.getData()
    const [, , baseValue] = CURRENCIES.find(crs => crs[0] === base)
    const [, , convertToValue] = CURRENCIES.find(crs => crs[0] === convTo)
    const { [baseValue]: a, [convertToValue]: b } = rates
    const result = (((b || 1) / a) * +n).toFixed(2)
    return result

}


