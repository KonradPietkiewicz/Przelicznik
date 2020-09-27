import { Exchanger } from "./Exchanger";

initEvntListener();

function initEvntListener() {
  const btn: HTMLElement | null = document.getElementById("exchange");
  const resultText: HTMLElement | null = document.getElementById("result");

  if (btn !== null) {
    if (btn instanceof HTMLButtonElement) {
      btn.addEventListener<"click">("click", (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const ex: Exchanger = new Exchanger(getDollar(), getEuro(), getFrank());
        if (resultText !== null) {
          if (ex.toDollar()) {
            resultText.innerHTML = `Suma po przeliczeniu: ${ex.toDollar()} zł`;
          } else if (ex.toEuro()) {
            resultText.innerHTML = `Suma po przeliczeniu: ${ex.toEuro()} zł`;
          } else if (ex.toFrank()) {
            resultText.innerHTML = `Suma po przeliczeniu: ${ex.toFrank()} zł`;
          }
        }
      });
    } else {
      throw new Error("HTML element for exchange is not a button");
    }
  } else {
    throw new Error("Button for exchange not found");
  }
}

function getFrank(): number {
  const frank: HTMLElement | null = document.getElementById("frank");
  if (frank !== null && frank instanceof HTMLInputElement) {
    return frank.valueAsNumber;
  } else {
    throw new Error("HTML element is null or wrong type");
  }
}

function getEuro(): number {
  const euro: HTMLElement | null = document.getElementById("euro");
  if (euro !== null && euro instanceof HTMLInputElement) {
    return euro.valueAsNumber;
  } else {
    throw new Error("HTML element is null or wrong type");
  }
}

function getDollar(): number {
  const dollar: HTMLElement | null = document.getElementById("dollar");
  if (dollar !== null && dollar instanceof HTMLInputElement) {
    return dollar.valueAsNumber;
  } else {
    throw new Error("HTML element is null or wrong type");
  }
}
