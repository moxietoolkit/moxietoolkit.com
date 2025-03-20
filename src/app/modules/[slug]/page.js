import MDXTemplate, { getContent } from '@/components/MDXTemplate';
import fs from 'fs/promises';
import path from 'path';

export default function ModulesPage(props) {
  return MDXTemplate({ ...props, contentPath: 'src/content/2-modules' });
}

export async function generateStaticParams() {
  const files = await fs.readdir(
    path.join(process.cwd(), 'src/content/2-modules'),
  );
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/^\d+-(.+)\.mdx$/, '$1'),
    }));
}

export const dynamicParams = true;
