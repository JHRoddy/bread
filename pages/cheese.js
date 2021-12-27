import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Cheese() {
    const [counter, setCounter] = useState(0)
    // const state = useState(0)
    // const counter = state[0]
    // const setCounter = state[1]
    var cheeseName = "String"
    let fontWeight = "bold"
    if (counter >= 10
    ) {
        fontWeight = "normal"
    }
    return (
        <div>
            <h1>
                {cheeseName.toLowerCase()}
            </h1>
            <p style={{
                fontWeight: fontWeight
            }}>
                {counter}
            </p>
            <button onClick={(e) => {
                console.log("Increase by 1")
                setCounter(counter + 1)
            }} >
                increament
            </button>
            <button onClick={(e) => {
                console.log("Reset to 0")
                setCounter(0)
            }} >
                reset
            </button>
        </div>
    )
}
