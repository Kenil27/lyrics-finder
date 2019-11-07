import React from "react";
import { app, auth, db } from "../utils/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Container,
  Row,
  Col,
  Alert
} from "reactstrap";

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: "",
      result: [{ name: "", lyric: "" }],
      searchLoader: true,
      isResult: false,
      fetchData: false,
      list : []
    }
  };

  componentDidMount = () => {
    auth.signInAnonymously().catch(function(error) {
      this.errorMessage = error.message;
    });
    this.listenToAuth();

    let {list} = this.state;
    auth.signInAnonymously().catch(function(error) {
      this.errorMessage = error.message;
    });
    this.listenToAuth();

    let search = db
      .collection("stavan");

    search.get().then(querySnapshot => {
      if (querySnapshot.docs.length > 0) {
        querySnapshot.forEach(doc => {
          const { name } = doc.data();
          list.push(name);
        });
      }
    });
    this.setState({list});
  };

  listenToAuth = () => {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.userId = user.uid;
      } else {
        // User is signed out.
        this.userId = null;
      }
    });
  };

  handleInput = event => {
    this.setState({ value: event.target.value });
    if (event.target.value === "") {
      this.setState({ isResult: false });
    }
  };

  onInputKeyPress = e => {
    // on pressing enter
    if (e.which === 13) {
      this.handleSearch();
    }
  };

  handleSearch = () => {
    var self = this;
    self.setState({ searchLoader: true, isResult: false, fetchData: true });
    let res = db
      .collection("stavan")
      .where("name", "==", `${this.state.value.toLowerCase()}`);

    res.get().then(querySnapshot => {
      if (querySnapshot.docs.length > 0) {
        querySnapshot.forEach(doc => {
          const { name, lyrics } = doc.data();
          let lyric = lyrics.replace(new RegExp(/(\\n)+/g), "\n");
          self.setState(
            { result: [{ name, lyric }], searchLoader: true, fetchData: true },
            () => {
              self.setState({ searchLoader: false });
            }
          );
        });
      } else {
        self.setState({ isResult: true, fetchData: false });
      }
    });
  };

  handleClick = (name) => {
    let inputValue = document.getElementsByClassName('form-control')[0].value;
    inputValue = name;
    this.setState({value : inputValue}, ()=>{
      this.handleSearch();
    })
  }

  render() {
    let { result, searchLoader, fetchData, isResult, list, value } = this.state;

    let filteredList = list.filter((element)=>{
      return (element.indexOf(value.toLowerCase()) > -1)
   })

   if(filteredList[0] === value && !searchLoader){
     filteredList = []
   }
    return (
      <div className="container">
        <h2>Lyrics Finder</h2>
        <p>Find Lyrics for any stavan</p>

        <InputGroup>
          <Input
            placeholder="Search by stavan name..."
            autoFocus
            value={this.state.value}
            onChange={this.handleInput.bind(this)}
            onKeyPress={this.onInputKeyPress}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary" onClick={this.handleSearch}>
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>

        {value 
          ?
          <div className="search-container">
          {filteredList.map((name)=>{
            return <span className='search-list' onClick={this.handleClick.bind(this, name)}>{name}</span>
          })}
          </div>
        : null}
        {searchLoader ? (
          fetchData ? (
            <div>
              <img
                src="./static/loader.gif"
                alt=""
                width="100px"
                height="100px"
              />
            </div>
          ) : !isResult ? null : (
            <Container>
              <Row>
                <Col style={{ paddingTop : '15px'}}>
                    <Alert color="info">
                      We currently do not have any lyrics for this stavan.
                    </Alert>
                </Col>
              </Row>
            </Container>
          )
        ) : (
          <div>
            <h2>{result[0].name.toUpperCase()}</h2>
            <div className="result">{result[0].lyric.toLowerCase()}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
