import React from "react";
import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Geist from "../fonts/Geist/Geist-Regular.otf";
import GeistMedium from "../fonts/Geist/Geist-Medium.otf";
import GeistBold from "../fonts/Geist/Geist-Bold.otf";
import GeistBlack from "../fonts/Geist/Geist-Black.otf";
import TemplateData from "../TemplateData";

Font.register({
  family: "geist",
  fonts: [
    { src: Geist },
    { src: GeistMedium, fontWeight: 500 },
    { src: GeistBold, fontWeight: 700 },
    { src: GeistBlack, fontWeight: 900 },
  ],
});
export const styles = StyleSheet.create({
  page: {
    // flexDirection: "col",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // backgroundColor: "#E4E4E4",
    padding: "30px",
    fontSize: "14px",
    fontFamily: "geist",
  },
  paragraph: {
    marginBottom: "5px",
    textIndent: "-3px",
    textAlign: "justify",
    // backgroundColor: "red",
  },
});

// Create Document Component
export default function TwoColBasic({
  data,
  text,
  accentColor = "#6366f1",
}: {
  data: TemplateData;
  text: string[];
  accentColor?: string;
}) {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          flexDirection: "column",
          fontFamily: "geist",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              // backgroundColor: "red",
              maxWidth: "35%",
              // flexGrow: 1,
              padding: "60px 10px 0px 40px",
              // fontFamily: "geist",
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: 900,
                  fontSize: "26px",
                  textTransform: "uppercase",
                  letterSpacing: 1.1,
                  padding: "0 0 10px 0",
                }}
              >
                {data.title}
              </Text>
              {data.subtitle.split(" ").map((el, idx) => (
                <Text
                  key={idx}
                  style={{
                    marginBottom: "5px",
                    color: accentColor,
                    letterSpacing: 0.5,
                    fontSize: "16px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                  }}
                >
                  {el}
                </Text>
              ))}
              {/* <Text>{subtitle}</Text> */}
            </View>
            <View
              style={{
                height: "2px",
                backgroundColor: "#4338ca",
                width: "15%",
                margin: "20px 0 25px 0",
              }}
            ></View>
            <View style={{ fontSize: "10px", color: "#374151" }}>
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "black",
                  marginBottom: "4px",
                }}
              >
                {data.fullname}
              </Text>
              <Text
                style={{
                  marginBottom: "4px",
                }}
              >
                {data.location}
              </Text>
              <Text
                style={{
                  marginBottom: "4px",
                }}
              >
                {data.phone}
              </Text>
              <Text
                style={{
                  marginBottom: "4px",
                }}
              >
                {data.email}
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: "60px 50px 10px 20px",
              // backgroundColor: "blue",
              maxWidth: "65%",
            }}
          >
            <View
              style={{
                height: "3px",
                marginBottom: "40px",
                width: "90%",
                backgroundColor: accentColor,
              }}
            ></View>
            {data.to && (
              <View style={{ fontSize: "12px", marginBottom: "40px" }}>
                <Text
                  style={{
                    fontWeight: 700,
                    marginLeft: "-4px",
                    marginBottom: "3px",
                  }}
                >
                  {data.to.fullname}
                </Text>
                <Text style={{ color: "#4b5563", marginLeft: "-4px" }}>
                  {data.to.location}
                </Text>
              </View>
            )}
            {/* Letter */}
            <View
              style={{
                fontSize: "11px",
                color: "#4b5563",
              }}
            >
              {text.map((p, idx) => {
                if (idx === 0)
                  return (
                    <Text
                      key={idx}
                      style={{ fontSize: "14px", marginBottom: "10px" }}
                    >
                      {p}
                    </Text>
                  );
                if (idx === text.length - 1) return <Text key={idx}>{p}</Text>;

                return (
                  <Text key={idx} style={styles.paragraph}>
                    {p}
                  </Text>
                );
              })}
            </View>
            <View style={{ marginTop: "10px" }}>
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: accentColor,
                }}
              >
                {data.fullname}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
