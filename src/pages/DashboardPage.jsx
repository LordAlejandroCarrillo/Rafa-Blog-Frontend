import NavBar from "../components/NavBar"
import Publications from "../components/publications/Publications"
const DashboardPage = () => {
    localStorage.setItem('offset', 0)
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
              <Publications/>

              <br />
              <br />
          </div>
        </>
    )
}

export default DashboardPage