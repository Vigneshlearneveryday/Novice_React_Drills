import "./index.css";


function App() {
  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2024/05/11/13/41/portrait-8754980_1280.png"
        alt="Hey Beautiful where are you"
        //Applying inline style
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h2 className="name">Searching her is the destiny</h2>
      <p className="bio">
        Where she might be There my soul is alive and im dead here still living
        it's called "DeadMan's Life"
      </p>
      <ul className="hobbies">
        <li className='hobby'>Searching</li>
        <li className="hobby">Thinking</li>
        <li className="hobby">Living in the the dream forever</li>
      </ul>
    </div>
  );
}
export default App;
