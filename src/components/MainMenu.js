const MainMenu = ({setDuel}) => {
  return (
    <>
      {/* <div style={{ fontSize: "2em", marginTop: "2vh"}}>YU-GI-OH Lifepoints</div> */}
      <div className="main-menu">
      <button className="main-menu-button" onClick={() => setDuel(true)}>Start Duel</button>
      <button className="main-menu-button">Settings</button>
      </div>
    </>
  );
}
 
export default MainMenu;