function Experience({ orgName, startDate, endDate, role, description, logoPath }) {
  // startDate and endDate has the format {Month Year} or Present. E.g. Sep 2024
  const workPeriod = (startDate ? startDate : "") + " - " + (endDate ? endDate : "")

  return (
    <div className="experience-div">
      <div className="work-information">
        <div className="org-info-container">
          <img className="org-logo" src={logoPath} alt="the logo for the project/company"></img>
          <div className="organization-name">{orgName}</div>
        </div>
        <div className="work-period">{workPeriod}</div>
      </div>

      <div className="work-detail">
        <div className="role">{role}</div>
        <div className="work-description">{description}</div>
      </div>
    </div>
  )
}

export default Experience