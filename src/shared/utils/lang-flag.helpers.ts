export function getLangFlag(lang: string): string {
  switch (lang) {
    case 'ru':
      return '🇷🇺';
    case 'en':
      return '🇬🇧';
    case 'ua':
      return '🇺🇦';
    default:
      return '🌐';
  }
}
