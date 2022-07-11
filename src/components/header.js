import '../css/header.css'
function Header(){
    return (
        <div className="st wrapper">
            <div className="st-top">
                <div className="st-b- st-b--full"></div>
                <p>
                    <span className="st-drop-s sf--s">S</span>
                    <span className='sf-x'>trange</span>
                    <span className="st-drop-r sf--r-2">r</span>
                </p>
                <div className="sf-b- sf-b--mini sf-b--left"></div>
                <div className="sf-b- sf-b--mini sf-b--right"></div>
            </div>
            <div className="st-bottom">
                <p>
                    <span className="st-bar-f"></span>
                    <span className="st-things sf-x">things</span>
                    <span className='st-bar-s'></span>
                </p>
            </div>
        </div>
    );
}

export default Header;