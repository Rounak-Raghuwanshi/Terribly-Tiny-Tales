import "./App.css";
import Post from "./components/Post";
import { profile } from "./data/profile";
import Head from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head profile={profile} />{" "}
      <div className="postsTabContainer">
        <div className="postsTab"> {`134 Posts`} </div>{" "}
        {profile.posts.map((eachpost) => {
          return <Post post={eachpost} id={profile.id} />;
        })}{" "}
      </div>{" "}
    </div>
  );
}

export default App;
