function Hello() {
    console.log('Hello World!!');
    return(
        <>
            <div>
                <h2>컴포넌트 만들기</h2>
            </div>
            <div>
                <p>Lorem....</p>
            </div>
        </>
    )
}

// function World(){
export function World(){
    return(
        <h3>나만의 세상</h3>
    )
}

export function World2(){
    return(
        <h4>나만의 세상 2</h4>
    )
}


export default Hello;
// export {World};