import Calculator from './Calculator';

const styles = {
  position: 'fixed',
  top: '0%', left: '0%',
  width: '100%', height: '100%',
  backgroundColor: '#fff',
  zIndex: 1000
}

const stylesFlip = {
  ...styles,
  transform: 'rotate(-180deg)',
}

const overlay = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1000
}

const LifepointsMenu = ({ open, onClose, flip, setFlag }) => {
  if (!open)
    return null;
  return (
    <>
      <div style={overlay} />
      <div style={flip ? stylesFlip : styles}>
        <button className="back" onClick={onClose}>&larr;</button>
        <Calculator setFlag={setFlag} onClose={onClose}/>
      </div>
    </>
  );
}
 
export default LifepointsMenu;