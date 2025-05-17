import NavBar from "../components/NavBar"
import Publications from "../components/Publications"
import Pagination from "../components/Pagination"
const DashboardPage = () => {

    return (
        <>
        <body
          style={{
            backgroundColor: '#BAB986',
            minHeight: '100vh',
            color: '#F8F69F',
          }}
        >
            <NavBar/>
            <Publications/>
            <Pagination/>
            <br />
            <br />
        </body>
        </>
    )
}

export default DashboardPage