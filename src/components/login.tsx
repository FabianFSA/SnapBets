import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";
function LogInC() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleReturn() {
    navigate("/");
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="email"
        placeholder="Email"
        required
      />
      <Input type="password" placeholder="Password" />
      <Button type="submit" variant="default">
        Log in!
      </Button>
      <Label>Das ist deine E-Mail! {value}</Label>
      <Button type="button" onClick={handleReturn}>
        Return to Homepage
      </Button>
    </div>
  );
}

export default LogInC;
