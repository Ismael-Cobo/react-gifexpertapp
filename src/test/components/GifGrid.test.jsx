import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
jest.mock('../../hooks/useFetchGifs')

describe('prueba de <GifGrid />', () => {

    const category = 'One punch'

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de cambiar la snapshot cuando el useFetchGifs se ejecute', () => {

        const gifs =[{
            id: 123,
            title: 'Imagen',
            url: 'https://localhost:3000/img.jpg'
        },
        {
            id: 456,
            title: 'Imagen2',
            url: 'https://localhost:3000/img2.jpg'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />)
        
        //expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifCard').length).toBe(gifs.length)

    })

})