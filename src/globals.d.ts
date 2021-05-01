export {};

declare global {
  interface HTMLElement {
    _partyDirective?: EventListenerOrEventListenerObject;
  }
}
