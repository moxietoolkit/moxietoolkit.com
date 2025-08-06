import PropTypes from 'prop-types';
import MDXTemplate, {
  generateStaticParamsFromDir,
} from '@/components/MDXTemplate';

const CONTENT_PATH = 'src/content/1-system/1-player';

export default function PlayerPage(props) {
  return MDXTemplate({
    ...props,
    contentPath: CONTENT_PATH,
    section: 'players',
  });
}

PlayerPage.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export const generateStaticParams = () =>
  generateStaticParamsFromDir(CONTENT_PATH);
export const dynamicParams = true;
