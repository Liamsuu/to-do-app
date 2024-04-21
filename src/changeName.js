export default function changeName(originalName) {
  const input = prompt("Change name:");
  if (input === null || input === "" || input.match(/^ *$/)) {
    return originalName;
  } else {
    return input;
  }
}
