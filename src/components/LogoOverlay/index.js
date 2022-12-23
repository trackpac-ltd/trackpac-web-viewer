export default function LogoOverlay(props) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        right: "0",
        zIndex: "400",
      }}
    >
      <a href={props.link}>
        <img src={props.src} alt={props.alt} width="350px" height="auto" />
      </a>
    </div>
  );
}
