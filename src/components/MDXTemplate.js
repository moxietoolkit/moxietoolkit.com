import PropTypes from 'prop-types';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function getContent(contentPath, slug) {
  const contentDir = path.join(process.cwd(), contentPath);
  const files = await fs.readdir(contentDir);

  const matchingFile = files.find((file) =>
    file.match(new RegExp(`\\d+-${slug}\\.mdx$`)),
  );

  if (!matchingFile) {
    throw new Error(`No content found for ${slug}`);
  }

  const filePath = path.join(contentDir, matchingFile);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return matter(fileContent);
}

export default async function MDXTemplate({
  params: paramsPromise,
  contentPath,
}) {
  const params = await paramsPromise;
  const { slug } = params;

  try {
    const { data: frontmatter, content } = await getContent(contentPath, slug);

    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-grimwild-green mb-12 mt-8">
          {frontmatter.title}
        </h1>
        <article className="prose lg:prose-xl prose-p:leading-snug prose-li:leading-snug prose-headings:text-grimwild-green prose-li:marker:text-grimwild-green-light max-w-2xl mx-auto">
          <MDXRemote source={content} />
        </article>
      </div>
    );
  } catch (error) {
    console.error('Import error:', error);
    return <div>Content not found: {error.message}</div>;
  }
}

MDXTemplate.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  contentPath: PropTypes.string.isRequired,
};
