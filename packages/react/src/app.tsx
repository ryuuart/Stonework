import ExampleContent from "./components/examples/ExampleContent";
import { Stonework } from "./components";
import Column from "./components/Column";

export default function () {
  return (
    <div>
      <h1>Hello!</h1>
      <Stonework gap={"1rem"}>
        <Column>
          <ExampleContent width={100} height={100} />
          <ExampleContent width={200} height={200} />
        </Column>
        <Column>
          <ExampleContent width={600} height={100} />
          <ExampleContent width={"100%"} height={200} />
          <ExampleContent width={"100%"} height={500} />
        </Column>
        <Column>
          <ExampleContent width={600} height={100} />
          <ExampleContent width={"100%"} height={400} />
          <ExampleContent width={"100%"} height={500} />
        </Column>
      </Stonework>
    </div>
  );
}
