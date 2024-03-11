import './public/stylesheets/App.css';
import { useState, useEffect} from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AccessibleData from './components/AccessibleData.js'

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { StyledEngineProvider } from '@mui/material/styles';
function PuzzleButton(props) {
    const [unlocked, setUnlocked] = useState(false)
    const [solved, setSolved] = useState(false)

    useEffect(() => {
      if (props.hashes[props.index] === props.expectedHashes[props.index])
        setSolved(true)
      if (props.hashes[props.index - 1] === props.expectedHashes[props.index - 1] || props.index === 0)
        setUnlocked(true)
    })
    return (
        <>
          { !(unlocked) ?
            <ListItemButton disabled onClick={props.onClick} className="locked_puzzle">
              Puzzle {props.index}
            </ListItemButton>
			:
            <>
			{(solved) ?
			<Link to={"/puzzle" + `${props.index}`}>
			  <ListItemButton onClick={props.onClick} className='completed_puzzle'>
                Puzzle {props.index}
              </ListItemButton>
			</Link>
			 :
			<Link to={"/puzzle" + `${props.index}`}>
			  <ListItemButton onClick={props.onClick} className='incomplete_puzzle'>
                Puzzle {props.index}
              </ListItemButton>
			</Link>
			}
			</>
          }
        </>
    )
}

function App() {
  const [ display, setDisplay ] = useState(false);

  const drawerWidth = "140px"

  return (
    <BrowserRouter basename="/data-accessibility">
      <StyledEngineProvider injectFirst>
        <div className="container">
          <Routes> 
            <Route exact path="/" element={<AccessibleData display={display}/>}/>  
          </Routes>
        </div>
      </StyledEngineProvider>
	</BrowserRouter>
  );
}

export default App;
