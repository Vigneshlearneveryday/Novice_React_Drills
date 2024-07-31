import "./CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Heading />
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <Card
              plan="FREE"
              price={0}
              users={10}
              storage={2}
              email={"Normal"}
              help={true}
            />
            <Card
              plan="PRO"
              price={10}
              users={20}
              storage={10}
              email={"Priority"}
              help={true}
            />
            <Card
              plan="ENTERPRISE"
              price={20}
              users={30}
              storage={15}
              email={"Phone"}
              help={true}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
