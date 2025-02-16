// const bashScriptKeywords = new Set([
//     "if", "then", "else", "elif", "fi", "case", "esac", "for", "select",
//     "while", "until", "do", "done", "in", "function", "time", "coproc",
//     "break", "continue", "return", "exit", "declare", "local", "readonly",
//     "export", "unset", "trap", "alias", "unalias", "test"
// ]);
const bashKeywords = new Set([
    "cd", "ls", "pwd", "echo", "cat", "touch", "rm", "cp", "mv", "mkdir", "rmdir",
    "chmod", "chown", "find", "grep", "sed", "awk", "sort", "uniq", "head", "tail",
    "ps", "top", "htop", "kill", "killall", "jobs", "bg", "fg", "nice", "renice",
    "nohup", "timeout", "watch", "uptime", "uname", "whoami", "id", "groups",
    "ping", "curl", "wget", "netstat", "ss", "traceroute", "nslookup", "dig", "ip",
    "ifconfig", "route", "arp", "iwconfig", "scp", "sftp", "rsync",
    "export", "unset", "alias", "unalias", "env", "set", "read", "echo", "source",
    ">", ">>", "<", "|", "&", "&&", "||",
    "if", "then", "else", "elif", "fi", "for", "while", "until", "case", "esac",
    "select", "do", "done", "break", "continue",
    "function", "return", "trap", "exit", "exec", "wait", "test", "[", "]",
    "apt", "dnf", "yum", "pacman", "brew", "snap", "flatpak", "pip", "npm",
    "tar", "zip", "unzip", "gzip", "gunzip", "bzip2", "xz", "df", "du", "mount", "umount",
    "ln", "basename", "dirname", "cut", "paste", "tee", "xargs", "wc", "diff", "cmp",
    "stat", "shred", "clear", "history", "date", "cal"
]);


const rustKeywords = new Set([
    "as", "async", "await", "break", "const", "continue", "crate", "dyn",
    "else", "enum", "extern", "false", "fn", "for", "if", "impl", "in",
    "let", "loop", "match", "mod", "move", "mut", "pub", "ref", "return",
    "Self", "self", "static", "struct", "super", "trait", "true", "type",
    "unsafe", "use", "where", "while", "abstract", "become", "box", "do",
    "final", "macro", "override", "priv", "typeof", "unsized", "virtual",
    "yield", "try"
]);

const powershellKeywords = new Set([
    "Write-Host", "Write-Output", "Write-Error", "Write-Warning", "Write-Debug",
    "Get-Process", "Stop-Process", "Start-Process", "Wait-Process", "Select-Object",
    "Where-Object", "ForEach-Object", "Sort-Object", "Measure-Object",
    "New-Object", "Remove-Item", "Rename-Item", "Move-Item", "Copy-Item",
    "Set-Location", "Get-Location", "Test-Path", "Join-Path", "Split-Path",
    "Invoke-WebRequest", "Invoke-RestMethod", "Invoke-Expression",
    "Get-Help", "Get-Command", "Get-Module", "Import-Module",
    "Set-Variable", "Get-Variable", "Clear-Variable",
    "If", "Else", "For", "While", "Do", "Switch", "Break", "Continue",
    "Function", "Return", "Try", "Catch", "Finally", "powershell"
]);


// const powershellScriptKeywords = new Set([
//     "function", "if", "else", "elseif", "switch", "foreach", "for", "while",
//     "do", "until", "return", "exit", "continue", "break", "trap", "throw",
//     "try", "catch", "finally", "begin", "process", "end", "param", "dynamicparam"
// ]);

const jsKeywords = new Set([
    "await", "break", "case", "catch", "class", "const", "continue", "debugger",
    "default", "delete", "do", "else", "enum", "export", "extends", "false",
    "finally", "for", "function", "if", "implements", "import", "in", "instanceof",
    "interface", "let", "new", "null", "package", "private", "protected", "public",
    "return", "super", "switch", "static", "this", "throw", "try", "true", "typeof",
    "var", "void", "while", "with", "yield"
]);

export { jsKeywords, rustKeywords, powershellKeywords, bashKeywords }
