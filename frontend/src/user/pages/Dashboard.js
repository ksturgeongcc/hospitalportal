import React from "react";
import AnimatedText from 'react-animated-text-content';
import './Dashboard.css';
import Aside from "../components/Aside";
import doctor from '../images/doc.png';

const Dashboard = props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedUsers, setLoadedUsers] = useState();
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const responseData = await sendRequest(
            'http://localhost:5000/api/users'
          );
  
          setLoadedUsers(responseData.users);
        } catch (err) {}
      };
      fetchUsers();
    }, [sendRequest]);

    if (props.items.length === 0) {
        return (
          <div className="center">
            <Card>
              <h2>No users found.</h2>
            </Card>
          </div>
        );
      }
    
      return (
        <ul className="users-list">
          {props.items.map(user => (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places.length}
            />
          ))}
        </ul>
      );
    return (
        <>
            <div className="dashboard">
                <Aside />
                <div className="dashboard-container">
                    <div className="doctor-wrapper">
                        <img src={doctor} alt="doctor"></img>
                    </div>
                    <div className="dashboard-details">
                        
                        <h3>Hi Sally, welcome to your portal {user.name}</h3>
                        <p>You can find out all the informaiton about your appointment.</p>
                        <p>You can meet the team that will be looking after you</p>
                        <p>View your appointment details</p>
                        <p>Or relax and have some fun in the entertainment zone.</p>
                        <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
  Content to animate
</AnimatedText>;
                    </div>
                </div>
            </div>
        </>
    )
};
export default Dashboard;