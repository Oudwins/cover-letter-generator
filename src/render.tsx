import ReactPDF from "@react-pdf/renderer";
import React from "react";
import TwoColBasic from "./templates/TwoColBasic";
import TemplateData from "./TemplateData";
import fs from "fs/promises";

const rootpath = `${__dirname}/../covers`;

export default async function Render({
  data,
  text,
  template,
  filename,
}: {
  data: TemplateData;
  text: string;
  template?: string;
  filename: string;
}) {
  const paragraphs = text.split("\n");
  let tmp;

  switch (template) {
    case "TwoColBasic":
      tmp = <TwoColBasic data={data} text={paragraphs} />;
      break;
    default:
      tmp = <TwoColBasic data={data} text={paragraphs} />;
  }

  await ReactPDF.render(tmp, `${rootpath}/${filename}.pdf`);

  await fs.writeFile(`${rootpath}/${filename}.txt`, text);
}
