import '../assets/styles/components/AppTitle.css'

const AppTitle = ({ title, subtitle }) => {
  return(
    <div className="app-title-container">
      <h2 className="app-title">{title}</h2>
      {subtitle ? <h2 className="app-subtitle">{subtitle}</h2>: ""}
    </div>
  )
}

export default AppTitle