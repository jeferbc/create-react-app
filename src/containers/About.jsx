import '../assets/styles/components/About.css'
import medicineProfile from '../assets/images/MedicineProfile.png'

const About = () => {
  return(
    <div className="about-container">
      <h2 className="title-about">About me</h2>
      <p className="p-about">I'm a medical student and web developer. <br></br></p>
      <p className="p-about">All people know at least one way to change the world, but they never act. <br></br></p>
      <p> </p>
      <p> </p>
      <p className="p-about p-about-short">
        I can't stop thinking about how I can help, so if you have a good idea, I want to work with you. Get in touch with me
      </p>
      <div className="mpi-cover">

      </div>
      <figure className="mpi-container">
      </figure>
        <img className="medicine-profile-image" src={medicineProfile} alt="medic watching at infinite"/>
    </div>
  )
}

export default About