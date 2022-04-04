const { renderHook } = require("@testing-library/react-hooks")

const { useFetchGifs } = require("../../../hooks/useFetchGifs")

describe('prueba para el custom hook useFetchGifs', () => {

    test('debe mostrar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'))

        const { data, loading } = result.current

        await waitForNextUpdate()

        expect(data.length).toBe(0)
        expect(data).toEqual([])
        expect(loading).toBe(true)
    })


    test('debe de retornar un array de imgs y el loading en false', async() => { 
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'))

        // Para que se limpie y se monte otra vez el hook
        await waitForNextUpdate()
        
        const { data, loading } = result.current


        expect(data.length).toBe(10)
        expect(loading).toBe(false)
     })
})