import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { PALETTE } from "../../colors";

@customElement('zix-header')
export class ZixHeader extends LitElement   {
    static styles = css`
        :host {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        header  {
            height: 4rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            background-color: ${PALETTE.tertiary};
            box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.71);
            width: calc(95% - 2rem);
            margin: 1rem 0;
            color: ${PALETTE.ctext};
            gap: 1rem;
            padding: 0 1rem;
            flex-direction: row;
            border-radius: 5px;
            box-shadow: 0px 0px 10px black;
        }

        .social {
            background-color: #3B1C32;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            height: 1rem;
            padding: .5rem 1.7rem;
            gap: 0.5rem;
            border-radius: 3px
        }

        .social p {
            margin: 0;
            font-size: 0.7rem;
            color: white;
        }

        .social img {
            height: 1rem;
            width: auto;
        }
    `

    render(){
        return html`
            <header>
                <a class="social" href="https://twitter.com/arkeazs">
                    <p>TWITTER</p>
                    <img src="/twitter.svg" alt="twitter">
                </a>
                <a class="social" href="https://github.com/zix-rs/zix">
                    <p>GITHUB</p>
                    <img src="/github.svg" alt="github">
                </a>
            </header>
        `
    }
}
