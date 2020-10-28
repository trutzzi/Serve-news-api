import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [time, setTime] = useState(null)
    useEffect(() => {
        const timer = setInterval(() => {
            let myDate = new Date();
            let addZero = (time) => {
                if (time < 10) {
                    return '0' + time
                } else {
                    return time
                }
            }
            let h = myDate.getHours();
            let m = myDate.getMinutes();
            let s = myDate.getSeconds();
            setTime(`${addZero(h)}:${addZero(m)}:${addZero(s)} AM`)
        }, 1000)
        return () => timer.clearInterval();
    }, [])
    return (
        <div className="clock">
            {time}
        </div>)
}