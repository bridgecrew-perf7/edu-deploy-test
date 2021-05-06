import logo from "./logo.svg";
import "./App.css";
import { Route, Redirect, HashRouter } from "react-router-dom";
import PageHomeView from "./Page/Home/PageHomeView";
import PageCourseView from "./Page/Course/Page-Course-View.component";
import PageArchivesView from "./Page/Archives/Page-Archives-View.component";
function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={PageHomeView}></Route>
      <Route path="/course" component={PageCourseView}></Route>
      <Route path="/archives" component={PageArchivesView}></Route>
    </HashRouter>
  );
}

export default App;
