import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import PostsFetcher from "./components/Api";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5">Controlled and Uncontrolled Inputs App</h1>
      <ControlledForm />
      <hr />
      <UncontrolledForm />
      <hr />
      <PostsFetcher />
    </div>
  );
};

export default App;