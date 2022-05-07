/* pages/_app.js */
import "../styles/globals.css"
import Navbar from "../components/elements/navbar"
import Footer from "../components/elements/footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        {/* Aligned to the top */}
        <div className="flex-1">
          <Navbar />
          <Component {...pageProps} />
        </div>
        {/* Aligned to the bottom */}
        <Footer />
      </div>
    </>
  )
}

export default MyApp
