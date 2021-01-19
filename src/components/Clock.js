import {useState, useEffect} from 'react'

const Clock = () => {

  // const [tick, setTick] = useState(0)
  // const styles = {
  //   transform: `rotateY(${tick}deg)`
  // }

  const [timeLeft, setTime] = useState(40 * 60);

  const [stop, setStop] = useState(true)

  useEffect(() => {
    if (stop)
      return timeLeft
    const timer = timeLeft > 0 && setInterval(() => setTime(timeLeft - 1), 1000)
    // setTick(timer * 10% 360)
    return () => clearInterval(timer);
  }, [timeLeft, stop])

  const minute = time => parseInt(time / 60) % 60 ;
  const second = time => (time % 60) < 10 ? '0'+time % 60 : time % 60;

  return ( 
    // <span className="clock">40:00</span>
    // <span className="clock" style={styles}>{minute(timeLeft)}:{second(timeLeft)}</span>
    <span className="clock" onClick={()=> setStop(!stop)}>{minute(timeLeft)}:{second(timeLeft)}</span>
   );
}
 
export default Clock;