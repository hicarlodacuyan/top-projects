export default function shipyardComponent(theFleet) {
  return theFleet
    .map((ship) => {
      return `
        <p>${ship.getName()} (${ship.coords.length})</p>
    `;
    })
    .join("");
}
