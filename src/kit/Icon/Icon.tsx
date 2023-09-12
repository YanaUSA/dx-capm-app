import { IconProps } from './Icon.types';
import icons from '@assets/icons/sprite.svg';

const Icon: React.FC<IconProps> = ({
    name,
    widthSize,
    heightSize,
    stroke,
    fill,
    className,
}) => {
    const iconLink = `${icons}#${name}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={widthSize}
            height={heightSize}
            stroke={stroke}
            fill={fill}
        >
            <use href={iconLink}></use>
        </svg>
    );
};

export default Icon;
