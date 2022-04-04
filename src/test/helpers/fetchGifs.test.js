import { fetchGifs } from "../../helpers/fetchGifs"

describe('pruebas con fetch gifs', () => {

    const category = 'One punch'

    test('debe de traer 10 elementos', async() => {

        const gifs = await fetchGifs(category)
        expect(gifs.length).toBe(10)
    })

    test('debe de mostrar un error al dar una categoria vacia', async() => { 

        const gifs = await fetchGifs('')
        expect(gifs.length).toBe(0)
     })
})