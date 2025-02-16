import { bashKeywords, jsKeywords, powershellKeywords, rustKeywords } from "./keywords";

enum Lang {
    Bash = 'bash',
    Rust = 'rust',
    Powershell = 'powershell',
    Text = 'text'
}

const langMap = new Map<string, Lang>([
    ["powershell", Lang.Powershell],
    ["ps1", Lang.Powershell],
    ["rust", Lang.Rust],
    ["rs", Lang.Rust],
    ["bash", Lang.Bash],
    ["sh", Lang.Bash],
])

function highlight(lang: string, code: string): string  {
    let lang_state: Lang = langMap.get(lang) ?? Lang.Text;
    let colorCode: string = codeNodes(lang_state, code, lang)

    return colorCode;
}

function codeNodes(lang: Lang, code: string, la: string): string {
    const keywordsMap = {
        rust: rustKeywords,
        bash: bashKeywords,
        powershell: powershellKeywords,
        javascript: jsKeywords,
    };

    let keys = keywordsMap[la as keyof typeof keywordsMap] || new Set()
    let wordRegex = /\b\w+\b/g;
    let flagRegex = /(?:^|\s)(-[-\w]+)/g;
    let highlightColor = code.replace(wordRegex, (word) =>   {
        return keys.has(word) ? `<span class="keyword">${word}</span>` : word;
    })

    highlightColor = highlightColor.replace(flagRegex, word =>  {
        return `<span class="flag">${word}</span>`
    })

    return `<code class="language-${lang}">${highlightColor}</code>`
}


export default highlight;
