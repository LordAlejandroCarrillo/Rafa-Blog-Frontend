import { useEffect } from "react"
import { useGetCategories } from "../../shared/hooks/useGetCategories"

const Categories = ({subject, category}) => {
  const {categories, getCategories} = useGetCategories()
  useEffect(() => {
    getCategories()
  }, [])
  
  if (!categories) return <p>Cargando comentarios...</p>
  return (
    <>
      <div className="container-fluid" style={{ marginLeft: '1rem', marginRight: '1rem', marginTop: '1rem' }}>
  <div className="row justify-content-center">
    <div className="col-10">
      <div className="mb-3 d-flex justify-content-between">
        <button
          className="btn text-decoration-none d-flex align-items-center gap-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFilter"
          aria-expanded="false"
          aria-controls="collapseFilter"
          style={{
            fontSize: '1rem',
            fontWeight: '300',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            backgroundColor: 'transparent',
            padding: '0.25rem 0.75rem',
            borderRadius: '0.25rem',
            color: '#000039'
          }}
        >
          <img
            src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-4/32/Filter-512.png"
            alt="Filter icon"
            style={{ width: '20px', height: '20px' }}
          />
          Filter
        </button>

        <a
          href={`/dashboard/publications/${subject}/${'null'}`}
          className="btn text-decoration-none"
          type="button"
          style={{
            fontSize: '1rem',
            fontWeight: '300',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            backgroundColor: 'transparent',
            padding: '0.25rem 0.75rem',
            borderRadius: '0.25rem',
            color: '#000039'
          }}
        >
          Desactivate
        </a>
      </div>

      <hr style={{ borderTop: '2px solid rgba(255, 255, 255, 0.5)', marginTop: '0.5rem' }} />

      <div className="collapse" id="collapseFilter">
        <div
          className="card card-body text-white"
          style={{
            backgroundColor: '#BAB986',
            border: '1px solid white'
          }}
        >
          <div className="row">
            <h5 style={{ marginBottom: '1.5rem', color: '#000039', fontSize: '0.9rem', fontWeight: '300' }}>
              Categories
            </h5>
            {
              categories.map(localCategory => (
                <div className="col-md-3 mb-3" key={localCategory.id}>
                  <a
                    style={{
                      color: '#000039',
                      fontSize: '0.8rem',
                      fontWeight: '300',
                      padding: '0.15rem 0.4rem',
                      borderWidth: '1px'
                    }}
                    href={`/dashboard/publications/${subject}/${localCategory.name}`}
                    className="btn btn-outline-light w-100"
                  >
                    {localCategory.name}
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Categories