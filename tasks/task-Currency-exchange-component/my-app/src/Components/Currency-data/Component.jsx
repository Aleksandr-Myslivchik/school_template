import React, { useState } from 'react'
import { Request } from '../Get-currency-data/'
import { Show } from '../Show-currency-data/'
import { CURRENCIES } from '../../Constants/Currencies'
import { convert } from '../plugins/converter'
import './style.css'

const [[BYN], , [USD],] = CURRENCIES



export function Currency() {

    const [baseCrsValue, setBaseCrsValue] = useState('');
    const [CrsConvertToValue, setCrsConvertTo] = useState('');
    const [baseSelect, setBaseSelect] = useState(USD);
    const [convertedSelect, setConvertedSelect] = useState(BYN);

    const onChangeBaseHandler = async (e) => {

        const val = e.target.value
        if (isNaN(+val)) return
        setBaseCrsValue(val)
        const res = await convert(baseSelect, convertedSelect, val)
        setCrsConvertTo(res)

    }

    const onChangeCrsConvertToHandler = async (e) => {

        const val = e.target.value
        if (isNaN(+val)) return
        setCrsConvertTo(val)
        const ress = await convert(convertedSelect, baseSelect, val)
        setCrsConvertTo(val)
        setBaseCrsValue(ress)

    }

    const onBaseCrsSelect = async (v) => {
        setBaseSelect(v)
        const b = await convert(v, convertedSelect, baseCrsValue)
        setCrsConvertTo(b)
    }

    const onConvertedSelect = async (v) => {
        setConvertedSelect(v)
        const b = await convert(baseSelect, v, baseCrsValue)
        setCrsConvertTo(b)
    }

    return (
        <div className="currency-data animate">
            <div className="currency-container">
                <Show baseCrs={baseCrsValue}
                    crsConvertedTo={CrsConvertToValue}
                    baseCrsSelect={baseSelect}
                    convertedCrsSelect={convertedSelect}
                />
                <Request getBaseCrsValue={onChangeBaseHandler}
                    getCrsConvertTo={onChangeCrsConvertToHandler}
                    reqBaseValue={baseCrsValue}
                    reqConvertedValue={CrsConvertToValue}
                    getBaseSelect={onBaseCrsSelect}
                    getConvertedSelect={onConvertedSelect}
                />
            </div>
        </div>
    )
}

