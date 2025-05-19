import { useEffect } from 'react'
import {useGetPublications} from '../../shared/hooks/useGetPublications.jsx'
import { useParams } from 'react-router'
import Categories from '../categories/Categories.jsx'
const Publications = () => {

  const { publications, getPublications, total } = useGetPublications()
  let {subject, category} = useParams()
  if(!subject){
    subject = 'null'
  }
  if(!category){
    category = 'null'
  }
  useEffect(() => {
    getPublications(subject,category)
  }, [])
  let prevOffset
  let newOffset
  const handleNextPage = () => {
    prevOffset = localStorage.getItem("offset")
    if(parseInt(prevOffset)+ 10 <= total){
      newOffset = parseInt(prevOffset) + 10
      localStorage.setItem("offset", newOffset)
    }
    getPublications(subject,category)
  }
  const handlePrevPage = () => {
    prevOffset = localStorage.getItem("offset")
    if(parseInt(prevOffset)- 10 >= 0){
      newOffset = parseInt(prevOffset) - 10
      localStorage.setItem("offset", newOffset)
    }
    getPublications(subject,category)
  }

  const handleHome = () => {
    localStorage.setItem("offset", 0)
    getPublications(subject,category)
  }
  if (!publications) return <p>Cargando publicaciones...</p>
  return (
      <>
        <Categories subject={subject} category={category}/>
        {
          publications.map((localPublication, index) => (
            <div
              className="container-fluid py-3"
              key={index}
              style={{ marginTop: index == 0 ? '1rem' : '0', marginLeft: '1rem', marginRight: '1rem' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="card shadow" style={{ backgroundColor: '#000039', color: 'white' }}>
                    <div className="card-body text-start">
                      <h5 className="card-title ms-3 me-3" style={{ fontWeight: 900 }} >
                        {localPublication.title}
                      </h5>
                      <hr
                        className="mx-3"
                        style={{
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                          borderTopWidth: '2px',
                        }}
                      />
                      <p className="card-text ms-3 me-3" style={{ textAlign: 'justify' }}>
                        {localPublication.description}
                      </p>
                      <button
                        type="button"
                        className="btn ms-3 mt-2"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          width: 'fit-content',
                          paddingLeft: '1rem',
                          paddingRight: '1rem',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        {localPublication.subjectName}
                      </button>
                      <button
                        type="button"
                        className="btn ms-3 mt-2"
                        style={{
                          backgroundColor: `${localPublication.categoryColor}`,
                          color: 'white',
                          width: 'fit-content',
                          paddingLeft: '1rem',
                          paddingRight: '1rem',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        {localPublication.categoryName}
                      </button>
                      <a
                        href = {`/publication/details/${localPublication._id}`}
                        className="btn mt-2"
                        style={{
                          backgroundColor: '#000039',
                          color: 'white',
                          border: '1px solid rgba(255, 255, 255, 0.5)',
                          width: 'fit-content',
                          paddingLeft: '1rem',
                          paddingRight: '1rem',
                          marginLeft: '1rem',
                          marginRight: '1rem',
                          float: 'right',
                          display: 'inline-block',
                          textDecoration: 'none',
                          transition: 'transform 0.2s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        Details ...
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>

        ))
        }
        <br />
        <nav className="navbar fixed-bottom justify-content-center py-3" aria-label="Page navigation example" style={{ backgroundColor: "rgba(0, 0, 57, 0)" }}>
          <ul className="pagination mb-0 d-flex gap-4">
            <li className="page-item">
              <a className="page-link border-0 d-flex align-items-center justify-content-center rounded-circle"
                href="#" aria-label="Previous"
                onClick={handlePrevPage}
                style={{
                  backgroundColor: "rgba(0, 0, 57, 0.7)",
                  boxShadow: "0 0 6px 1.5px rgba(255, 255, 255, 0.25)",
                  width: "48px",
                  height: "48px",
                  padding: 0,
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  lineHeight: 1,
                  color: "white",
                  transition: "box-shadow 0.3s ease"
                }}>
                ⇠
              </a>
            </li>
            <li className="page-item">
              <a className="page-link border-0 d-flex align-items-center justify-content-center rounded-circle"
                href="#" aria-label="Home"
                onClick={handleHome}
                style={{
                  backgroundColor: "rgba(0, 0, 57, 0.7)",
                  boxShadow: "0 0 6px 1.5px rgba(255, 255, 255, 0.25)",
                  width: "48px",
                  height: "48px",
                  padding: 0,
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  lineHeight: 1,
                  color: "white",
                  transition: "box-shadow 0.3s ease"
                }}>
                ⌂
              </a>
            </li>
            <li className="page-item">
              <a className="page-link border-0 d-flex align-items-center justify-content-center rounded-circle"
                href="#" aria-label="Next"
                onClick={handleNextPage}
                style={{
                  backgroundColor: "rgba(0, 0, 57, 0.7)",
                  boxShadow: "0 0 6px 1.5px rgba(255, 255, 255, 0.25)",
                  width: "48px",
                  height: "48px",
                  padding: 0,
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  lineHeight: 1,
                  color: "white",
                  transition: "box-shadow 0.3s ease"
                }}>
                ⇢
              </a>
            </li>
          </ul>
        </nav>
      </>
  )
}

export default Publications