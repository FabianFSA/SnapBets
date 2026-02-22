import TeamGameDay from "@/components/teamGameDay";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
            <CardTitle>Spieltag 1</CardTitle>
          </CardHeader>
          <CardContent>
            <Card>
              <TeamGameDay />
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Game 2 Manschaft_3 at Mannschaft_4</CardTitle>
              </CardHeader>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
