import NavBar from "../components/NavBar"
import Subjects from "../components/subjects/Subjects"
const CoursesPage = () => {
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
              <Subjects/>
              <br />
              <br />
          </div>
        </>
    )
}

export default CoursesPage