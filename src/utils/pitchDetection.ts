//Purpose: Contains functions to detect pitch from audio data.

// In pitchDetection.ts
import { DynamicWavelet } from 'pitchfinder';

const detectPitch = DynamicWavelet();

export const getPitch = (buffer: Float32Array): number | null => {
  const pitch = detectPitch(buffer);
  console.log('Pitch detected by Dynamic Wavelet:', pitch); // Log the pitch detected by Dynamic Wavelet
  return pitch || null;
};

export const getNearestNote = (frequency: number, noteFrequencies: { [note: string]: number }): string => {
  let nearestNote = Object.keys(noteFrequencies)[0];
  let minDifference = Math.abs(frequency - noteFrequencies[nearestNote]);

  for (const [note, noteFreq] of Object.entries(noteFrequencies)) {
    const difference = Math.abs(frequency - noteFreq);
    if (difference < minDifference) {
      minDifference = difference;
      nearestNote = note;
    }
  }

  return nearestNote;
};

