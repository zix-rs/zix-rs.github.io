import { css } from "lit";


const bash = css`
    .keyword    {
        color: rgb(166, 77, 121);
    }
    pre {
        width: 100%;
    }

    code {
        background: #111;
        padding: 1rem .5rem;
        font-family: monospace;
        width: calc(100% - 1rem);
        word-wrap: break-word;
        box-decoration-break: clone;
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
`

export default bash;
