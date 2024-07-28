import UserProfile from "./components/UserProfile";
function App() {
  return (
    <div>
      {/* call/ render the component */}
      <UserProfile
        name="Vignesh Durairaj"
        email=" emma@gmail.com"
        location=" Delhi - india"
        about="In 1992, Tim Berners-Lee circulated a document titled
        “HTML Tags,” which outlined just 20 tags, many of which are now obsolete
        or have taken other forms."
      />
      <UserProfile
        name="Durairaj Samynathan"
        email=" saamyaerospace@gmail.com"
        location=" HYBD - india"
        about="In 1992, Tim Berners-Lee circulated a document titled
        “HTML Tags,” which outlined just 20 tags, many of which are now obsolete
        or have taken other forms."
      />
      <UserProfile
        name="Vishwa Sundararaajan"
        email=" doctor@gmail.com"
        location=" Chennai - india"
        about="Doctoring is what fulfilled me and my soul"
      />
    </div>
  );
}
export default App;
