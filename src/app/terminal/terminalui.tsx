export default function TerminalUI() {
  return (
    <div style={{
      marginTop: "20px",
      display:"flex",
      justifyContent: "center",
      alignContent: "center",
    }}>
    <iframe
      src="http://localhost:7681"
      style={{
        position: "absolute",
        width: "95%",
        height: "95%",
        overflow: "hidden",
        border: "none",
      }}
    ></iframe>
    </div>

  );
}
