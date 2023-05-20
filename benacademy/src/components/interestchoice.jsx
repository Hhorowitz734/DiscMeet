

export default function InterestChoice({label, emoji, interests, interestClickedFunc}){

    const interest_text = label + emoji;

    return(
        <div className={`mx-5 my-3 cursor-pointer border-2 border-white p-2 rounded-lg ${interests.indexOf(interest_text) !== -1 ? 'bg-opacity-40 hover:bg-opacity-20' : 'bg-opacity-0 hover:bg-opacity-20'} bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-1000    `} onClick = {() => interestClickedFunc(interest_text)}>
            <h1 className="text-4xl">{label} {emoji}</h1>
        </div>
    )
}