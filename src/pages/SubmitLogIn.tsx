import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

function handleReturn() {
  navigate("/");
}

function SubmitLogIn() {
  return (
    <div>
      <Label>Test Hast du Gut gemacht!</Label>
      <Button type="button" onClick={handleReturn}>
        Zum Tippen!
      </Button>
    </div>
  );
}
export default SubmitLogIn;
