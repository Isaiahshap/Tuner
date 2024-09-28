//Purpose: Custom hook to handle audio processing and frequency detection.

import { useEffect } from 'react';
import { getPitch } from '../utils/pitchDetection';

export const useAudioAnalyzer = (setDetectedFrequency: (freq: number | null) => void) => {
  useEffect(() => {
    let audioContext: AudioContext | null = null;
    let analyserNode: AnalyserNode;
    let scriptProcessor: ScriptProcessorNode;

    const init = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        analyserNode = audioContext.createAnalyser();
        analyserNode.fftSize = 4096; // Increase fftSize for better low-frequency resolution

        source.connect(analyserNode);

        scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);
        analyserNode.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);

        scriptProcessor.onaudioprocess = () => {
          const buffer = new Float32Array(analyserNode.fftSize);
          analyserNode.getFloatTimeDomainData(buffer);
          const pitch = getPitch(buffer);
          setDetectedFrequency(pitch);
        };
      } catch (err) {
        console.error('Error accessing microphone:', err);
      }
    };

    init();

    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [setDetectedFrequency]);
};
