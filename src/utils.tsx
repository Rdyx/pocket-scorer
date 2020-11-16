export function getInputValue(targetInputId: string) {
  return (document.getElementById(targetInputId) as HTMLInputElement).value;
}

export function setHTMLElementInnerHtml(targetHTMLElementId: string, value: number) {
  (document.getElementById(targetHTMLElementId) as HTMLElement).innerHTML = value.toString();
}
