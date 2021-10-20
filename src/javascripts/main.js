// Required by Webpack - do not touch
require.context("../", true, /\.(html|json|txt|dat)$/i)
require.context("../images/", true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context("../stylesheets/", true, /\.(css|scss)$/i)

import "bootstrap"

// TODO
import React, { createContext, useContext, useState, useEffect } from "react"
import {BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect, useParams} from "react-router-dom"
import ReactDOM from "react-dom"
import { FaEnvira } from "react-icons/fa"

// import App from "./components/App"


export const IrisContext = createContext()

export function App(props) {

  let [iris, setIris] = useState()

  let [page, setPage] = useState(0)

  useEffect(() => {
    fetch("/iris.dat")
    .then(response => response.json())
    .then(setIris)
    .catch(console.error)
  }, [])
  if(!iris){
    return <p>Loading...</p>
  }

  return (
    <IrisContext.Provider value={ {iris, setIris, page, setPage} }>
      <Router>
      <div className="container">
        <FaEnvira className="logoIcon"/>
        <header>
            <h1>The IRIS Database</h1>
        </header>
        <i className="fab fa-envira"></i>
        <div className="paragraphs">
            <p className="firstParagraph">The Iris flower data set or Fisher"s Iris data set is a multivariate data set introduced by the British statistician and biologist Ronald Fisher in his 1936 paper <strong>The use of multiple measurements in taxonomic problems as an example of linear discriminant analysis</strong>. It is one of the most commonly used datasets in statistics and machine learning.</p>
            <p className="secondParagraph">The data set consists of 50 samples from each of the three species of Iris (Iris setosa, Iris virginica, and Iris veriscolor). Four features were measured from each sample: the length and the width of the sepals and petals, in centimeters.</p>
        </div>
        <Switch>
          <Route exact path="/iris">
            <Tables/>
          </Route>
          <Route path="/iris/:flower">
            <Flower/>
          </Route>
          <Redirect from="" to="/iris" />
        </Switch>
        <footer>
                <div className="container">
                    <div className="row">
                        <div className="myName col-2">
                            Nikolaus Brinkerhoff
                        </div>
                        <div className="col-8"></div>
                        <div className="rightsReserved col-2">
                            &copy; All rights reserved
                        </div>
                    </div>
                </div>
            </footer>
      </div>
      </Router>
    </IrisContext.Provider>
  )
}

export function Tables(props) {
    const {iris, setIris, page, setPage} = useContext(IrisContext)
    return(
        <>
            <div className="row">
                <div className="col-7">
                    <div className="titleWords">
                        <h4><strong>The whole dataset - 150 data examples</strong></h4>
                        <h6>Page 1 of 15</h6>
                    </div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Sepal Length</th>
                            <th scope="col">Sepal Width</th>
                            <th scope="col">Petal Length</th>
                            <th scope="col">Petal Width</th>
                            <th scope="col">Species</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                        iris.map((item, index) => {
                            if(Math.floor(index / 10) == page)
                                return (<tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{item.sepalLength}</td>
                                <td>{item.sepalWidth}</td>
                                <td>{item.petalLength}</td>
                                <td>{item.petalWidth}</td>
                                <td>{item.species}</td>
                                </tr>)
                        })
                        }
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(0)}>1</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(1)}>2</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(2)}>3</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(3)}>4</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(4)}>5</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(5)}>6</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(6)}>7</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(7)}>8</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(8)}>9</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(9)}>10</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(10)}>11</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(11)}>12</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(12)}>13</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(13)}>14</a></li>
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(14)}>15</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-5">
                    <div className="summaryTable rounded-3">
                        <table className="table">
                            <tr>
                                <td>

                                </td>
                                <td>
                                    <img src="/images/setosa.png" alt="setosa picture"/>
                                </td>
                                <td>
                                    <img src="/images/versicolor.png" alt="versicolor picture"/>
                                </td>
                                <td>
                                    <img src="/images/virginica.png" alt="virginica picture"/>
                                </td>
                            </tr>
                            <thead>
                                {/* <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr> */}
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Setosa</td>
                                    <td>Versicolor</td>
                                    <td>Virginica</td>
                                </tr>
                                <tr>
                                    <th>Count</th>
                                    <td>50</td>
                                    <td>50</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <th>Link</th>
                                    <td>
                                        <button className="btn-primary">
                                            <Link to="/iris/setosa" className="pageLinks">Link</Link>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn-primary">
                                            <Link to="/iris/versicolor" className="pageLinks">Link</Link>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn-primary">
                                            <Link to="/iris/virginica" className="pageLinks">Link</Link>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="summaryTitle">
                            <br/>
                            <h2>Summary</h2>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                <br/>
                </div>
            </div>
        </>
    )
}

export function Flower(props) {
  const {iris, setIris, page, setPage} = useContext(IrisContext)
  let {flower} = useParams()



  // let iris = fid ? iris.find( f => f.id == fid) : {}

  // const f = props.flowers

  //useparams allows it to see which flower to use, then use if statements to input the data
    let sepalLengthSum = 0
    let sepalWidthSum = 0
    let petalLengthSum = 0
    let petalWidthSum = 0

    for (let f of iris) {
        if(f.species == flower){
            sepalLengthSum += f.sepalLength
            sepalWidthSum += f.sepalWidth
            petalLengthSum += f.petalLength
            petalWidthSum += f.petalWidth
        }
    }
  return (
    <>
      <h2 className="summaryTitle">The {flower} iris flower</h2>
      <div className="row">
      <div className="col-6">
        <img src={'/images/' + flower + '.png'} className="flowerPicture"/>
      </div>
      <div className="col-6">
        <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Count</th>
                <td>50</td>
              </tr>
              <tr>
                <th>Sepal Length Avg.</th>
                <td>{sepalLengthSum/50}</td>
              </tr>
              <tr>
                <th>Sepal Width Avg.</th>
                <td>{sepalWidthSum/50}</td>
              </tr>
              <tr>
                <th>Petal Length Avg.</th>
                <td>{petalLengthSum/50}</td>
              </tr>
              <tr>
                <th>Petal Width Avg.</th>
                <td>{petalWidthSum/50}</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <br/>
          <button className="btn purpleButton">
            <Link to="/iris" className="pageLinks">Back to the main iris dataset page</Link>
          </button>
        </div>
      </div>
      <br/>
      <br/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById("main"))