import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/popper';
import CartItem from './CartItem';
import { Button } from 'flowbite-react';
import Link from 'next/link';
const defaultFn = () => { };

function Cart({ children, items = [], hideOnClick = false, onChange = defaultFn }: any) {
        const renderItems = () => {
                return items.map((item: any, index: number) => {
                        return (
                                <CartItem
                                        key={index}
                                        data={item}
                                />
                        );
                });
        };
        const renderResult = (attrs: any) => (
                <div className="w-[400px] bg-white text-black rounded shadow-lg" tabIndex="-1" {...attrs}>
                        <h4 className='p-3 font-bold'>Sản phẩm mới thêm</h4>
                        <PopperWrapper className="py-2">
                                {renderItems()}
                                <div className="w-full flex flex-col"></div>
                        </PopperWrapper>
                        <div className="w-full flex items-center justify-between p-4">
                                <p className="text-xs">88 thêm vào giỏ hàng.</p>
                                <Link href="/cart">
                                        <Button><span className="text-xs font-bold">Xem giỏ hàng</span></Button>
                                </Link>
                        </div>
                </div>
        );
        return (
                <Tippy
                        interactive
                        delay={[0, 65]}
                        offset={[12, 8]}
                        hideOnClick={hideOnClick}
                        placement="bottom-end"
                        render={renderResult}
                >
                        {children}
                </Tippy>
        );
}

Cart.propTypes = {
        children: PropTypes.node.isRequired,
        items: PropTypes.array,
        hideOnClick: PropTypes.bool,
        onChange: PropTypes.func,
};

export default Cart;
