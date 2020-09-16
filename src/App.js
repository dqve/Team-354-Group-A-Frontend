import React from 'react'

// styles
import "./assets/css/bootstrap.min.css"
import "./assets/scss/now-ui-kit.scss?v=1.4.0"
import "./assets/demo/demo.css?v=1.4.0"
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0"
import "./assets/css/font-awesome.min.css"
import "./pages/qrscanner/style.css"

//components
import PageLoader from "./components/loaders/pageLoader"
import IndexApp from "./pages/IndexApp"

const App = () => {
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => setLoading(true), 500)
      })

  return loading ? <IndexApp /> : <PageLoader />
}

export default App