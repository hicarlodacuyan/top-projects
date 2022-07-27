import "./style.css";
import shipFactory from "./factories/shipFactory";

const carrier = shipFactory(5);
carrier.hit(0);
carrier.hit(1);
carrier.hit(2);
carrier.hit(3);

console.log(carrier);
console.log(carrier.isSunk());
