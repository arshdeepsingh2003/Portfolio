import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadedPath = 'C:/Users/dell/.gemini/antigravity-ide/brain/5ad16336-3361-43d9-a29e-875c2573c90a/.user_uploaded/media_1791827860746.pdf';
const downloadsPath = 'C:/Users/dell/Downloads/Arshdeep_web_resume.pdf';

const src = fs.existsSync(uploadedPath) ? uploadedPath : (fs.existsSync(downloadsPath) ? downloadsPath : null);

const publicDir = path.resolve(__dirname, '../public');
const distDir = path.resolve(__dirname, '../dist');

if (src) {
  fs.copyFileSync(src, path.join(publicDir, 'resume.pdf'));
  console.log('Successfully copied resume to frontend/public/resume.pdf');
  if (fs.existsSync(distDir)) {
    fs.copyFileSync(src, path.join(distDir, 'resume.pdf'));
    console.log('Successfully copied resume to frontend/dist/resume.pdf');
  }
} else {
  console.error('Source resume file not found!');
}
