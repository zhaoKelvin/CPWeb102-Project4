const CatInfoButton = ({infos, addToBanList}) => {

  return (
    <div>
      <h3> Cat Information: </h3>
        {infos &&
          Object.entries(infos).map(([category, value], index) => (
            <button type="submit" className="button" onClick={addToBanList} key={index}>
              <h2>{value}
                {category === "age" || category === "weight" ? (
                  category === "age" ? (
                    " years"
                  ) : (
                    " lbs"
                  )
                ) : (
                  ""
                )}</h2>
            </button>
          ))}
    </div>
  );
};

export default CatInfoButton;
