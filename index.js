const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garield"];
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}