import TeamGameDayCards from "@/components/teamGameDayCards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockGames } from "@/mocks/games";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div>
      <div>
        <Button type="button" onClick={handleClick}>
          Hier geht es zum Login!
        </Button>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle> Week {mockGames[0]?.week || "1"}</CardTitle>
          </CardHeader>
          <CardContent>
            <TeamGameDayCards Games={mockGames} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
