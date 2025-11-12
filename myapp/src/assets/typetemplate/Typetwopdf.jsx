// src/components/TypeTwoPDF.jsx
import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

// ✅ Optional: register a better font like Poppins
Font.register({
  family: 'Poppins',
  src: 'https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf',
});

// 🎨 Styles (similar to your Tailwind version)
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6', // gray-100
    padding: 20,
    fontFamily: 'Poppins',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    border: '1px solid #e5e7eb',
    overflow: 'hidden',
  },
  left: {
    width: '33%',
    backgroundColor: '#e5e7eb', // gray-200
    padding: 20,
    alignItems: 'center',
  },
  right: {
    width: '67%',
    padding: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    objectFit: 'cover',
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    color: '#1f2937',
    textAlign: 'center',
  },
  title: {
    fontSize: 10,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 10,
  },
  section: {
    width: '100%',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 600,
    borderBottom: '1px solid #9ca3af',
    color: '#1f2937',
    paddingBottom: 2,
    marginBottom: 4,
  },
  text: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
  },
  listItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 2,
  },
  heading: {
    fontSize: 12,
    fontWeight: 700,
    color: '#1f2937',
    borderBottom: '1px solid #d1d5db',
    paddingBottom: 3,
    marginBottom: 4,
  },
  subHeading: {
    fontSize: 10,
    fontWeight: 600,
    color: '#1f2937',
  },
  smallText: {
    fontSize: 9,
    color: '#4b5563',
  },
});

const TypeTwoPDF = ({ userInformation }) => {
  const profileImage =
    userInformation.imageprofile ||
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop';

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* LEFT SECTION */}
          <View style={styles.left}>
            <Image src={profileImage} style={styles.profileImage} />
            <Text style={styles.name}>
              {userInformation.personalDetails.name || 'Your Name'}
            </Text>
            <Text style={styles.title}>
              {userInformation.personalDetails.title || 'Your Profession'}
            </Text>

            {/* Contact */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contact</Text>
              <Text style={styles.listItem}>
                Email: {userInformation.personalDetails.email || 'you@email.com'}
              </Text>
              <Text style={styles.listItem}>
                Phone: {userInformation.personalDetails.phone || '000-000-0000'}
              </Text>
              <Text style={styles.listItem}>
                Address: {userInformation.personalDetails.address || 'Your Address'}
              </Text>
            </View>

            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <Text style={styles.listItem}>
                {userInformation.skills.skillone || 'Skill One'}
              </Text>
              <Text style={styles.listItem}>
                {userInformation.skills.skilltwo || 'Skill Two'}
              </Text>
              <Text style={styles.listItem}>
                {userInformation.skills.skillthree || 'Skill Three'}
              </Text>
            </View>

            {/* Social Links */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Social Links</Text>
              <Text style={styles.listItem}>
                LinkedIn: {userInformation.media.linkedin || 'Not Added'}
              </Text>
              <Text style={styles.listItem}>
                GitHub: {userInformation.media.github || 'Not Added'}
              </Text>
              <Text style={styles.listItem}>
                Portfolio: {userInformation.media.portfolio || 'Not Added'}
              </Text>
            </View>
          </View>

          {/* RIGHT SECTION */}
          <View style={styles.right}>
            {/* About Me */}
            <View style={styles.section}>
              <Text style={styles.heading}>About Me</Text>
              <Text style={styles.text}>
                {userInformation.personalDetails.about ||
                  'Write a brief introduction about yourself, highlighting your experience, strengths, and goals.'}
              </Text>
            </View>

            {/* Experience */}
            <View style={styles.section}>
              <Text style={styles.heading}>Experience</Text>
              <Text style={styles.subHeading}>
                {userInformation.experience.role || 'Your Role'} –{' '}
                {userInformation.experience.company || 'Your Company'}
              </Text>
              <Text style={styles.smallText}>
                {userInformation.experience.job || 'Job Duration or Description'}
              </Text>
            </View>

            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.heading}>Education</Text>
              <Text style={styles.subHeading}>
                {userInformation.education.course || 'Course Name'}
              </Text>
              <Text style={styles.smallText}>
                {userInformation.education.college || 'College Name'},{' '}
                {userInformation.education.passyear || 'Year'}
              </Text>
              <Text style={styles.smallText}>
                Grade: {userInformation.education.grade || 'N/A'}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default TypeTwoPDF;
