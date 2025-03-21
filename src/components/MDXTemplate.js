import PropTypes from 'prop-types';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import RuleDivider from './RuleDivider';

export async function getContent(contentPath, slug) {
  try {
    const contentDir = path.join(process.cwd(), contentPath);
    const files = await fs.readdir(contentDir);

    // Find the file that matches the slug, with or without number prefix
    const matchingFile = files.find((file) => {
      const cleanFileName = file.replace(/^\d+-/, '').replace(/\.mdx$/, '');
      return cleanFileName === slug;
    });

    if (!matchingFile) {
      throw new Error(`No content found for ${slug}`);
    }

    const filePath = path.join(contentDir, matchingFile);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    return { frontmatter, content };
  } catch (error) {
    console.error(`Error loading content for ${slug}:`, error);
    throw error;
  }
}

export async function generateStaticParamsFromDir(contentPath) {
  try {
    const files = await fs.readdir(path.join(process.cwd(), contentPath));

    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => ({
        slug: file.replace(/^\d+-/, '').replace(/\.mdx$/, ''),
      }));
  } catch (error) {
    console.error(`Error generating params for ${contentPath}:`, error);
    return [];
  }
}

export default async function MDXTemplate({
  params: paramsPromise,
  contentPath,
  section,
}) {
  try {
    const params = await paramsPromise;
    const { slug } = params;
    const { frontmatter, content } = await getContent(contentPath, slug);

    return (
      <div className="space-y-8">
        <div>
          <p className="text-lg tracking-wide text-grimwild-green-light uppercase font-bold">
            {section}
          </p>
          <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-grimwild-green">
            {frontmatter.title}
          </h1>
          <RuleDivider className="w-full text-grimwild-green-light mt-2" />
        </div>
        <article className="prose lg:prose-lg xl:prose-xl prose-zinc prose-p:leading-snug prose-li:leading-snug prose-headings:text-grimwild-green prose-li:marker:text-grimwild-green-light max-w-none">
          <MDXRemote source={content} />
        </article>
      </div>
    );
  } catch (error) {
    console.error('Template error:', error);
    return (
      <div className="text-red-500">Content not found: {error.message}</div>
    );
  }
}

MDXTemplate.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  contentPath: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};
