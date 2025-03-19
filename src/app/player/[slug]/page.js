import PropTypes from 'prop-types';
import fs from 'fs/promises';
import path from 'path';

export default async function Page({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { slug } = params;

  try {
    // Get all files in the directory
    const contentDir = path.join(
      process.cwd(),
      'src/content/1-system/1-player',
    );
    const files = await fs.readdir(contentDir);

    // Find the file that ends with `${slug}.mdx`, regardless of its prefix number
    const matchingFile = files.find((file) =>
      file.match(new RegExp(`\\d+-${slug}\\.mdx$`)),
    );

    if (!matchingFile) {
      throw new Error(`No content found for ${slug}`);
    }

    const { default: Post } = await import(
      `../../../content/1-system/1-player/${matchingFile}`
    );
    return (
      <div>
        <h1>Player</h1>
        <Post />
      </div>
    );
  } catch (error) {
    console.error('Import error:', error);
    return <div>Content not found: {error.message}</div>;
  }
}

Page.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export async function generateStaticParams() {
  // Get all files and extract clean slugs
  const contentDir = path.join(process.cwd(), 'src/content/1-system/1-player');
  const files = await fs.readdir(contentDir);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      // Extract the slug part without the number prefix and .mdx extension
      slug: file.replace(/^\d+-(.+)\.mdx$/, '$1'),
    }));
}

export const dynamicParams = true;
