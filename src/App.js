import React from "react"
import { Route, Switch } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import HomePage from "./pages/homepage/HomePage"
import PageNotFound from "./pages/pagenotfound/PageNotFound"

// styles
import "./assets/css/bootstrap.min.css"
import "./assets/scss/now-ui-kit.scss?v=1.4.0"
import "./assets/demo/demo.css?v=1.4.0"
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0"
import "./assets/css/font-awesome.min.css"

// components
import PageLoader from "./components/loaders/pageLoader"
import IndexApp from "./pages"

// const App = () => (
//   <div className="container-fluid">
//     <Switch>
//       <Route exact path="/" component={HomePage} />
//       <Route component={PageNotFound} />
//     </Switch>
//     <ToastContainer autoClose={3000} hideProgressBar />
//   </div>
// )

const App = () => {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 500)
  })

  return loading ? <IndexApp /> : <PageLoader />
}

export default App