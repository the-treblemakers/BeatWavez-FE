import generateRoomNames from "../RoomNames/generateRoomNames";

describe('tests the room generator function', () => {
    it('tests generateRoomNames', () => {
        const randomName = generateRoomNames();
        const expected = 'string';
        const actual = typeof(generateRoomNames());
        
        expect(randomName).toBeTruthy();
        expect.equal(expected, actual);
    });
});
