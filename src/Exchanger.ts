export class Exchanger {
  private dollar: number;
  private euro: number;
  private frank: number;

  constructor(dollar: number, euro: number, frank: number) {
    this.dollar = dollar;
    this.euro = euro;
    this.frank = frank;
  }

  public toDollar(): number {
    const dollar = Math.round(this.dollar * 4.27 * 100) / 100;
    return dollar;
  }

  public toEuro(): number {
    const euro = Math.round(this.euro * 4.57 * 100) / 100;
    return euro;
  }

  public toFrank(): number {
    const frank = Math.round(this.frank * 4.3 * 100) / 100;
    return frank;
  }
}
