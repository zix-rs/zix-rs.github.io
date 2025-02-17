import { css } from "lit";
import { PALETTE } from "./colors";


const bash = css`
    .keyword    {
        color: #fff;
    }
    pre {
        width: 100%;
    }

    code {
        background: ${PALETTE.secondary};
        padding: 1rem 1rem;
        font-family: monospace;
        width: calc(100% - 1.5rem);
        word-wrap: break-word;
        box-decoration-break: clone;
        box-shadow: 0 10px 4px -4px #111;
        border-radius: 10px
    }


    pre code {
        display: block;
        white-space: pre;
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        max-width: 100%;
        min-width: 100px;
        text-align: start;
    }

    .flag {
        color: #66ccff;
        font-weight: bold;
    }

    .url {
        color: #FFB200
    }

    .string {
        color: #999
    }
`

export default bash;
