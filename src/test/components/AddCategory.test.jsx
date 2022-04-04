import { shallow } from "enzyme"

import { AddCategory } from "../../components/AddCategory"

describe('prueba para el AddCategory', () => {

    const setCategories = jest.fn()
    let warpper = shallow(<AddCategory setCategories={setCategories} />)
    let input = warpper.find('input')

    beforeEach(() => {
        jest.clearAllMocks()
        warpper = shallow(<AddCategory setCategories={setCategories} />)
        input = warpper.find('input')
    })


    test('debe de mostrarse correctamente', () => {
        expect(warpper).toMatchSnapshot()
    })

    test('debe de cambiar el input', () => {
        const value = 'Hola mundo'
        input.simulate('change', { target: { value } })
    })

    test('NO debe de postear la información con submit', () => {

        warpper.find('form').simulate('submit', { preventDefault: () => { } })

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe de llamar el setCategories y limpiar la caja de text', () => {

        const value = 'hola mundo'
        input.simulate('change', { target: {value} })
        
        const form = warpper.find('form')
        form.simulate('submit', { preventDefault: () => {} })
        
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function))
        expect(input.prop('value')).toBe('')
    })

})