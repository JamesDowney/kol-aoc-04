import { fileToBuffer, print } from "kolmafia";

export default function main(): void {
  const input = fileToBuffer("input.txt")
    .trim()
    .split(/\n/g)
    .map((element: string) => element.split(","))
    .map((element) =>
      element.map((element) => element.split("-").map((element) => parseInt(element)))
    );

  const solution1 = input.reduce(
    (accumulator, pair) =>
      accumulator +
      ((pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) ||
      (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1])
        ? 1
        : 0),
    0
  );

  const solution2 = input.reduce(
    (accumulator, pair) =>
      accumulator +
      ((pair[0][0] >= pair[1][0] && pair[0][0] <= pair[1][1]) ||
      (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][0])
        ? 1
        : 0),
    0
  );

  print("solution 1 is: " + solution1);
  print("solution 2 is: " + solution2);
}
