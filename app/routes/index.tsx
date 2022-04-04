import { Button } from "~/components/Button/Button";

export default function Index() {
  return (
    <Button variant="primary" onClick={() => console.log("test")}>
      <h1>test</h1>
    </Button>
  );
}
