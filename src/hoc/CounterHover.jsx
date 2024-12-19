import WithCounter from "./WithCounter"

function CounterHover({increment,count}) {
  return (
    <>
      <div className="card">
        <button onMouseOver={increment}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default WithCounter(CounterHover)