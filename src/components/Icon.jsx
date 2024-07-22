import { TbSocial } from 'react-icons/tb';
import classnames from 'tailwindcss-classnames';

const Icon = ({ className }) => {
    return (
        <div
            className={classnames([
                'flex',
                'w-full',
                'h-full',
                'justify-center',
                'items-center',
                'relative',
                className
            ])}
        >
            <TbSocial className={classnames(['scale-[2]'])} />
        </div>
    );
};

export default Icon;
