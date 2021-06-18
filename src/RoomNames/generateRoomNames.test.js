import generateRoomNames from "./generateRoomNames";

describe('tests the room generator function', () => {
    it('tests generateRoomNames', () => {
        const randomName = generateRoomNames();
        
        expect(randomName).toBeTruthy();
    });
});
