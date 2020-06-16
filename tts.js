import Tts from 'react-native-tts';

const initTts = async () => {
  const voices = await Tts.voices();
  const availableVoices = voices
    .filter((v) => !v.networkConnectionRequired && !v.notInstalled)
    .map((v) => {
      return {id: v.id, name: v.name, language: v.language};
    });
  let selectedVoice = null;
  if (voices && voices.length > 0) {
    selectedVoice = voices[0].id;
    try {
      await Tts.setDefaultLanguage(voices[0].language);
    } catch (err) {
      //Samsung S9 has always this error: "Language is not supported"
      console.log('setDefaultLanguage error ', err);
    }
    await Tts.setDefaultVoice(voices[0].id);
    this.setState({
      voices: availableVoices,
      selectedVoice,
      ttsStatus: 'initialized',
    });
  } else {
    this.setState({ttsStatus: 'initialized'});
  }
};

export default initTts;
