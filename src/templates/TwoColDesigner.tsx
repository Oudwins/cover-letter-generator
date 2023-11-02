import React from "react";
import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Geist from "../../fonts/Geist/Geist-Regular.otf";
import GeistMedium from "../../fonts/Geist/Geist-Medium.otf";
import GeistBold from "../../fonts/Geist/Geist-Bold.otf";
import GeistBlack from "../../fonts/Geist/Geist-Black.otf";

Font.register({
  family: "geist",
  fonts: [
    { src: Geist },
    { src: GeistMedium, fontWeight: 500 },
    { src: GeistBold, fontWeight: 700 },
    { src: GeistBlack, fontWeight: 900 },
  ],
});
const styles = StyleSheet.create({
  page: {
    padding: "30px",
    fontSize: "14px",
    fontFamily: "geist",
  },
  section: {
    margin: 5,
    padding: 10,
  },
  bold: {
    fontWeight: 900,
    fontFamily: "geist",
  },
});

const Base = ({
  children,
  title,
  subtitle,
  fullname,
  location,
  phone,
  email,
  to,
  accentColor = "#6366f1",
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  fullname: string;
  location: string;
  phone: string;
  email: string;
  to?: { name: string; location: string };
  accentColor?: string;
}) => (
  <Document>
    <Page
      size="A4"
      style={{
        fontFamily: "geist",
        flexDirection: "row",
        padding: "0 30px",
      }}
    >
      {/* Header */}
      <View
        style={{
          position: "absolute",
          left: "15px",
          right: "15px",
          top: "25px",
          //   transform: "translateX(-100%)",
          //   objectPositionX: "30px",
          //   objectPositionY: "100px",
          border: "5px solid #4b5563",
          //   width: "100%",
          height: "15%",
          zIndex: -1,
        }}
      ></View>
      {/* Left */}
      <View style={{ zIndex: 1, width: "30%", backgroundColor: "blue" }}>
        {" "}
      </View>

      {/* Right */}
      <View style={{ width: "70%", padding: "20px 20px" }}>
        <View style={{ padding: "40px 0px" }}>
          <Text
            style={{
              fontSize: "36px",
              textTransform: "uppercase",
              color: "#111827",
              fontWeight: 900,
              marginLeft: "-5px",
            }}
          >
            Tristan Mayo
          </Text>
          <Text
            style={{
              fontSize: "18px",
              textTransform: "uppercase",
              color: "#111827",
              //   fontWeight: 700,
            }}
          >
            Full-Stack Dev
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Base;
