'use client'
import cn from 'classnames';

interface ButtonProps {
    appearance?: 'primary' | 'secondary' | 'transparent',
    type?: 'default' | 'icon',
    children: React.ReactNode,
    className?: string,
    loading?: boolean,
    disabled?: boolean,
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({className, appearance = 'primary', type= 'default', children, onClick}) => {
    const handleOnClick = () => {
        onClick();
    }
    const getAppearanceBgColor = () => {
        switch (appearance) {
            case 'primary':
                return 'bg-primary-red text-white'
            case 'secondary':
                return 'bg-white text-semi-dark-blue'
            case 'transparent':
                return 'bg-transparent'
        }
    }

    if (type === 'icon') return (
        <button onClick={handleOnClick} className={cn('rounded-full', getAppearanceBgColor(), className)}>
            {children}
        </button>
    )

    return (
        <button onClick={handleOnClick} className={cn('rounded-[6px] body-m py-2', getAppearanceBgColor(), className)}>
            {children}
        </button>
    )
}

export default Button;