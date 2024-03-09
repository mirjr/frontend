// Decorators

function renderHtml(pacedId: string, addHtml: Function) {
  return (target: any) => {
    let list = new target();
    document.getElementById(pacedId)!.innerHTML = addHtml(list);
  };
}

@renderHtml("box", (target: ListItem) => `<h1>${target.itemType}</h1>`)
class ListItem {
  itemType: string;
  constructor() {
    this.itemType = "Decorators added";
  }
}
