import React from "react";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

// ✅ Use Google Fonts CDN (CORS safe)
Font.register({
  family: "Roboto",
  src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    fontSize: 12,
    padding: 40,
    color: "#111",
    backgroundColor: "#fff",
    lineHeight: 1.6,
  },
  header: {
    borderBottom: "1pt solid #ccc",
    paddingBottom: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  role: {
    fontSize: 12,
    color: "#555",
  },
  contact: {
    fontSize: 10,
    color: "#777",
    marginTop: 5,
  },
  section: {
    marginTop: 20,
  },
  paragraph: {
    marginBottom: 12,
    textAlign: "justify",
  },
});

export default function CoverLetterPDF({ resume, aiText }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resume.name}</Text>
          <Text style={styles.role}>{resume.role}</Text>
          <Text style={styles.contact}>
            {resume.email} | {resume.phone} | {resume.location}
          </Text>
        </View>

        <View>
          <Text>{new Date().toLocaleDateString()}</Text>
          <Text>Hiring Manager</Text>
          <Text>{resume.company}</Text>
          <Text>{resume.companyLocation}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.paragraph}>Dear Hiring Manager,</Text>

          {aiText ? (
            <Text style={styles.paragraph}>{aiText}</Text>
          ) : (
            <>
              <Text style={styles.paragraph}>
                I am writing to express my interest in the {resume.role} position at{" "}
                {resume.company}. With over {resume.experience} of experience building modern,
                responsive web applications using {resume.skills.join(", ")}, I am confident that
                my technical skills and collaborative work style would be a strong fit for your team.
              </Text>
              <Text style={styles.paragraph}>
                In my current role at CalmConnect, I led front-end development for a mental health
                companion platform using React, Tailwind CSS, and integrated AI APIs. My efforts
                improved load times and user engagement significantly.
              </Text>
              <Text style={styles.paragraph}>
                I enjoy solving complex problems, optimizing user experiences, and ensuring
                maintainable code through testing and documentation.
              </Text>
              <Text style={styles.paragraph}>
                I am excited about the opportunity to contribute to {resume.company} and would
                welcome the chance to discuss how my background supports your product goals.
              </Text>
            </>
          )}

          <Text style={[styles.paragraph, { marginTop: 20 }]}>Sincerely,</Text>
          <Text style={{ fontWeight: "bold" }}>{resume.name}</Text>
        </View>
      </Page>
    </Document>
  );
}
