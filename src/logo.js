import './logo.css'
const logo = () => {
  return (
    <>
      <br /><br /><br /><br />
      <div className="welcome">
        <button className="button1" data-text="Awesome" >
          <h1 className="actual-text">&nbsp;WELCOME&nbsp;</h1>
          <h1 aria-hidden="true" className="hover-text">&nbsp;WELCOME&nbsp;</h1>
        </button>
      </div >
    </>
  );
}

export default logo;