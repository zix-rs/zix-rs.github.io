import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { PALETTE } from "./colors";
import "./presentation.js";
import "./installation.js";
import './components/header/index.js'

@customElement('zix-web')
export class ZixWeb extends LitElement  {
    static styles = css`

        :host   {
            display: grid;
            grid-template-rows: 6rem auto 7rem;
            grid-template-columns: 100%;
            background-color: ${PALETTE.primary};
            min-height: 100vh;
            justify-items: center;
            width: 100%;
        }

        main, footer  {
            width: 100%;
        }


        footer  {
            background-color: ${PALETTE.tertiary};
            width: 100%;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        footer p    {
            font-size: 1.5rem;
            font-family: "Gasoek One", serif;
            font-weight: 400;
            font-style: normal;
            color: #eee
        }
    `;

    render() {
        return html`
            <zix-header>
            </zix-header>
            <main>
                <presentation-section></presentation-section>
                <installation-section></presentation-section>
            </main>
            <footer>
                <p>ZIX</p>
            </footer>
        `
    };

}
