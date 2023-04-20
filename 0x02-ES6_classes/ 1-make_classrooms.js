import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room = [new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)];
  return room;
}
