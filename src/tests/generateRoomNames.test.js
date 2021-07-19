import generateRoomNames from "../RoomNames/generateRoomNames";

describe.skip('tests the room generator function', () => {
    it('tests generateRoomNames', () => {
        const randomName = generateRoomNames();
        
        expect(randomName).toBeTruthy();
    });
});

// use typeof instead?
// describe('tests the room generator function', () => {
//     it('tests generateRoomNames', () => {
//         const expected = 'string';
//         const actual = typeof(generateRoomNames());
        
//         expect.equal(expected, actual);
//     });
// })
