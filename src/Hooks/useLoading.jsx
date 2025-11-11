import { useEffect, useState } from "react"
import { useLocation } from "react-router"

export const useLoading = () => {
    const [loading1, setLoading1] = useState(true)
    const location = useLocation()
    useEffect(() => {
        fetch('https://home-hero-server-ten.vercel.app/services')
        .then(res => res.json())
        .then(() => {
            setTimeout(() => {
                setLoading1(false)
            }, 500)
        })
    }, [setLoading1, location])

    return {loading1}
}