import React, { useEffect, useState } from 'react';
import { RecordsItem } from './recordsItem';

import './style.css'

export const Records = () => {

    const [recordData, setRecordData] = useState([])

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem('GameRecords'))
        if (data)
            setRecordData(pre => data.sort((a, b) => a.steps - b.steps))
    }, [])

    return (
        <main className='records-page container'>
            <section className='records-cmp-record-data'>
                <div className='records-section-header-wrapper header-wrapper_h2'>
                    <h2 className='header-s2'>Your Game Record</h2>
                </div>
                <div className='record-data-container'>
                    {recordData.map(({ date, mode, steps, time }, index) => (
                        <RecordsItem key={index}
                            date={date}
                            mode={mode}
                            steps={steps}
                            time={time}
                        />
                    ))}
                </div>
            </section>
        </main>
    )

}