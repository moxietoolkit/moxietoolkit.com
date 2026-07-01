import MDXTemplate, {
  generateMetadataFromDir,
  generateStaticParamsFromDir,
} from '@/components/MDXTemplate';

const CONTENT_PATH = 'src/content/2-modules';

export default function ModulesPage(props) {
  return MDXTemplate({
    ...props,
    contentPath: CONTENT_PATH,
    section: 'modules',
  });
}

export const generateMetadata = (props) =>
  generateMetadataFromDir(CONTENT_PATH, props.params);

export const generateStaticParams = () =>
  generateStaticParamsFromDir(CONTENT_PATH);
