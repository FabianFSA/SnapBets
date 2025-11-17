/* eslint-disable react/react-in-jsx-scope */
import { Button } from "./ui/button";
function LogIn() {
  return (
    <div>
      <Button variant="outline" size="lg">
        Large!
      </Button>
      <br />
      <Button variant="secondary" className="mt-4 w-full">
        Vollbreite
      </Button>
    </div>
  );
}

export default LogIn;
