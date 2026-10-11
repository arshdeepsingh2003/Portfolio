import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = 'C:/Users/dell/.gemini/antigravity-ide/brain/5e9afc62-2bb3-4bd4-accc-e25c06cb46d0/.user_uploaded/media_1791738915501.png';
const targetDir = path.resolve(__dirname, '../public');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, path.join(targetDir, 'as-logo.png'));
  fs.copyFileSync(src, path.join(targetDir, 'images/as-logo.png'));
  console.log('Successfully copied new AS logo to public directory');
} else {
  console.error('Source logo file not found:', src);
}
