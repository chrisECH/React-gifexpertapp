import { getGifs } from "../../helpers/getGifs";


describe('Pruebas con getGifs', () => {
    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs();
         expect(gifs.length).toBe(10);
    });
    test('debe de verificar la categoria', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
});