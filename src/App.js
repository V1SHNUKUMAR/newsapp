import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    // console.log("setProgress run");
    console.log("api : " + this.apiKey);
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <Router>
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key={"general"}
                pageSize={6}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key={"business"}
                pageSize={6}
                country={"in"}
                category={"business"}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key={"entertainment"}
                pageSize={6}
                country={"in"}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key={"general"}
                pageSize={6}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key={"health"}
                pageSize={6}
                country={"in"}
                category={"health"}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key={"science"}
                pageSize={6}
                country={"in"}
                category={"science"}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key={"sports"}
                pageSize={6}
                country={"in"}
                category={"sports"}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key={"technology"}
                pageSize={6}
                country={"in"}
                category={"technology"}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
