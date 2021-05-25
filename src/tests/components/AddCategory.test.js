import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });


    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find  ('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: {value} });

        expect(wrapper.find('p').text().trim()).toBe(value);


    });

    test('No debe de postear la informacion en el submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar al setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {target: { value }});


        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(2);

        expect(wrapper.find('input').prop('value')).toBe('');
    });
});