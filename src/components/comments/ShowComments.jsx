import { useEffect, useState } from "react"
import { useGetComments } from "../../shared/hooks/useGetComments"
import { useDeleteComment } from "../../shared/hooks/useDeleteComment"
import { useUpdateComment } from "../../shared/hooks/useUpdateComment"

const ShowComments = ({id}) => {
    let num2 = 0
    console.log(id) 
    const [username,setUsername] = useState(null)
    const [text,setText] = useState(null) 
    const {comments, getComments} = useGetComments()
    const {deleteComment} = useDeleteComment()
    const {comment, updateComment} = useUpdateComment()
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
    const handleSubmit = async (e, commentId) => {
      e.preventDefault()
      await updateComment(commentId, {username, text})
      getComments(id)
      window.location.reload()
    }
    const handleDelete = async (commentId) => {
      await deleteComment(commentId)
      getComments(id)
    }
    return (
        <>
          <div
            className="container-fluid py-3"
            key="comments"
            style={{ marginTop: '1.5rem', marginLeft: '1rem', marginRight: '1rem', fontWeight: 900 }}
          >
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="card shadow" style={{ backgroundColor: '#000039', color: 'white' }}>
                  <div className="card-body text-start">
                    <h5 className="card-title ms-3 me-3" style={{ fontWeight: 900 }}>
                      Comments
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
            comments.map((localComment, index) => {
            
              const collapseId = `collapse-${localComment.id}`;
              const headingId = `heading-${index}`;
              return (
                <div
                  className="container-fluid py-3"
                  key={num2++}
                  style={{ marginTop: '-1.9rem', marginLeft: '1rem', marginRight: '1rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div className="row justify-content-center">
                    <div className="col-10">
                      <div className="card shadow" style={{ backgroundColor: '#000039', color: 'white' }}>
                        <div className="card-body text-start">
                          <h5 className="card-title ms-3 me-3" style={{ fontWeight: 900 }}>
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
                          <div className="d-flex justify-content-between mt-2">
                            <div className="ms-3">
                              <button
                                className="btn btn-sm btn-primary me-2"
                                style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${headingId}`}
                                aria-expanded="false"
                                aria-controls={headingId}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDelete(localComment._id)}
                              >
                                Delete
                              </button>
                            </div>
                            <div className="text-end mt-2 me-3" style={{ fontSize: '0.8rem', fontWeight: 300 }}>
                              {formatDate(localComment.date)}
                            </div>
                          </div>
                          <div
                            id={headingId}
                            className="collapse"
                            data-bs-parent={`${localComment.name}`} 
                            aria-labelledby={collapseId}
                          >
                            <div className="mt-3 ms-3">
                            <form onSubmit={(e) => handleSubmit(e, localComment._id)}>
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                  placeholder={`${localComment.username}`}
                                  onChange={(e) => setUsername(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <textarea
                                  className="form-control mb-2"
                                  placeholder={`${localComment.text}`}
                                  onChange={(e) => setText(e.target.value)}
                                />
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </>
    )
}

export default ShowComments