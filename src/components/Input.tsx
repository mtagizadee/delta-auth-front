import { MutableRefObject, FC } from 'react';

interface Props {
    innerRef: MutableRefObject<any>,
    placeholder: string;
    type: string;
}


const Input: FC<Props> = ({ innerRef, placeholder, type }) => {
    return (
        <div>
            <input
                type={type}
                ref={innerRef}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;