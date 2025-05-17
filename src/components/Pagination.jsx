const Pagination = () => {
    return (
        <>
            <nav
              className="navbar fixed-bottom bg-transparent justify-content-center py-3"
              aria-label="Page navigation example"
            >
              <ul className="pagination mb-0 d-flex gap-4">
                <li className="page-item">
                  <a
                    className="page-link border-0 text-dark d-flex align-items-center justify-content-center rounded-circle"
                    href="#"
                    aria-label="Previous"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      boxShadow: '0 0 4px 1.5px rgba(255, 255, 255, 0.4)',
                      width: '48px',
                      height: '48px',
                      padding: 0,
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      lineHeight: 1,
                      color: '#000039',
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    ⇠
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link border-0 text-dark d-flex align-items-center justify-content-center rounded-circle"
                    href="#"
                    aria-label="Home"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      boxShadow: '0 0 4px 1.5px rgba(255, 255, 255, 0.4)',
                      width: '48px',
                      height: '48px',
                      padding: 0,
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      lineHeight: 1,
                      color: '#000039',
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    ⌂
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link border-0 text-dark d-flex align-items-center justify-content-center rounded-circle"
                    href="#"
                    aria-label="Next"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      boxShadow: '0 0 4px 1.5px rgba(255, 255, 255, 0.4)',
                      width: '48px',
                      height: '48px',
                      padding: 0,
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      lineHeight: 1,
                      color: '#000039',
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    ⇢
                  </a>
                </li>
              </ul>
              <br />
            </nav>
        </>
    )
}

export default Pagination