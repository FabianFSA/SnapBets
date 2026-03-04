import type { Team } from "Entities/Team";

type Props = {
  GameDayTeams: Team[];
};

function teamGameDay({ GameDayTeams }: Props) {
  return (
    <div>
      {GameDayTeams.map((team) => (
        <div key={team.name}>
          {" "}
          <img src={team.logo.toString()} />
          <p>{team.name}</p>
        </div>
      ))}
    </div>
  );
}

export default teamGameDay;
