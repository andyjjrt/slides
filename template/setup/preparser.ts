import { definePreparserSetup } from "@slidev/types";

export default definePreparserSetup((config) => {
  const slidePathSplit = (config as any).filepath.split("/");
  const slideName = slidePathSplit[slidePathSplit.length - 2];
  console.log(slideName);
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
              "theme: andyjjrt",
              `url: https://slidev.andyjjrt.cc/${slideName}`,
              `title: ${l.replace(/^_title: */i, "")}`
            );
            continue;
          }
          i++;
        }
      },
    },
  ];
});
