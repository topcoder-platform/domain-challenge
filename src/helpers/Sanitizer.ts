import * as xss from "xss";

const xssWhiteTags = xss.getDefaultWhiteList();
for (const key of Object.keys(xssWhiteTags)) {
  // Allow style attribute
  if (!xssWhiteTags[key]?.includes("style")) {
    xssWhiteTags[key]?.push("style");
  }
}

// XSS filter for html
const htmlXSS = new xss.FilterXSS();

// XSS filter for markdown
const markdownXSS = new xss.FilterXSS({
  whiteList: xssWhiteTags,
  escapeHtml: (html) => {
    // Handle blockquote which starts with '>'
    const blockquoteMatched = html.match(/^\s*>/);
    if (blockquoteMatched) {
      // prettier-ignore
      return blockquoteMatched[0] + html.substring(blockquoteMatched[0].length).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  },
});

export function sanitize(str: string, format: string = "html"): string {
  if (!str) {
    return str;
  }
  return format === "markdown" ? markdownXSS.process(str) : htmlXSS.process(str);
}
