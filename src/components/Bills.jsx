import React, { useState } from 'react'
import Bill from './Bill';
import Bill2 from './Bill2';

export default function Bills({ price }) {
    let i = Math.floor(price/100)
    i=(price<100?1:i)

    return (
        <div className='flex flex-wrap mr-1' >
            {
                [... new Array(5)].map((bill, index) => {
                    return index < i ? <Bill2 key={index} /> : ''
                })
            }
        </div>
    )
}
