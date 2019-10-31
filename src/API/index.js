import Axios from "axios"
import { CurrencyUrl } from './constants'

export const getAllRates = () => (
    Axios.get(CurrencyUrl)
)

export const getBasedRates = base => (
    Axios.get(`${CurrencyUrl}?base=${base}`)
)