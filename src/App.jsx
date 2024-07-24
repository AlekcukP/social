import { useState } from 'react';
import classnames from 'tailwindcss-classnames';
import Share from './components/Share';
import Social from './components/Social';
import config from './config';

import './css/index.css';

import 'animate.css';

import 'react-social-icons/github';
import 'react-social-icons/instagram';
import 'react-social-icons/linkedin';

function App() {
    const [active, setActive] = useState(false);

    return (
        <>
            <div className={classnames(['absolute', 'top-[45%]', 'left-[50%]', 'flex', 'flex-wrap', 'flex-col'])}>
                <Share onClick={() => setActive(!active)} active={active}></Share>

                <Social
                    network="linkedin"
                    url={config.socialUrls.linkedin}
                    className={{ 'fab-upside': active, active }}
                />
                <Social
                    network="instagram"
                    url={config.socialUrls.instagram}
                    className={{ 'fab-up': active, active }}
                />
                <Social network="github" url={config.socialUrls.github} className={{ 'fab-up': active, active }} />
            </div>
        </>
    );
}

export default App;
