import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        {/* Nội dung chính */}
        <View style={styles.content}>
          
          {/* Khối 1 */}
          <View style={[styles.largeBox, styles.box1]}>
            <Text style={styles.whiteNumber}>1</Text>
          </View>

          {/* Khối 2 */}
          <View style={[styles.largeBox, styles.box2]}>
            <Text style={styles.whiteNumber}>2</Text>
          </View>

          {/* Hàng 4 ô bằng nhau */}
          <View style={styles.middleRow}>
            
            {/* Ô 3 */}
            <View style={[styles.middleBox, styles.box3]}>
              <Text style={styles.blackNumber}>3</Text>
            </View>

            {/* Ô 4 */}
            <View style={[styles.middleBox, styles.box4]}>
              <Text style={styles.whiteNumber}>4</Text>
            </View>

            {/* Ô 5 */}
            <View style={[styles.middleBox, styles.box5]}>
              <Text style={styles.whiteNumber}>5</Text>
            </View>

            {/* Ô trắng */}
            <View style={[styles.middleBox, styles.blankBox]} />

          </View>

          {/* Khối 6 */}
          <View style={[styles.box6]}>
            <Text style={styles.whiteNumber}>6</Text>
          </View>

        </View>

        {/* Thông tin sinh viên */}
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>
            Chu Thị Minh Hạnh - BIT246755
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },

  container: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 8,
  },

  content: {
    width: '100%',
  },

  // =========================
  // Ô 1 và 2
  // =========================
  largeBox: {
    width: '100%',
    height: 92,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  box1: {
    backgroundColor: '#3282E8',
  },

  box2: {
    backgroundColor: '#FF4141',
    marginTop: 10,
  },

  // =========================
  // Hàng 3 - 4 - 5 - trắng
  // =========================
  middleRow: {
    width: '100%',
    height: 180,

    flexDirection: 'row',

    marginTop: 10,

    gap: 10,
  },

  middleBox: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.07,
    shadowRadius: 3,

    elevation: 2,
  },

  box3: {
    backgroundColor: '#FFD21F',
  },

  box4: {
    backgroundColor: '#31B46E',
  },

  box5: {
    backgroundColor: '#7A3FE0',
  },

blankBox: {
  backgroundColor: '#F4F6F8',
  shadowOpacity: 0,
  elevation: 0,
},

  // =========================
  // Ô 6
  // =========================
  box6: {
    width: '100%',
    height: 150,

    marginTop: 10,

    backgroundColor: '#FF7417',

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  // =========================
  // Chữ số
  // =========================
  whiteNumber: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '700',
  },

  blackNumber: {
    color: '#111111',
    fontSize: 38,
    fontWeight: '700',
  },

  // =========================
  // Footer
  // =========================
  footerContainer: {
    marginTop: 'auto',

    paddingTop: 20,
    paddingBottom: 8,

    alignItems: 'center',
  },

  footer: {
    color: '#222222',

    fontSize: 17,
    fontWeight: '600',

    textAlign: 'center',
  },
});