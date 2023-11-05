import Render from "./render";
import dotenv from "dotenv";
import textTemplateParser from "./textTemplateParser";
import Papa from "papaparse";
import fs from "fs";
dotenv.config();
const fpath = `${__dirname}/../applications.tsv`;

fs.readFile(fpath, { encoding: "utf-8" }, (err, f) => {
  if (err) return console.error(err);
  Papa.parse(f, {
    // delimiter: ",",
    header: true,
    complete: async function (res, file) {
      const docPromises = res.data.map(async (rowData: any) => {
        if (!rowData.filename) return;

        const data = {
          title: rowData.title || "John",
          subtitle: rowData.subtitle || "Software Engineer",
          fullname: process.env.FULL_NAME || "John Doe",
          location: process.env.LOCATION || "London, UK",
          email: process.env.CONTACT_EMAIL || "example@gmail.com",
          phone: process.env.CONTACT_PHONE || "+34 15141513",
          to: {
            name: rowData.to_name || "Some name",
            fullname: rowData.to_fullname || "The full name",
            location: rowData.to_location || "New York, USA",
          },
          companyName: rowData.company_name || "Evil Corp",
          position: rowData.position || "Software Engineer",
          customParagraphs: [rowData.custom_p1, rowData.custom_p2],
        };
        const parser = await textTemplateParser(
          rowData.content_file || "example.txt"
        );
        const text = parser(data);

        await Render({
          data,
          text: text,
          filename: rowData.filename || "example",
        });
      });

      await Promise.all(docPromises);
    },
  });
});
