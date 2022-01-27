const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" href="/css/common.css">
   <style>
 


#main_header {
    height: 100%;  
    background: gray;
    color: white;
 
}

#main_header a {
    color: white;
}

#main_header > .gnb_container {
    background: black;
    height: 60px;
    width: 100%;
    position: fixed;
    z-index: 1;
}

#main_header .gnb {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
}

#main_header .logo {
    float: left;
    width: 190px;
    margin-top: 12px;
}

 

#main_header ul.nav {
    float: right;
    overflow: hidden;
    padding-left: 10px;
}

#main_header ul.nav > li {
    float: right;
    padding: 22px 17px;
}

#main_header ul.nav > li:nth-child(4), li:nth-child(5) {
    display: none;
}

#main_header .setting {
    float: right;
    width: 21px;
    text-align:right;
    padding-top: 12px;
}

#main_header .trigger {
    float: right;
    width: 23px;
    text-align:right;
    padding-top: 25px;
    display: none;
   
}

#main_header .trigger .close {
    display: none;
}



@media screen and (max-width: 767px) {
    /* #main_header {
        background: url("../img/lens.jpg");
        background-size: cover;
    } */

    #main_header .gnb, .lnb {
        width: 90vw;
    }

    #main_header ul.nav { 
        display: none;
    }

    #main_header .setting {
        display: none;
    }

    #main_header .gnb_container .gnb .trigger {
        display: block;
         
    }

   
}

@media screen and (min-width: 768px) and (max-width: 1023px){ 
    /* #main_header {
        background: url("/img/lens.jpg");
        background-size: cover;
    } */

    #main_header .gnb, .lnb {
        width: 90vw;
    }

 
}

@media screen and (min-width: 1024px) { 
    /* #main_header {
        background: url("/img/lens.jpg");
        background-size: cover;
    } */

    #main_header .gnb, .lnb {

        width: 90vw;
        /* width: 100%;
        margin-left: 50px;
        margin-right: 250px; */
        /* width: 960px; */
    }
}

  </style>
  <header id="main_header">
        <!-- nav 메뉴 -->
        <div class="gnb_container">
            <div class="gnb menu">
                <div class="logo">
                    <a href="/index.html"><img src="/img/meta.svg" width="80px"alt="로고"></a>
                   
                </div>
                <ul class="nav">
                    <li><a href="/pages/news/news.html">뉴스</a></li>
                    <li><a href="/pages/raise/raise.html">키우기</a></li>
                    <li><a href="/pages/place/place.html">위치</a></li>
                    <li><a href="/pages/place/place.html">공지</a></li>
                </ul>
                <div class="trigger">
                    <a href="#" class="mobile hamburger"><i class="fas fa-bars fa-lg"></i></a>
                    <a href="#" class="mobile close"><i class="fas fa-times fa-lg"></i></a>
                </div>
            </div>
        </div>
       
  
    </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
    
    const fontAwesome = document.querySelector('link[href*="fontawesome"]');
    

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

  }
}

customElements.define('header-component', Header);