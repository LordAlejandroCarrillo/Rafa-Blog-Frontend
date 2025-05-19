const NavBar = () => {
    return (
        <>
            <nav
              className="navbar navbar-expand-lg px-4"
              style={{ backgroundColor: '#000039',  fontFamily: "'Poetsen One', sans-serif" }}
            >
              <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: '#f8f69f' }}>
                Rafa's Blog 
                <img
                  src="https://png.pngtree.com/png-vector/20230304/ourmid/pngtree-colorful-blog-speech-bubble-vector-png-image_6633021.png"
                  alt="Blog Icon"
                  style={{
                    height: '30px',
                    width: 'auto',
                    marginLeft: '8px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                  }}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  className="navbar-toggler-icon"
                  style={{ filter: 'invert(1)' }}
                ></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/" style={{ color: '#f8f69f' }}>
                        Publications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/subjects" style={{ color: '#f8f69f' }}>
                      Courses
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
        </>
    )
}

export default NavBar