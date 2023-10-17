import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = "https://api.sunrise-sunset.org/json?"

export default function Sunrise({ lat, lng }) {
    const [sunrise, setSunrise] = useState(null)
    const [sunset, setSunset] = useState(null)

    useEffect(() => {
        const address = API_URL +
            'lat=' + lat +
            '&lng=' + lng +
            '&date=today'

        axios.get(address)
            .then((response) => {
                setSunrise(response.data.results.sunrise)
                setSunset(response.data.results.sunset)
                console.log(response.data)
            }).catch(error => {
                alert("No data to display, sorry!")
                console.log(error)
            })
    }, [])

    return (
        <div class="container">
            <h3>When does the sun rise and set at your location?</h3>
            <p>Sunrise: {sunrise} (UTC time)</p>
            <p>Sunset: {sunset} (UTC time)</p><br></br>
            <p>Check your time zone here:</p>
                <a href="https://www.timeanddate.com/time/zone/timezone/utc" target="_blank">Time and Date</a>
        </div>
    )
}
