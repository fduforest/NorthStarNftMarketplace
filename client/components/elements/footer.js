const Footer = () => {
  return (
    <footer className=" bg-dark text-yellow-10 text-lg">
      <div className="container pt-0 border-t border-yellow-10">
        <div className="w-full flex justify-center md:py-50">
          <div className="w-full md:w-1/2 md:flex justify-evenly self-center grid grid-cols-3 gap-4">
            <a href="/plan" className="hidden">
              Plan du site 
            </a>
            <a href="/mentions-legales" className="">
              Mentions Légales
            </a>
            <a href="/recrutement" className="hidden">
              Recrutement
            </a>
            <a href="/a-propos">A propos</a>
            <a href="/contact">Contact</a>
            <a href="/">© NorhStar</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
