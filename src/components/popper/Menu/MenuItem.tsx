import Link from 'next/link';
import PropTypes from 'prop-types';
const MenuItem = ({ data }: any) => {
    const classes = `w-full justify-start font-bold-[700] flex items-center px-4 gap-3 py-1.5 hover:bg-[var(--primary-color)] hover:text-white ${data.separate ? 'border-t' : ''}`
    return (
        <Link href={`${data.to}`} className={classes} onClick={data.onClick}>
            {data.icon}
            {data.title}
        </Link>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
