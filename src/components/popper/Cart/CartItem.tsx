import PropTypes from 'prop-types';
import Link from 'next/link';
function CartItem({ data, onClick }: any) {
        const classes = `w-full p-3 flex justify-between items-center gap-3 font-bold-[600] hover:bg-black hover:bg-opacity-[0.05]`
        return (
                <Link href="/" className={classes} onClick={onClick}>
                        <div className="flex gap-3">
                                <div className="w-12 h-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("")' }}></div>
                                <div className="flex-1">
                                        <p className="text-sm line-clamp-1">Áo thun tay lỡ Áo thun tay lỡ Áo thun tay lỡÁo thun tay lỡ Áo thun tay lỡ Áo thun tay lỡ</p>

                                </div>
                        </div>
                        <p>200000đ</p>
                </Link>
        );
}

CartItem.propTypes = {
        data: PropTypes.object.isRequired,
        onClick: PropTypes.func,
};

export default CartItem;
