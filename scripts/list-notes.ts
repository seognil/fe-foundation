import { readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { globby } from 'globby';

const docDir = join(__dirname, '../docs/');

const files = await globby(join(docDir, 'note/**/*.md'));

const getTitleAndLink = async (filePath: string) => {
  const content = await readFile(filePath, 'utf-8');

  const headPieces = content.split('\n').slice(0, 5).join('\n');
  const title = headPieces.match(/title:\s?(.*)/)?.[1];
  const permalink = headPieces.match(/permalink:\s?(.*)/)?.[1];
  const relativePath = relative(docDir, filePath);
  return { title, permalink, filePath, relativePath };
};

const titleAndLines = await Promise.all(files.map(getTitleAndLink));

console.log(titleAndLines.map(({ title, permalink }) => `[${title}](${permalink})`).join('\n'));
