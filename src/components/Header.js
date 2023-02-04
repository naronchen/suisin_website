function Header() {
  return (
    <header class="header">
      <video src={process.env.PUBLIC_URL+"/waterdrop.mp4"} loop autoPlay muted></video>
        <h1 id="title">水心</h1>
      <div className="row">
        
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
