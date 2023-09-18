export default function ReturnButton() {
  const menuReturn = () => {
    const menu = document.querySelector("#c-left");
    const project = document.querySelector("#c-right");
    project.style.transform = "translateX(150%)";
    menu.style.transform = "translateX(0%)";
  };

  return <i className="fa-regular fa-hand-point-left" onClick={menuReturn}></i>;
}
