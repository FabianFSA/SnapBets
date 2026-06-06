import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
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
  const [eMail, setValue] = useState("");
  const [passwordInput] = useState("");
  const navigate = useNavigate();

  function handleReturn() {
    navigate("/");
  }

  function handleLogIn() {
    if (eMail === "fubi.games@gmail.com") {
      navigate("/submitLogIn");
    }
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

            <CardContent>
              <form>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">E-Mail</FieldLabel>
                    <Input
                      value={eMail}
                      onChange={(e) => setValue(e.target.value)}
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Passwort</FieldLabel>
                    </div>
                    <Input
                      value={passwordInput}
                      id="password"
                      type="password"
                      required
                    />
                  </Field>
                  <Field>
                    <Button type="submit" onClick={handleLogIn}>
                      Login
                    </Button>
                    <Button type="button" onClick={handleReturn}>
                      Zurück zur Homepage
                    </Button>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LogInC;
