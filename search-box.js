import { create } from "https://js.sabae.cc/dom.js";

class SearchBox extends HTMLElement {
  constructor() {
    super();

    this.inp = create("input", this);
    this.inp.type = "text";
    this.btn = create("button", this);
    this.btn.textContent = "検索";
    //this.btn.innerHTML = "&#xf002";
  }
  get value() {
    return this.inp.value;
  }
  set value(val) {
    super.inp.value = val;
  }
}

customElements.define("search-box", SearchBox);

export { SearchBox };
