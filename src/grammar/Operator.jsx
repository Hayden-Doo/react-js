const Operator = () => {
  let a = 1
  let b = 2

  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6]

  console.log('...array1, ...array2 : ', ...array1, ...array2)
  return (
    <div>
      <h2>연산자</h2>
      <h2>논리 연산자</h2>
      <p>1 : {`${true && true}`}</p>
      <p>2 : {`${true && false}`}</p>
      <p>3 : {`${true || false}`}</p>
      <p>4 : {`${true || true}`}</p>
      <p>5 : {`${false || false}`}</p>
      <p>6 : {`${!true}`}</p>
      <br />
    </div>
  )
}
export default Operator
