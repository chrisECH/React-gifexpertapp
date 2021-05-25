import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";



describe('Pruebas para el <GifExpertApp />', () => {

    test('debe de mostrar los componentes correctamente', () => {

        
        const wrapper =shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias', () => {

        const categories = ['Vikingos', 'Peaky Blinders'];
        const wrapper =shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    });
    
});