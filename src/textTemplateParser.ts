import TemplateData from "./TemplateData";
import fs from "fs/promises";

export default async function textTemplateParser(template: string) {
  let file = await fs.readFile(`${__dirname}/../content/${template}`, {
    encoding: "utf-8",
  });

  const templateString = new Function("data", `return \`${file}\`;`);

  return (data: TemplateData): string => templateString(data);
}
