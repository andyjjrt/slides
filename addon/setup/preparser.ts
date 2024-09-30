import { definePreparserSetup } from "@slidev/types";

// @ts-ignore:next-line
export default definePreparserSetup((config) => {
  const slidePathSplit = (config as any).filepath.split("/");
  const slideName = slidePathSplit[slidePathSplit.length - 2];
  return [
    {
      name: "test preparser",
      transformRawLines(lines: string[]) {
        let i = 0;
        while (i < lines.length) {
          const l = lines[i];
          if (l.match(/^_title:/i)) {
            lines.splice(
              i,
              1,
              "download: true",
              "mdc: true",
              "lineNumbers: true",
              "routerMode: hash",
              "theme: ../../theme",
              `url: https://slidev.andyjjrt.cc/${slideName}`,
              "hideInToc: true",
              "layout: cover",
              "transition: slide-left",
              "fonts:",
              "  sans: Outfit, Noto Sans TC",
              "  mono: Ubuntu Mono",
              `title: ${l.replace(/^_title: */i, "")}`
            );
            i += 12;
            continue;
          }
          if (l === "theme: andyjjrt") {
            lines.splice(i, 1, "theme: ../../theme");
            i++;
            continue;
          }
          if (l.match(/^url: https:\/\/slidev.andyjjrt.cc\//i)) {
            lines.splice(i, 1, `url: https://slidev.andyjjrt.cc/${slideName}`);
            i++;
            continue;
          }
          i++;
        }
      },
    },
  ];
});
