import LottieView from 'lottie-react-native';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import defaultStyles from '../config/styles';

export default function UploadScreen({
  onDone,
  progress = 0,
  visible = false
}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={defaultStyles.colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../assets/animations/done.json')}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
    flex: 1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});
