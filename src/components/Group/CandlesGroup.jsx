import Candles from "../models/Candles_set";

function CandlesGroup({ positions }) {
  return positions.map((pos, index) => (
    <Candles key={index} position={pos} />
  )); 
}
export default CandlesGroup;