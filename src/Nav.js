import React, { useEffect } from 'react'
import { useState } from 'react'

function Nav(props) {
    const [Date, setDate] = useState(0)
    useEffect(() => {
        console.log("Nav Rendered")
    }, []);

    return (
        <>
            <button onClick={() => setDate(Date + 1)}>Set Date</button>
            <h2>{Date} {props.number}</h2>
        </>
    );
}
export default Nav