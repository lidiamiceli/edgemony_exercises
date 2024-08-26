import { argv } from 'process';

function countCharacters(text, excludeSpaces) {
  if (excludeSpaces) {
    return text.replace(/\s+/g, '').length;
  }
  return text.length;
}

// recupero gli argomenti dalla riga di comando
const args = argv.slice(2);
const text = args[0] || '';
const excludeSpaces = args.includes('--excludeSpaces');

// eseguo il conteggio
console.log(`The number of characters is: ${countCharacters(text, excludeSpaces)}`);
