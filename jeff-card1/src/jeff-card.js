import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class JeffCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--jeff-card-background-color);
    }

    main {
      flex-grow: 1;
    }

    .buttons{
    padding: 5px;
    color: blue;
 }
 
 .buttons:hover{
   background-color: orange;
 }
 
 .buttons:focus {
   background-color: orange; 
 }
 
 
 .all{
   border-width: 5px;
   width: 400px;
   max-width: 500px;
   margin: auto;
   margin-top: 10px;
 }
 
 .title{
   text-align: center;
   font-size: 40px;
 }
 
 .name{
   text-align: center;
 }
 .content{
    text-align: center;
 }
 img {
   width: 300px;
 }
 
 p {
 /*   text-align: left;  */
   text-indent: 5%;
   font-size: 18px;
 }
 
 .detailsButton {
   margin: 12px;
   position: center; 
   color: blue;
 }
 
   @media (min-width: 500px) and (max-width: 800px) {
     
     .detailsButton {
       display: none;
     }
 
 @media (max-width: 500px) {
   .all{
     transform: scale(0.8);
   }
 }
}
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <button id="copy" class="buttons">Copy</button>

<button id="toggleBackGroundColor" class = "buttons">Change Background Color</button>

<button id="changeTitle" class = "buttons">Change Title</button>

<button id="deleteButton" class = "buttons">Delete Last Instance</button>

<section class="all">
<header class ="name">
  <h1 id = "mainTitle" class="title">Me When The Code Works</h1>
  </header>
   <p>
My face when he code finaly decides to work.  This is Bryce.  He looks so cool.
  </p>
<section class="content">
  <img src = "https://cdn.discordapp.com/attachments/1062806966021402684/1063160172773654659/IMG_9420.png" width=200px/>
    
    <button id = "detailsBtn" class="detailsButton">Details</button>
  
 </section>
    `;
  }
}

customElements.define('jeff-card', JeffCard);