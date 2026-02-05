import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
function LogInC() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleReturn() {
    navigate("/");
  }

  return (
    <div className="bg-muted flex min-h-svh w-full items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Login zu deinem Account</CardTitle>
              <CardDescription>
                Gebe hier deine E-Mail und dein Passwort ein um dich einzuloggen
              </CardDescription>
            </CardHeader>
          </Card>
          <CardContent>
            <CardContent>
              <form>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">E-Mail</FieldLabel>
                    <Input
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </CardContent>
        </div>
        <Input type="password" placeholder="Password" />
        <Button type="submit" variant="default">
          Log in!
        </Button>
        <Label>Das ist deine E-Mail! {value}</Label>
        <Button type="button" onClick={handleReturn}>
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}

export default LogInC;
