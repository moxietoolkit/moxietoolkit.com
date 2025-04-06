import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

async function getContentFromDir(dirPath, urlPrefix) {
  const files = await fs.readdir(dirPath);

  return Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(dirPath, file);
        const content = await fs.readFile(filePath, 'utf8');
        const { data } = matter(content);

        // Handle both numbered and non-numbered files
        const slug = file
          .replace(/^\d+-/, '') // Remove number prefix if it exists
          .replace(/\.mdx$/, ''); // Remove .mdx extension

        return {
          name: data.title || slug.replace(/-/g, ' '),
          href: `/${urlPrefix}/${slug}`,
        };
      }),
  );
}

export async function getNavigation() {
  const contentDir = path.join(process.cwd(), 'src/content');

  const [playerContent, gamemasterContent, modulesContent] = await Promise.all([
    getContentFromDir(path.join(contentDir, '1-system/1-player'), 'player'),
    getContentFromDir(
      path.join(contentDir, '1-system/2-gamemaster'),
      'gamemaster',
    ),
    getContentFromDir(path.join(contentDir, '2-modules'), 'modules'),
  ]);

  return [
    {
      name: 'Players',
      href: '/player',
      children: playerContent,
    },
    {
      name: 'Gamemasters',
      href: '/gamemaster',
      children: gamemasterContent,
    },
    {
      name: 'Modules',
      href: '/modules',
      children: modulesContent,
    },
    {
      name: 'Actual Play',
      href: '/actual-play',
    },
  ];
}
