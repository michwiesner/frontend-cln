const GenericButton = ({ label }: { label: string }) => (
  <button type="button" className="pointer f-w-700 generic-button">
    {label.toUpperCase()}
  </button>
);

export default GenericButton;
