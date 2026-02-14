import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
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
              <CardHeader>
                <CardTitle>Game 1 Manschaft_1 at Mannschaft_2</CardTitle>
              </CardHeader>
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
