const htmlBody = document.querySelector('body')
class HtmlImport extends HTMLElement {
  constructor() {
    super()
    const src = this.dataset.src
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', this.reqListener)
    xhr.open('GET', src)
    xhr.responseType = 'text'
    xhr.send()
  }

  reqListener() {
    console.log(this.responseText)
    var node = document.createElement('div')
    node.innerHTML = this.responseText
    htmlBody.appendChild(node)
  }
}

customElements.define('html-import', HtmlImport)
