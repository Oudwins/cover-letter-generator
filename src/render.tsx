import ReactPDF from "@react-pdf/renderer";
import React from "react";
import TwoColBasic from "./templates/TwoColBasic";
import TemplateData from "./TemplateData";

export default async function Render({
  data,
  text,
  template,
  filename,
}: {
  data: TemplateData;
  text: string[];
  template?: string;
  filename: string;
}) {
  let tmp;

  switch (template) {
    case "TwoColBasic":
      tmp = <TwoColBasic data={data} text={text} />;
      break;
    default:
      tmp = <TwoColBasic data={data} text={text} />;
  }

  await ReactPDF.render(tmp, `${__dirname}/../covers/${filename}`);
}
