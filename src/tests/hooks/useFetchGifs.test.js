import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGif', () => {
    test('debe de retonar el estado inicial', async() => {
        
        const {result} = renderHook( () => useFetchGifs('Vikingos') );
        const {data, loading} = result.current;

        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
    test('debe de retornar un arreglo de imagenes y loading en false', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Vikingos') );
        await waitForNextUpdate();
        
        const {data, loading} = result.current;
        
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
        
    });
});