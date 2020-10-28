import React, { useState } from 'react'
import { useEffect } from 'react';
import { Transition } from 'react-transition-group';

export default function Card(props) {
    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };
    const data = props.data
    const [inProp, setInProp] = useState(false);
    useEffect(() => {
        console.log(props)
        setInProp(true)
        console.log("Rendered")
        return () => {
            console.log("Deleted")
            setInProp(false)
        }
    }, [props])
    return (
        <Transition in={inProp} timeout={500}>
            {state => (
                <>
                    <div className="grid__col grid__col--1-of-3" style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}>
                        <div className="card">
                            <h3>{`${data.user.name.first} - ${data.user.name.last}`}</h3>
                            <p>{props.data.text}</p>
                            <div className="info grid">
                                <div className="upvotes grid__col--1-of-2">
                                    {data.upvotes}
                                </div>
                                <div className="type grid__col--1-of-2">
                                    {data.type}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Transition>
    )
}