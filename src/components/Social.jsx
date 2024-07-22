import classnames from 'tailwindcss-classnames';
import { SocialIcon } from 'react-social-icons/component';
import { useRef, createRef } from 'react';
import 'react-social-icons/github';
import 'react-social-icons/instagram';
import 'react-social-icons/linkedin';

const Social = ({ network, className, url }) => {
    return <SocialIcon href={url} network={network} className={classnames(['fab', className])} />;
};

export default Social;
