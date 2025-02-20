


const ButtonCompo = ({ variant = 'simple', href, onClick, children, className = '' }) => {

    const variants = {
        cta: '',
        normal: '',
        simple: '',
        link: '',
    };


    const commonProps = {
        className: `transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`,
        role: 'button',
        tabIndex: 0,
    };

    return variant === 'link' && href ? (
        <a href={href} {...commonProps}>
            {children}
        </a>
    ) : (
        <button type="button" {...commonProps} className=" border-2 border-gray-200 px-8 py-4 rounded-xl">
            {children}
        </button>
    );
};

export default ButtonCompo;