import PropTypes from 'prop-types';


function Wrapper({
    children
}: {
    children: React.ReactNode
}) {
    return <div>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
