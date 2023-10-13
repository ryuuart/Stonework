import ExampleContent from "./components/examples/ExampleContent";
import { ColumnStonework } from "./components";
import { useState } from "react";

export default function () {
  const [content] = useState<React.ReactElement[][]>([
    [
      <ExampleContent width={"auto"} height={"auto"} aspectRatio="1 / 1" />,
      <ExampleContent width={200} height={200} />,
    ],
    [
      <ExampleContent width={600} height={100} />,
      <ExampleContent width={"100%"} height={200} />,
      <ExampleContent width={"100%"} height={500} />,
    ],
    [
      <ExampleContent width={600} height={100} />,
      <ExampleContent width={"100%"} height={400} />,
      <ExampleContent width={"100%"} height={500} />,
    ],
  ]);

  return (
    <div>
      <h1>Hello!</h1>
      <ColumnStonework content={content} gap={"1rem"} />
    </div>
  );
}
