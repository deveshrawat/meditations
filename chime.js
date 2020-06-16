import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const Clap = new Sound('clap.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(
    'duration in seconds: ' +
      Clap.getDuration() +
      'number of channels: ' +
      Clap.getNumberOfChannels(),
  );
});

const Chime = new Sound('first.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(
    'duration in seconds: ' +
      Chime.getDuration() +
      'number of channels: ' +
      Chime.getNumberOfChannels(),
  );
});

Chime.setVolume(1.5);
export {Chime, Clap};
