import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCountries} from "./services/countriesService";
import {Link} from "react-router-dom";
import {setSearchResult} from "./redux/countries/countriesSlice";

function App() {
    const dispatch = useDispatch();
    const countries = useSelector(state => {
        console.log(state)
        return state.countries.countries
    })
    useEffect(() => {
        dispatch(getCountries())
        return () =>{
            dispatch(setSearchResult([]))
        }
    }, [])
    const handleSearchSubmit = event => {

    }
  return (
      <>
         <div className="container-fluid">
             <div className="row">
                 <div className="col-12">
                     <nav className="navbar navbar-light bg-light">
                         <Link className="navbar-brand" to={``}>Home</Link>
                         <form className="form-inline">
                             <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                    aria-label="Search"/>
                             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                         </form>
                     </nav>
                 </div>
             </div>
             <div className="row">
                 <div className="col-12">
                     <div className="countries-table">
                         <table className="table">
                             <thead className="thead-dark">
                             <tr>
                             <th scope="col">#</th>
                                 <th scope="col">Flag</th>
                                 <th scope="col">Name</th>
                                 <th scope="col">Capital</th>
                                 <th scope="col">Region</th>
                             </tr>
                             </thead>
                             <tbody>
                             {countries !== undefined && countries.map((item, index) => (
                                 <tr>
                                     <th scope="row">{index + 1}</th>
                                     <td><img src={`${item.flags.svg}`} style={{width: `100px`}}/></td>
                                     <td>{item.name.official}</td>
                                     <td>{item.capital}</td>
                                     <td>{item.region}</td>
                                 </tr>
                             ))}
                             </tbody>
                         </table>
                     </div>
                 </div>
             </div>
         </div>

      </>
  );
}

export default App;
