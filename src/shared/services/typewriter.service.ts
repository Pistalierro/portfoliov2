import {Injectable} from '@angular/core';

export interface TypingLetter {
  delay: number;
  letterIndexGlobal: number;
}

@Injectable({providedIn: 'root'})
export class TypewriterService {
  private typingIndex = -1;
  private totalLetters = 0;
  private intervalIds: number[] = [];

  observeTyping(
    letters: TypingLetter[],
    updateCallback: (currentIndex: number) => void,
    doneCallback?: () => void
  ): void {
    this.clearTyping();

    this.totalLetters = letters.length;
    this.typingIndex = -1;

    letters.sort((a, b) => a.delay - b.delay);

    letters.forEach(letter => {
      const timeMs = letter.delay * 1000 + 200;
      const timeout = window.setTimeout(() => {
        this.typingIndex = letter.letterIndexGlobal;
        updateCallback(this.typingIndex);
      }, timeMs);
      this.intervalIds.push(timeout);
    });

    if (letters.length && doneCallback) {
      const lastLetter = letters[letters.length - 1];
      const finalTime = lastLetter.delay * 1000 + 500;
      const doneTimeout = window.setTimeout(() => {
        doneCallback();
      }, finalTime);
      this.intervalIds.push(doneTimeout);
    }
  }

  clearTyping(): void {
    this.intervalIds.forEach(id => clearTimeout(id));
    this.intervalIds = [];
  }
}
