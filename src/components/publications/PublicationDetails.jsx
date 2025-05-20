import { useEffect, useState } from "react"
import { useGetPublicationById } from "../../shared/hooks"
import { usePostComment } from "../../shared/hooks/usePostComment"

const PublicationDetails = ({id}) => {
    const { publication, getPublication } = useGetPublicationById()
    useEffect(() => {
      getPublication(id)
    }, [])

    const { comment, addComment } = usePostComment()

    const [username, setUsername] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = async (e) => {
      if(!text && !username){
        alert("Add a comment please.")
      }
      e.preventDefault()
      if(username == ""){
        const result = await addComment(id, {username:'Anónimo',text})
        if (result) {
          setUsername("")
          setText("")
          alert("Comment sent successfully")
        }
        window.location.reload()
        return
      }
      const data = {
        username,
        text,
      }

      const result = await addComment(id, data)
      
      
      if (result) {
        setUsername("")
        setText("")
        alert("Comment sent successfully")
      } else if(!text){
        alert("Add a comment please.")
      }
    }

    const formatDate = (isoString) => {
      const date = new Date(isoString)
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')
      return `${day}-${month}-${year} ${hours}:${minutes}`
    }

    if (!publication) return <p>Cargando publicacion...</p>
    return (
        <>
          <div
  className="container-fluid py-3"
  key={id}
  style={{ marginLeft: '1rem', marginRight: '1rem' }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  <div className="row justify-content-center">
    <div className="col-10">
      <div className="card shadow" style={{ backgroundColor: '#000039', color: 'white' }}>
        <div className="card-body text-start">
          <h5 className="card-title ms-3 me-3" style={{ fontWeight: 900 }}>
            {publication.title}
          </h5>
          <hr
            className="mx-3"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderTopWidth: '2px',
            }}
          />
          <p className="card-text ms-3 me-3" style={{ textAlign: 'justify' }}>
            {publication.description}
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
            {publication.subjectName}
          </button>
          <button
            type="button"
            className="btn ms-3 mt-2"
            style={{
              backgroundColor: `${publication.categoryColor}`,
              color: 'white',
              width: 'fit-content',
              paddingLeft: '1rem',
              paddingRight: '1rem',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {publication.categoryName}
          </button>

          <div className="accordion mt-4 mx-3" id={`accordion-${id}`}>
            <div
              className="accordion-item"
              style={{
                backgroundColor: '#000039',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <h2 className="accordion-header" id={`heading-${id}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  style={{ backgroundColor: '#000039', color: 'white' }}
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${id}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${id}`}
                >
                  Comment
                </button>
              </h2>
              <div
                id={`collapse-${id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${id}`}
                data-bs-parent={`#accordion-${id}`}
              >
                <div className="accordion-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control mb-2"
                        placeholder="Write your comment here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="text-end mt-2 me-3" style={{ fontSize: '0.8rem', fontWeight: 300 }}>
            {formatDate(publication.date)}
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default PublicationDetails