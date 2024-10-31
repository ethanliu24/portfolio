function Tool({ name, description, path }) {
  return (
    <div className="dev-tool-div">
      <img src={path} />
      <div className="dev-tool-txt">
        <p className="dev-tool-name">{name}</p>
        {/* Change svg to size 50px if using description property */}
        {/* <p className="dev-tool-description">{description}</p> */}
      </div>
    </div>
  )
}

export default Tool