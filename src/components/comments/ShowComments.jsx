import { useEffect } from "react"
import { useGetComments } from "../../shared/hooks/useGetComments"

const ShowComments = ({id}) => {
    console.log(id) 
    const {comments, getComments} = useGetComments()
    useEffect(() => {
      getComments(id)
    }, [id])
    if (!comments) return <p>Cargando comentarios...</p>
    let num= 0
    const formatDate = (isoString) => {
      const date = new Date(isoString)
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')
      return `${day}-${month}-${year} ${hours}:${minutes}`
    }
    return (
        <>
          <div
                className="container-fluid py-3"
                key="cooments"
                style={{ marginTop:'1.5rem', marginLeft: '1rem', marginRight: '1rem', fontWeight:900}}
              >
                <div className="row justify-content-center">
                  <div className="col-10">
                    <div className="card shadow" style={{ backgroundColor: '#000039', color: 'white' }}>
                      <div className="card-body text-start">
                        <h5 className="card-title ms-3 me-3" style={{ fontWeight: 900 }} >
                          Comments
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
          {
            comments.map((localComment) => (

              <div
                className="container-fluid py-3"
                key={num+1}
                style={{ marginTop:'-1.9rem', marginLeft: '1rem', marginRight: '1rem' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="row justify-content-center">
                  <div className="col-10">
                    <div className="card shadow" style={{ backgroundColor: '#000039', color: 'white' }}>
                      <div className="card-body text-start">
                        <h5 className="card-title ms-3 me-3" style={{ fontWeight: 900 }} >
                          {localComment.username}
                        </h5>
                        <hr
                          className="mx-3"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            borderTopWidth: '2px',
                          }}
                        />
                        <p className="card-text ms-3 me-3" style={{ textAlign: 'justify' }}>
                          {localComment.text}
                        </p>
                        <div className="text-end mt-2 me-3" style={{ fontSize: '0.8rem', fontWeight: 300 }}>
            {formatDate(localComment.date)}
          </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
        ))}
        </>
    )
}

export default ShowComments