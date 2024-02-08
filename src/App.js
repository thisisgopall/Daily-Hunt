import './App.css';

import React, { useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App=()=> {
  const pageSize=5;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
            color="#f11946"
            progress={progress}
            
          />

          <Switch>
            <Route exact path="/">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}    
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}    
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}    
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}    
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}    
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}    
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sport">
              <News setProgress={setProgress} apiKey={apiKey}    
                key="sport"
                pageSize={pageSize}
                country="in"
                category="sport"
              />
            </Route>
            <Route exact path="/technology">
              <News setProgress={setProgress} apiKey={apiKey}    
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
export default App;



// export default class   extends Component {
//   pageSize=5;
//   apiKey=process.env.REACT_APP_NEWS_API
//   state={
//     progress:0
//   }
//   setProgress =(progress)=>{
//     setState({progress:progress});
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//           <NavBar />
//           <LoadingBar
//           height={3}
//             color="#f11946"
//             progress={state.progress}
            
//           />

//           <Switch>
//             <Route exact path="/">
//               {" "}
//               <News setProgress={setProgress} apiKey={apiKey}    
//                 key="general"
//                 pageSize={pageSize}
//                 country="in"
//                 category="general"
//               />
//             </Route>
//             <Route exact path="/business">
//               {" "}
//               <News setProgress={setProgress} apiKey={apiKey}    
//                 key="business"
//                 pageSize={pageSize}
//                 country="in"
//                 category="business"
//               />
//             </Route>
//             <Route exact path="/entertainment">
//               {" "}
//               <News setProgress={setProgress} apiKey={apiKey}    
//                 key="entertainment"
//                 pageSize={pageSize}
//                 country="in"
//                 category="entertainment"
//               />
//             </Route>
//             <Route exact path="/">
//               {" "}
//               <News setProgress={setProgress} apiKey={apiKey}    
//                 key="general"
//                 pageSize={pageSize}
//                 country="in"
//                 category="general"
//               />
//             </Route>
//             <Route exact path="/health">
//               {" "}
//               <News setProgress={setProgress} apiKey={apiKey}    
//                 key="health"
//                 pageSize={pageSize}
//                 country="in"
//                 category="health"
//               />
//             </Route>
//             <Route exact path="/science">
//               {" "}
//               <News setProgress={setProgress} apiKey={apiKey}    
//                 key="science"
//                 pageSize={pageSize}
//                 country="in"
//                 category="science"
//               />
//             </Route>
//             <Route exact path="/sport">
//               <News setProgress={setProgress} apiKey={apiKey}    
//                 key="sport"
//                 pageSize={pageSize}
//                 country="in"
//                 category="sport"
//               />
//             </Route>
//             <Route exact path="/technology">
//               <News setProgress={setProgress} apiKey={apiKey}    
//                 key="technology"
//                 pageSize={pageSize}
//                 country="in"
//                 category="technology"
//               />
//             </Route>
//           </Switch>
//         </Router>
//       </div>
//     );
//   }
// }
