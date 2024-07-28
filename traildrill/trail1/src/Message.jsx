function Message() {
  let a = 7;
  let b = 9;
  let peoples = [
    {
      name: "Person 1",
      age: 20,
    },
    {
      name: "Person 2",
      age: 30,
    },
    {
      name: "Person 3",
      age: 40,
    },
  ];
  let handleClick = ()=>{
    alert("Drills Alert Keep going")
  }
  return (
    <div>
      {a == b && b == a ? <h1>Both Are Same</h1> : <h2>Both Are Not Same</h2>}
      {peoples.map((people) => {
        return (
          <div>
            <h1>Name : {people.name}</h1>
            <h2> Age is : {people.age}</h2>
          </div>
        );
      })}
      <button onClick={handleClick}>Click to know more</button>
      <div>
        <a href="https://www.google.com/">Google</a>
      </div>
    </div>
  );
}

export default Message;
