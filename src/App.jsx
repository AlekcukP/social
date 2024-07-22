import { useState, useEffect } from 'react';
import classnames from 'tailwindcss-classnames';
import Share from './components/Share';
import Social from './components/Social';
import generate from './utils/horizont';
import config from './config';

function App() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        generate();
    }, []);

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
