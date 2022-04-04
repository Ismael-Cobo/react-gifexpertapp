import { useEffect, useState } from "react"
import { fetchGifs } from "../helpers/fetchGifs"

export const useFetchGifs = (category) => {

    const [data, setData] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        fetchGifs(category)
            .then(resp => {
                setData({
                    data: [...resp],
                    loading: false
                })
                
            })

    }, [category])

    return data
}