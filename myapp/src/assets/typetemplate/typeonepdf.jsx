import React from "react";
import { Page, Text, View, Document, StyleSheet, Image, Font } from "@react-pdf/renderer";

// Use built-in Helvetica (no external fetch)
Font.register({
  family: "Helvetica",
  fonts: [
    { src: undefined, fontWeight: "normal" },
    { src: undefined, fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    backgroundColor: "#E5E7EB",
    padding: 25,
  },
  resumeContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    width: "100%",
    minHeight: "100%",
  },
  leftSidebar: {
    width: "33%",
    backgroundColor: "#1D4ED8",
    color: "white",
    padding: 20,
    alignItems: "center",
  },
  rightContent: {
    width: "67%",
    padding: 25,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: "#93C5FD",
  },
  name: { fontSize: 16, fontWeight: "bold", textAlign: "center" },
  title: { fontSize: 10, color: "#BFDBFE", textAlign: "center", marginBottom: 10 },
  section: { width: "100%", marginBottom: 12 },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#60A5FA",
    marginBottom: 6,
    paddingBottom: 2,
  },
  listItem: { fontSize: 10, color: "#DBEAFE", marginBottom: 2 },
  aboutSection: { marginBottom: 12 },
  headingBlue: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1D4ED8",
    borderBottomWidth: 1,
    borderBottomColor: "#BFDBFE",
    marginBottom: 5,
    paddingBottom: 2,
  },
  paragraph: { fontSize: 10, color: "#374151", lineHeight: 1.4 },
  experienceItem: { marginBottom: 8 },
  experienceTitle: { fontSize: 11, fontWeight: "bold", color: "#111827" },
  experienceDetail: { fontSize: 9, color: "#6B7280" },
});

const TypeonePDF = ({ userInformation = {} }) => {
  const safeUser = {
    personalDetails: userInformation.personalDetails || {},
    experience: userInformation.experience || {},
    education: userInformation.education || {},
    media: userInformation.media || {},
    skills: userInformation.skills || {},
  };

  const profileImage =
    userInformation.imageprofile ||
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.resumeContainer}>
          {/* Left Sidebar */}
          <View style={styles.leftSidebar}>
            <Image src={profileImage} style={styles.profileImage} />

            <Text style={styles.name}>{safeUser.personalDetails.name || "Your Name"}</Text>
            <Text style={styles.title}>{safeUser.personalDetails.title || "Your Title"}</Text>

            {/* Contact */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contact</Text>
              <Text style={styles.listItem}>Email: {safeUser.personalDetails.email || "you@email.com"}</Text>
              <Text style={styles.listItem}>Phone: {safeUser.personalDetails.phone || "000-000-0000"}</Text>
              <Text style={styles.listItem}>Address: {safeUser.personalDetails.address || "Your Address"}</Text>
            </View>

            {/* Social */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Social Links</Text>
              <Text style={styles.listItem}>LinkedIn: {safeUser.media.linkedin || "Not Added"}</Text>
              <Text style={styles.listItem}>GitHub: {safeUser.media.github || "Not Added"}</Text>
              <Text style={styles.listItem}>Portfolio: {safeUser.media.portfolio || "Not Added"}</Text>
            </View>

            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <Text style={styles.listItem}>{safeUser.skills.skillone || "Skill One"}</Text>
              <Text style={styles.listItem}>{safeUser.skills.skilltwo || "Skill Two"}</Text>
              <Text style={styles.listItem}>{safeUser.skills.skillthree || "Skill Three"}</Text>
            </View>
          </View>

          {/* Right Content */}
          <View style={styles.rightContent}>
            <View style={styles.aboutSection}>
              <Text style={styles.headingBlue}>About Me</Text>
              <Text style={styles.paragraph}>
                {safeUser.personalDetails.about ||
                  "Write a short summary about yourself, your passion, and experience."}
              </Text>
            </View>

            <View style={styles.aboutSection}>
              <Text style={styles.headingBlue}>Experience</Text>
              <View style={styles.experienceItem}>
                <Text style={styles.experienceTitle}>
                  {safeUser.experience.role || "Your Role"} –{" "}
                  {safeUser.experience.company || "Your Company"}
                </Text>
                <Text style={styles.experienceDetail}>
                  {safeUser.experience.job || "Job Duration or Description"}
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.headingBlue}>Education</Text>
              <Text style={styles.experienceTitle}>{safeUser.education.course || "Course Name"}</Text>
              <Text style={styles.experienceDetail}>
                {safeUser.education.college || "College Name"},{" "}
                {safeUser.education.passyear || "Year"}
              </Text>
              <Text style={styles.experienceDetail}>
                Grade: {safeUser.education.grade || "N/A"}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default TypeonePDF;
