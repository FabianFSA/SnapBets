import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <Button type="button" onClick={handleClick}>
      Hier geht es zum Login!
    </Button>
  );
}

export default Home;
