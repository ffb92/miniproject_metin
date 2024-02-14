import readlineSync from "readline-sync";
import { Item } from "./data/classes.js";
import { mainMenuTemplate } from "./data/templates.js";
import { subMenuTemplate } from "./data/templates.js";
import { sortMenuTemplate } from "./data/templates.js";

// const globalStorage = [];

// Test items hier drunter
const globalStorage = [
  { name: "Comode", id: "8", type: "Wood", quantity: 3, weight: 2 },
  { name: "Table", id: "2", type: "Stone", quantity: 4, weight: 8 },
  { name: "Chair", id: "6", type: "Plastik", quantity: 7, weight: 5 },
  { name: "Statue", id: "3", type: "Gibs", quantity: 1, weight: 5 },
];

function startProgramm() {
  // Das Template anzeigen lassen.
  const mainMenu = readlineSync.question(mainMenuTemplate);
  console.log(mainMenu);
  //   toUpperCase, damit Groß- und Kleinschreibung funktioniert als Eingabe
  switch (mainMenu.toUpperCase()) {
    case "C":
      // Nutzereingabe erhalten, die dann in den entsprechenden Variablen gespeichert wird.
      const name = readlineSync.question("Name des Elements: ");
      const id = readlineSync.question("ID des Elements: ");
      const type = readlineSync.question("Tpy des Elements: ");
      const quantity = readlineSync.question("Wie viel: ");
      const weight = readlineSync.question("Gewicht des Elements: ");
      //   Die Eingaben bzw. Variablen werden an den Constructor in classes.js übergeben.
      const newItem = new Item(name, id, type, quantity, weight);
      //   Das neue Object wird in den globalStorage gespeichert.
      globalStorage.push(newItem);
      console.log("Neues Element erstellt:", newItem);
      break;
    case "R":
      // provisorische Grafik
      console.log("0=================___Read Menu___===================0");
      // Allen Items die neue property totalWeight geben und multiplikation
      globalStorage.forEach((item) => {
        item.totalWeight = item.quantity * item.weight;
      });

      // // Jedes Element durchlaufen und value ausgeben und in neues Array übergeben, um weights und quantities zu isolieren.
      const weights = [];
      globalStorage.forEach((item) => {
        weights.push(item.weight);
      });
      const quantities = [];
      globalStorage.forEach((item) => {
        quantities.push(item.quantity);
      });

      // Mit reduce die quantities und weights separat addieren
      const allItemsWeight = weights.reduce((acc, value) => {
        return acc + value;
      }, 0);
      const allItemsQuantity = quantities.reduce((acc, value) => {
        return acc + value;
      }, 0);
      //  und zum schluss multiplizieren
      const totalItemsWeight = allItemsWeight * allItemsQuantity;
      // Ausgabe der Daten
      const globalStorageInfo = globalStorage.map((item) => {
        return `
- Name: ${item.name}
- ID: ${item.id}
- Type: ${item.type}
- Quantity: ${item.quantity}
- Weight: ${item.weight}
- Total Weight: ${item.totalWeight}
        `;
      });
      console.log(globalStorageInfo.join("\n"));
      console.log(`-The total weight in storage is: ${totalItemsWeight}`);

      // Submenü startet hier
      const subMenu = readlineSync.question(subMenuTemplate);
      console.log(subMenu);
      switch (subMenu.toUpperCase()) {
        // "Zurückkehren" in das Hauptmenü
        case "B":
          startProgramm();
          break;
        // Sortmenü startet hier
        case "S":
          const sortMenu = readlineSync.question(sortMenuTemplate);
          console.log(sortMenu);
          switch (sortMenu.toUpperCase()) {
            case "N":
              // Logik um nach Name zu sortieren
              // Am besten noch durch localecompare ändern
              function orderByTitle(itemA, itemB) {
                if (itemA.name > itemA.name) {
                  return 1;
                } else if (itemA.name < itemB.name) {
                  return -1;
                } else {
                  return 0;
                }
              }

              let result = [...globalStorage].sort(orderByTitle);

              console.log(result);
              break;
            case "I":
              break;
            case "T":
              break;
            case "Q":
              break;
            case "W":
              break;
          }
          break;
      }
      break;
    case "U":
      console.log("0=================___Update Menu___===================0");

      break;
    case "D":
      console.log("0=================___Delete Menu___===================0");

      break;
    case "Q":
      console.log("Programm wird beendet");
      return;

    default:
      console.log("Ungültige Ausgabe");
      startProgramm();
  }
}
startProgramm();
