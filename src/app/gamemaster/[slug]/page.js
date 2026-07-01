import MDXTemplate, {
  generateMetadataFromDir,
  generateStaticParamsFromDir,
} from '@/components/MDXTemplate';

const CONTENT_PATH = 'src/content/1-system/2-gamemaster';

export default function GamemasterPage(props) {
  return MDXTemplate({
    ...props,
    contentPath: CONTENT_PATH,
    section: 'gamemasters',
  });
}

export const generateMetadata = (props) =>
  generateMetadataFromDir(CONTENT_PATH, props.params);

export const generateStaticParams = () =>
  generateStaticParamsFromDir(CONTENT_PATH);
