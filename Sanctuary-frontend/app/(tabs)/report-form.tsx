import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReportForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Incident Report Form</Text>
      <Text style={styles.paragraph}>Report Details</Text>
      <Text style={styles.paragraph}>Incident Type</Text>
      <Text style={styles.paragraph}>Date & Time of Incident</Text>
      <Text style={styles.paragraph}>Location of Incident</Text>
      <Text style={styles.paragraph}>Description</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#184040',
  },
  paragraph: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';

// const INCIDENTS = [
//   'Suspicious Person',
//   'Car Accident',
//   'Robbery',
//   'Fire',
//   'Noise Complaint',
//   'Assault',
//   'Vandalism',
//   'Lost Pet',
//   'Gas Leak',
//   'Medical Emergency',
//   'Missing Person',
//   'Break-In',
//   'Public Disturbance',
//   'Harassment',
//   'Flooding',
//   'Power Outage'
// ];

// export default function SafeWalk() {
//   const [selectedIncidents, setSelectedIncidents] = useState<string[]>([]);

//   const toggleIncident = (incident: string) => {
//     if (selectedIncidents.includes(incident)) {
//       setSelectedIncidents(selectedIncidents.filter(i => i !== incident));
//     } else {
//       setSelectedIncidents([...selectedIncidents, incident]);
//     }
//   };

//   const handleSubmit = () => {
//     if (selectedIncidents.length === 0) {
//       alert('Please select at least one incident.');
//     } else {
//       alert(`You reported: \n${selectedIncidents.join('\n')}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Report an Incident</Text>

//       <FlatList 
//         data={INCIDENTS}
//         keyExtractor={(item) => item}
//         renderItem={({ item }) => (
//           <View style={styles.checkboxContainer}>
//             <CheckBox
//               value={selectedIncidents.includes(item)}
//               onValueChange={() => toggleIncident(item)}
//               tintColors={{ true: '#225454', false: '#ccc' }}
//             />
//             <Text style={styles.checkboxText}>{item}</Text>
//           </View>
//         )}
//       />

//       <Button 
//         title="Submit Incident"
//         onPress={handleSubmit}
//         color="#225454"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#194040',
//     paddingTop: 50
//   },
//   text: {
//     fontSize: 24,
//     color: '#F2E9D8',
//     marginBottom: 20,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   checkboxText: {
//     marginLeft: 10,
//     color: '#F2E9D8',
//     fontSize: 18,
//   },
// });
