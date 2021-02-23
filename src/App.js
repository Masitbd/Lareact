import react, { Comment, Component } from "react";
import axios from "axios";
import Loading from './Loading';



class App extends Component{ 

  constructor(props){
    super(props);

    this.state = {
      users: [],
      loading: false
    };
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  getUsers(){
    this.setState({
      loading: true
    })

    axios('https://api.randomuser.me/?nat=US&results=5').then(respose =>
  
    this.setState({
      users: respose.data.results,
      loading: false
    })
    );  

  }

componentWillMount(){
 this.getUsers();
}

HandleSubmit(e) {
  e.preventDefault();
  this.getUsers();
  console.log('More user loading')
}

  render(){
  return <div className="App">
    {!this.state.loading ? this.state.users.map(user =>
       <div>
         <p>
         {user.name.first}
         </p>
         <form onSubmit= {this.HandleSubmit}>
           <input type='submit' value='Load users' />
         </form>

      </div>): <Loading />}
    </div>

} 
}

export default App;
