import { shallow } from "enzyme"
import { GifCard } from "../../components/GifCard"

describe('Pruebas unitarias en <GifCard />', () => {

    const title = 'Hola que tal?'
    const url = 'https://localhost/img.jpg'
    const wrapper = shallow(<GifCard title={title} url={url} />)

    test('debe mostrar el componente correctamnete', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar el título en el párrafo', () => {
        const p = wrapper.find('p')
        
        expect(p.text().trim()).toBe(title)
    })

    test('debe de tener la imagen igual a la rl y alt de los props', () => {
        const img = wrapper.find('img')
        const { alt, src } = img.props()
        
        expect(alt).toBe(title)
        expect(src).toBe(url)
    })
})