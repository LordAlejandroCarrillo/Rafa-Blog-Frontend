import { useEffect } from "react"
import { useGetSubjects } from "../../shared/hooks"

const Subjects = () => {

    const {subjects, getSubjects} = useGetSubjects()
    useEffect(() => {
      getSubjects()
    }, [])
    if (!subjects) return <p>Cargando comentarios...</p>
    return (
        <>
          <div className="d-flex flex-row row row-cols-3 justify-content-center">
            {
              subjects.map((localSubject) => (
                <div
                  className="container-fluid py-3"
                  key={localSubject.id}
                  style={{ marginTop:'1rem', marginLeft: '1rem', marginRight: '1rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div className="row justify-content-center">
                    <div className="col-20">
                      <div className="card shadow" style={{ backgroundColor: '#000039', color: 'white' }}>
                        <div className="card-body text-start">
                            <img
                              src={localSubject.imageURL}
                              alt="Subject"
                              style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderTopLeftRadius: '0.375rem',
                                borderTopRightRadius: '0.375rem'
                              }}
                            />
                          <hr
                            className="mx-3"
                            style={{
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                              borderTopWidth: '2px',
                            }}
                        />
                        <div className="d-flex justify-content-center">
                            <a
                              href= {`/dashboard/publications/${localSubject.name}/${'null'}`}
                              type="button"
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
                              {localSubject.name}
                            </a>
                        </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            ))
            }
            </div>
        </>
    )
}

export default Subjects