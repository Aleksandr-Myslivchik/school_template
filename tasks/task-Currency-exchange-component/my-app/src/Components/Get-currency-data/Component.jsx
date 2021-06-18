import React from 'react'
import { Input, Select } from 'antd'
import 'antd/dist/antd.css';
import { CURRENCIES } from '../../Constants/Currencies'
import './style.css'

const [[BYN], , [USD]] = CURRENCIES


const { Option } = Select;


export function Request(props) {

    const optionsRender = (crs) => {
        return (
            crs.map(([currency, id]) => (
                <Option key={id} value={currency} >
                    {currency}
                </Option>
            ))
        )
    }
    return (
        <div className='crs-data-wrapper'>
            <div className="input-wrapper">
                <Input className="input-crs-data" onChange={props.getBaseCrsValue} value={props.reqBaseValue} />
                <Input className="input-crs-data" onChange={props.getCrsConvertTo} value={props.reqConvertedValue} />
            </div>
            <div className="select-wrapper">
                <Select className="select-crs-data" defaultValue={USD} onSelect={props.getBaseSelect}>
                    {optionsRender(CURRENCIES)}
                ))}
            </Select>
                <Select className="select-crs-data" defaultValue={BYN} onSelect={props.getConvertedSelect}>
                    {optionsRender(CURRENCIES)}
                ))}
            </Select>
            </div>
        </div >
    )
}








