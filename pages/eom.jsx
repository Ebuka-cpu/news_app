import styles from "../styles/Eom.module.css"


const Eom = ({employee}) => {
    console.log(employee);
  return (
    <div className="page-container">
      <div className={styles.main}>
        <h1>Employee of The Month</h1>
        <div className={styles.employeeOfTheMonth}>
            <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <img src={employee.image} alt=""/>
            <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext)=>{
    const apiResponse = await fetch("https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth")
    const employee = await apiResponse.json()
    
    
    return{
        props:{
            employee
        }
    }

}

export default Eom;
