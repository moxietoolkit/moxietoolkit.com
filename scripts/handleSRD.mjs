import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function removeComments(content) {
  let cleanedContent = content;
  // Remove HTML comments (non-greedy to handle nested cases better)
  cleanedContent = cleanedContent.replace(/<!--[\s\S]*?-->/g, '');
  // Remove multi-line JS/CSS comments
  cleanedContent = cleanedContent.replace(/\/\*[\s\S]*?\*\//g, '');
  // Remove single-line JS comments (but preserve URLs and code blocks)
  // Only remove if // is at start of line (with optional whitespace)
  cleanedContent = cleanedContent.replace(/^\s*\/\/.*$/gm, '');
  // Clean up multiple consecutive empty lines
  cleanedContent = cleanedContent.replace(/\n{3,}/g, '\n\n');
  return cleanedContent.trim();
}

async function copyDir(src, dest, stats = { files: 0, dirs: 0, errors: [] }) {
  try {
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const targetPath = path.join(
        dest,
        entry.name.endsWith('.md')
          ? entry.name.replace('.md', '.mdx')
          : entry.name,
      );

      try {
        if (entry.isDirectory()) {
          await fs.mkdir(targetPath, { recursive: true });
          stats.dirs += 1;
          await copyDir(srcPath, targetPath, stats);
        } else if (entry.name.endsWith('.md')) {
          const content = await fs.readFile(srcPath, 'utf-8');
          const cleanedContent = removeComments(content);
          await fs.writeFile(targetPath, cleanedContent, 'utf-8');
          stats.files += 1;
        } else {
          await fs.copyFile(srcPath, targetPath);
          stats.files += 1;
        }
      } catch (error) {
        const errorMsg = `Failed to process ${srcPath}: ${error.message}`;
        stats.errors.push(errorMsg);
        console.error(`⚠️  ${errorMsg}`);
      }
    }
  } catch (error) {
    const errorMsg = `Failed to read directory ${src}: ${error.message}`;
    stats.errors.push(errorMsg);
    throw new Error(errorMsg);
  }

  return stats;
}

async function copySRD() {
  const sourcePath = path.resolve(
    __dirname,
    '..',
    'node_modules/moxietoolkit/source',
  );
  const destPath = path.resolve(__dirname, '..', 'src/content');

  try {
    // Verify source directory exists
    try {
      await fs.access(sourcePath);
    } catch {
      throw new Error(
        `Source directory not found: ${sourcePath}\n` +
        'Make sure moxietoolkit is installed: npm install',
      );
    }

    // Remove existing destination directory for clean sync
    try {
      await fs.rm(destPath, { recursive: true, force: true });
      console.log('🗑️  Cleared existing destination directory');
    } catch (error) {
      // If directory doesn't exist, that's fine
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }

    // Ensure the destination directory exists
    await fs.mkdir(destPath, { recursive: true });

    console.log(`📂 Copying from: ${sourcePath}`);
    console.log(`📂 Copying to: ${destPath}\n`);

    const stats = await copyDir(sourcePath, destPath);

    console.log('\n📊 Summary:');
    console.log(`  ✅ Files processed: ${stats.files}`);
    console.log(`  📁 Directories created: ${stats.dirs}`);

    if (stats.errors.length > 0) {
      console.log(`  ⚠️  Errors: ${stats.errors.length}`);
      stats.errors.forEach((error) => console.log(`     - ${error}`));
      process.exit(1);
    } else {
      console.log(
        '\n✅ SRD content copied, cleaned, and converted to MDX successfully',
      );
    }
  } catch (error) {
    console.error('❌ Error processing SRD content:', error.message);
    process.exit(1);
  }
}

copySRD();
