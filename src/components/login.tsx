import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
function LogIn() {
  const [value, setValue] = useState("");
  return (
    <div className="flex w-full max-w-lg items-center gap-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <Input type="password" placeholder="Password" />
      <Button type="submit" variant="default">
        Log in!
      </Button>
      <Label>Das ist deine E-Mail! {value}</Label>
    </div>
  );
}

export default LogIn;
