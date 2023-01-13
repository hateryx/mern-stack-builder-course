import { useState } from "react";
import { FrontRow, Alert } from "../../component";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const {user,showAlert, displayAlert,updateUser,isLoading} = useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    //remove while testing
    if(!name || !email || !location || !lastName) {
      displayAlert()
      return;
    }

    updateUser({name,email,lastName,location})
  }

  return (
  <Wrapper>
    <form className="form" onSubmit={handleSubmit}>
      <h3>Profile</h3>
      {showAlert && <Alert />}


      <div className="form-center">
        <FrontRow
          type="text"

          name="name" 
          value={name} 
          changeHandler={(e)=>setName(e.target.value)}
          />
        <FrontRow
          type="text"
          labelText="last name"
          name="lastName" 
          value={lastName} 
          changeHandler={(e)=>setLastName(e.target.value)}
          />
        <FrontRow
          type="email"

          name="email" 
          value={email} 
          changeHandler={(e)=>setEmail(e.target.value)}
          />
        <FrontRow
          type="text"

          name="location" 
          value={location} 
          changeHandler={(e)=>setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading?"Please wait...":"Save Changes"}
          </button>
      </div>
    </form>
  </Wrapper>
  )
};

export default Profile;
