import { ADJECTIVES, NOUNS } from './roomNamesArrays';


function generateRoomNames() {
  
    const fullRoomName = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)] + " " + NOUNS[Math.floor(Math.random() * NOUNS.length)];

    return fullRoomName;
}

export default generateRoomNames;





