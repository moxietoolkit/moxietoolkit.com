import PropTypes from 'prop-types';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXTemplate, { getContent } from '@/components/MDXTemplate';

export default function PlayerPage(props) {
  return MDXTemplate({
    ...props,
    contentPath: 'src/content/1-system/1-player',
  });
}

PlayerPage.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export async function generateStaticParams() {
  const files = await fs.readdir(
    path.join(process.cwd(), 'src/content/1-system/1-player'),
  );
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/^\d+-(.+)\.mdx$/, '$1'),
    }));
}

export const dynamicParams = true;
