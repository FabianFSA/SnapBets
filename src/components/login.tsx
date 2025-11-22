import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
function LogInC() {
  const [value, setValue] = useState("");
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
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
    </div>
  );
}

export default LogInC;
