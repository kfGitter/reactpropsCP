import players from "./players";
import Player from "./Player";

const PlayerList = () => {
  return (
    <div>
      {/* using map to display all players in the initial array */}
      {arrPlayers.map((players, index) => (
        <Player key={index} {...player} />
      ))}
      ;
    </div>
  );
};

export default PlayerList;
