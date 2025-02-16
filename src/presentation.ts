import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('presentation-section')
export class Presentation extends LitElement {
    static styles = css`
        :host   {
            color: #fff;
            margin: 2rem 0;
            font-family: "Galdeano", serif;
            font-weight: 400;
            font-style: normal;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
        }

        figure  {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap-reverse;
            gap: 3rem;
            max-width: 90%;
            cursor: default;
        }

        figure img  {
            width: clamp(60%, 500px, 75%);
            height: auto;
            box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.27);
            border-inline: 3px solid black;
        }

        figure figcaption {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .title {
            font-size: 4rem;
            font-weight: bold;
            font-family: "Gasoek One", serif;
            font-weight: 400;
            font-style: normal;
            color: #8D8D8D;
            margin: 0
        }

        .subtitle {
            font-size: 1.2rem;
            font-family: "Galdeano", serif;
            font-weight: 400;
            font-style: normal;
        }

        .continuos  {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #8D8D8D;
            width: 100%;
            gap: 1rem;
        }

        .continuos h3    {
            font-size: clamp(1rem, 1.5vw, 2rem);
            text-align: center
        }
    `;
    render() {
        return html`
            <figure class="title-section">
                <img src="/zix.gif" alt="zix">
                <figcaption>
                    <h1 class="title">ZIX</h1>
                    <h2 class="subtitle">AN LS ALTERNATIVE</h2>
                </figcaption>
            </figure>
            <section class="continuos">
                <h3>READY TO REVOLUTIONIZE YOUR TERMINAL?</h3>
                <img src="/arrow.svg" alt="arrow">
            </section>
        `;
    }
}
