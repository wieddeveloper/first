const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" href="/css/common.css">
  <style>
  #main_footer {
    background: black;
    height: 100px;
    text-align: center;
    
    color: white; font-size: 15px;
}

 
  </style>
  <footer id="main_footer">
       
  <div>
      주식회사 W | 대표 : 정성호  <br />
      사업문의: ddd@ddd.com  <br />
      사업자 등록번호: 134323-432-333  <br />
      주소 : 인천 어디어디
  </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
   // const fontAwesome = document.querySelector('link[href*="fontawesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    // if (fontAwesome) {
    //   shadowRoot.appendChild(fontAwesome.cloneNode());
    // }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);