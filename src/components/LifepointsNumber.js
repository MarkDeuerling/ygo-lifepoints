import { useState } from 'react';
import LifepointsMenu from './LifepointsMenu';

const startLp = 8000;

const LifepointsNumber = (props) => {
  const flip = props.flip || false;
  const styles = flip
    ? { transform: 'rotate(-180deg)' }
    : { transform: 'rotate(0deg)' }

  const [lp] = useState(startLp);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  return (
    <>
      <div
        style={styles}
        onClick={handleClick}
        className="lifepoints-number"
      >
        {lp}
      </div>
      <LifepointsMenu
        open={isOpen}
        onClose={() => setOpen(false)}
        flip={flip}
      />
    </>
  );
}
 
export default LifepointsNumber;