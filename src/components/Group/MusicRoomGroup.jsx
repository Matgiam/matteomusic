import MusicRoom from "../models/room/Optimized-room";


function MusicRoomGroup({ positions, rotations }) {
  return positions.map((pos, index) => (
    <MusicRoom key={index} position={pos} rotation={rotations[index]} />
  )); 
}
export default MusicRoomGroup;