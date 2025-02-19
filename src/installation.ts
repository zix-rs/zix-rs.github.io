import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import './components/code-block/index.js'

@customElement('installation-section')
export class Installation extends LitElement {
    static styles = css`
        :host   {
            color: #fff;
            margin: 1rem 0;
            font-family: "Galdeano", serif;
            font-weight: 400;
            font-style: normal;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
        }

        h2  {
            font-weight: bold;
            font-family: "Gasoek One", serif;
            font-weight: 400;
            font-style: normal;
            color: #8D8D8D;
            width: calc(100%-2rem);
            padding: 0 2rem;
        }

        .installs   {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .install    {
            width: 90%;
            font-family: Galdeano, serif;
        }

        .install p {
            line-height: 1.4rem;
        }
    `;



    render() {
        return html`
            <h2>INSTALLATION</h2>
            <section class="installs">
                <div class="install">
                    <h3>
                        Linux (using curl)
                    </h3>
                    <p>
                        To install <strong>Zix</strong> on Linux, use the following command.
                        This script will automatically download and install Zix using <code>curl</code>:
                    </p>
                    <code-block lang="bash">
                        curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/zix-rs/zix/main/scripts/install.sh | sh
                    </code-block>
                </div>
                <div class="install">
                    <h3>
                        Powershell (Admin)
                    </h3>
                    <p>
                        To install <strong>Zix</strong> on Windows, run the following command in PowerShell.
                        This script will download and execute the installer automatically:
                    </p>
                    <code-block lang="powershell">
                        powershell -c "irm https://raw.githubusercontent.com/zix-rs/zix/main/scripts/install.ps1|iex"
                    </code-block>
                </div>
            </section>
        `;
    }
}
