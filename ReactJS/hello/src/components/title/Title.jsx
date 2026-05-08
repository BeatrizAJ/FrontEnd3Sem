

import './Title.css';

function Title(props) {
    return (
        <h1>
            {props.texto} {props.bia}
        </h1>
    );
}

export default Title;