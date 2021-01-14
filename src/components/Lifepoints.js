import LifepointsNumber from './LifepointsNumber';

const Lifepoints = (props) => {
  const flip = props.flip
  return ( 
    <div className="lifepoints-frame">
      <LifepointsNumber flip={flip} />
    </div>
   );
}
 
export default Lifepoints;