const APIbutton = ({onSubmit}) => {

  return (
    <div>
      <button type="submit" className="button" onClick={onSubmit}>
        {">>>"}
      </button>
    </div>
  );
};

export default APIbutton;
