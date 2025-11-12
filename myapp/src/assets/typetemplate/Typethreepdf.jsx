import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Create PDF styles (like Tailwind equivalent)
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 30,
    fontSize: 12,
    color: "#333",
  },
  section: {
    marginBottom: 15,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    paddingBottom: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
    color: "#555",
  },
  paragraph: {
    marginTop: 5,
    lineHeight: 1.5,
  },
  listItem: {
    marginLeft: 10,
    marginBottom: 3,
  },
});

const TypeThreePDF = ({ userInformation }) => (
  <Document>
    <Page style={styles.page}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>
          {userInformation.personalDetails.name || "Your Full Name"}
        </Text>
        <Text style={styles.title}>
          {userInformation.personalDetails.title || "Your Professional Title"}
        </Text>
        <Text>
          {userInformation.personalDetails.email || "you@email.com"} |{" "}
          {userInformation.personalDetails.phone || "000-000-0000"} |{" "}
          {userInformation.personalDetails.address || "Your City, Country"}
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Professional Summary</Text>
        <Text style={styles.paragraph}>
          {userInformation.personalDetails.about ||
            "A concise summary about your skills, experience, and career goals."}
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Key Skills</Text>
        {[
          userInformation.skills.skillone,
          userInformation.skills.skilltwo,
          userInformation.skills.skillthree,
          userInformation.skills.skillfour,
          userInformation.skills.skillfive,
        ].map((skill, index) => (
          <Text key={index} style={styles.listItem}>
            • {skill || `Skill ${index + 1}`}
          </Text>
        ))}
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Professional Experience</Text>
        <Text style={{ fontWeight: "bold" }}>
          {userInformation.experience.role || "Job Title"} —{" "}
          {userInformation.experience.company || "Company Name"}
        </Text>
        <Text>
          {userInformation.experience.duration || "Start Date – End Date"}
        </Text>
        <Text style={styles.paragraph}>
          {userInformation.experience.job ||
            "Briefly describe your responsibilities and key achievements."}
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Education</Text>
        <Text style={{ fontWeight: "bold" }}>
          {userInformation.education.course || "Degree / Course Name"}
        </Text>
        <Text>
          {userInformation.education.college || "College / University Name"},{" "}
          {userInformation.education.passyear || "Year"}
        </Text>
        <Text>
          Grade: {userInformation.education.grade || "N/A"}
        </Text>
      </View>

      {/* Online Profiles */}
      <View style={styles.section}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Online Profiles</Text>
        <Text>LinkedIn: {userInformation.media.linkedin || "Not Added"}</Text>
        <Text>GitHub: {userInformation.media.github || "Not Added"}</Text>
        <Text>Portfolio: {userInformation.media.portfolio || "Not Added"}</Text>
      </View>
    </Page>
  </Document>
);

export default TypeThreePDF;
