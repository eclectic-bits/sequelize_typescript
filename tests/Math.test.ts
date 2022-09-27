import { describe, expect, test } from '@jest/globals';

import { add } from '../src/Math';

describe('Math', () => {
    describe('add', () => {
        test('adds two numbers together', () => {
            // arrange
            const numbers = [1, 2];
                
            // act
            const sum = add(numbers);

            // assert
            expect(sum).toBe(3);
        });

        test('adds three numbers together', () => {
            // arrange
            const numbers = [1, 2, 3];
                
            // act
            const sum = add(numbers);

            // assert
            expect(sum).toBe(6);
        });
    })
})