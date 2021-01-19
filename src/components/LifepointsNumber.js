import { useState } from 'react';
import LifepointsMenu from './LifepointsMenu';
import useSound from 'use-sound';
// import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops';



const LifepointsNumber = (props) => {
  const flip = props.flip || false;
  const styles = flip
    ? { transform: 'rotate(-180deg)' }
    : { transform: 'rotate(0deg)' }

  const [lp, setLp] = useState(8000);
  const [oldLp, setOldLp] = useState(0);
  const [lpFlag, setFlag] = useState({ set: false });
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  // const props_ = useSpring({ number: 0, from: { number: 8000 } });


  const calculateLp = () => {
    if (lpFlag.set) {
      setFlag({ set: false });
      setOldLp(lp)
      let newLp = 0;
      if (lpFlag.op === 'minus') {
        newLp = parseInt(lp) - parseInt(lpFlag.val);
      } else if (lpFlag.op === 'plus') {
        newLp = parseInt(lp) + parseInt(lpFlag.val);
      } else if (lpFlag.op === 'half') {
        newLp = parseInt(lp) >> 1;
      }
      setLp(Math.max(newLp, 0));
    }
    return lp
  }

  const [play] = useSound(process.env.PUBLIC_URL + '/assets/lifepoint_run.mp3');
  const [playLose] = useSound(process.env.PUBLIC_URL + '/assets/lifepoint_zero.mp3');
  // const [playLose] = useSound(process.env.PUBLIC_URL + '/assets/lp_zero_short.mp3');

  const duration = () => {
    return lp === 0 ? 3000 : 1740;
  }

  return (
    <>
      {/* <button onClick={play}>Click me</button> */}
      <div
        style={styles}
        onClick={handleClick}
        className="lifepoints-number"
      >
        <Spring
          from={{number: oldLp}}
          to={{ number: calculateLp() }}
          onStart={() => lp === 0 ? playLose() : play()}
          config={{delay: 150, duration: duration()}}
        >
          {props => <div>{Math.floor(props.number)}</div>}
        </Spring>
      </div>
      <LifepointsMenu
        open={isOpen}
        onClose={() => setOpen(false)}
        flip={flip}
        setFlag={setFlag}
      />
    </>
  );
}
 
export default LifepointsNumber;