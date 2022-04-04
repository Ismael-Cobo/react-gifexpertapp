import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"

describe('pruebas en <GifExpertApp />', () => {

    test('debe mostrar el componente correctamente', () => {

        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar una lista del componente <GifGrid />', () => {

        const values = [
            'one punch',
            'dragon-ball'
        ]
        const wrapper = shallow(<GifExpertApp defaultValue={values} />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(values.length)
    })
})