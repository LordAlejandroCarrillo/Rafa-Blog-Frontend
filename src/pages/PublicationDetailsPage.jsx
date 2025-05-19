import { useParams } from "react-router"
import NavBar from "../components/NavBar"
import PublicationDetails from "../components/publications/PublicationDetails"
import ShowComments from "../components/comments/ShowComments"
const PublicationDetailsPage = () => {

    const { id } = useParams()
    return (
        <>
          <div
            style={{
              backgroundColor: '#BAB986',
              minHeight: '100vh',
              color: '#F8F69F',
            }}
          >
              <NavBar/>
              <PublicationDetails id={id}/>
              <ShowComments id={id}/>
              <br />
              <br />
          </div>
        </>
    )
}

export default PublicationDetailsPage