const List = ({dataFromAPI}) => {
  return (
    <>
    <div className="data_heading">
        <h2>Hostname</h2>
        <h2>IP(s)</h2>
        <h2>Name Servers</h2>
    </div>
    {
    dataFromAPI.map((element, index) => {
        return (
          <div key={index} className="data_val">
            <h5>{element.hostname}</h5>
            <h5>
            {element.address &&
                element.address.map((nsElement, nsKey) => {
                  return <li key={nsKey}>{nsElement}</li>;
                })}
            </h5>
            <h5>
              {element.nameserver &&
                element.nameserver.map((nsElement, nsKey) => {
                  return <li key={nsKey}>{nsElement}</li>;
                })}
            </h5>
          </div>
        );
      })
    }
      </>
  )
}

export default List
