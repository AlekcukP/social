import classnames from 'tailwindcss-classnames';
import { TbSocial } from 'react-icons/tb';

const Share = ({ onClick, active }) => (
    <div
        onClick={onClick}
        className={classnames([
            'share',
            'flex',
            'justify-center',
            'items-center',
            'w-12',
            'h-12',
            'rounded-full',
            'bg-white',
            { 'share-hide': active }
        ])}
    >
        <TbSocial
            className={classnames([
                'fab-icon',
                'scale-[2]',
                'text-blue-900',
                'rotate-[-160deg]',
                { 'share-hide-icon': active }
            ])}
        />
    </div>
);

export default Share;
