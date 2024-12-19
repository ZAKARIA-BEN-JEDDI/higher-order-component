import WithCounter from "./WithCounter"

function CounterClick(props) {
  return (
    <>
      <div className="card">
        <button onClick={props,increment}>
          count is {props.count}
        </button>
      </div>
    </>
  )
}

export default WithCounter(CounterClick)