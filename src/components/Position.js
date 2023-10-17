import React, { useEffect, useState } from 'react'
import Sunrise from './Sunrise'

export default function Position() {
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)
                setIsLoading(false)
            }, error => {
                alert("Error in geolocation!")
                console.log(error)
            })
        } else {
            alert("Geolocation is not possible!")
        }
    }, [])

    if (isLoading) {
        return <div><p>Loading your position...</p></div>
    } else {
        return (
            <div>
                <p>
                    Your current position:<br></br>
                    Latitude: {lat.toFixed(4)}<br></br> 
                    Longitude: {lng.toFixed(4)}
                </p>
                <Sunrise lat={lat} lng={lng} />
            </div>
        )
    }
}
