import fs from 'fs/promises';
import path from 'path';

async function removeComments(content) {
  let cleanedContent = content;
  // Remove HTML comments
  cleanedContent = cleanedContent.replace(/<!--[\s\S]*?-->/g, '');
  // Remove JS comments
  cleanedContent = cleanedContent.replace(/\/\*[\s\S]*?\*\//g, '');
  cleanedContent = cleanedContent.replace(/\/\/.*/g, '');
  return cleanedContent;
}

async function copyDir(src, dest) {
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const targetPath = path.join(
      dest,
      entry.name.endsWith('.md')
        ? entry.name.replace('.md', '.mdx')
        : entry.name,
    );

    if (entry.isDirectory()) {
      await fs.mkdir(targetPath, { recursive: true });
      await copyDir(srcPath, targetPath);
    } else if (entry.name.endsWith('.md')) {
      // Read content, remove comments, then write as .mdx
      const content = await fs.readFile(srcPath, 'utf-8');
      const cleanedContent = await removeComments(content);
      await fs.writeFile(targetPath, cleanedContent, 'utf-8');
    } else {
      // Copy other files as-is
      await fs.copyFile(srcPath, targetPath);
    }
  }
}

async function copySRD() {
  const sourcePath = path.join(
    process.cwd(),
    'node_modules/moxietoolkit/source',
  );
  const destPath = path.join(process.cwd(), 'src/content');

  try {
    // Ensure the destination directory exists
    await fs.mkdir(destPath, { recursive: true });

    await copyDir(sourcePath, destPath);
    console.log(
      '✅ SRD content copied, cleaned, and converted to MDX successfully',
    );
  } catch (error) {
    console.error('❌ Error processing SRD content:', error);
    process.exit(1);
  }
}

copySRD();
