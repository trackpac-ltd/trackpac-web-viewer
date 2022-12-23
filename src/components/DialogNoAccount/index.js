import BasicDialog from "../BasicDialog";

export default function DialogNoAccountFound(props) {
  return (
    <BasicDialog
      open={props.open}
      title="Oops! No Account Found"
      message="We couldn't find any trackers. Please check the account ID and try again. Also make sure your account is marked as public."
      actions={[
        {
          text: "Find out more about Trackpac",
          variant: "contained",
          color: "primary",
          onclick: "https://trackpac.io",
        },
        {
          text: "Return to Trackpac App",
          variant: "contained",
          color: "secondary",
          onclick: "https://app.trackpac.io",
        },
      ]}
    />
  );
}
