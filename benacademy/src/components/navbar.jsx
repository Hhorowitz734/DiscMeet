//Turn Each Little Navigation Box into a class and use inheritance

function ScrollTo(ref){
    const scrollTopPosition = ref.current.offsetTop - 200;
    window.scrollTo({ top: scrollTopPosition, behavior: 'smooth' });
}


function GenderBox ({gender_object}){

    let modal_text = '';

    switch (gender_object.gender) {
        case 'male':
            modal_text = 'Boy 👦';
          break;
        case 'female':
            modal_text = 'Girl 👧';
          break;
        case 'other':
          modal_text = modal_text = 'Person 🧑';
          break;
        default:
          modal_text = 'unknown gender';
      }

    return (
        <div className="ml-5 border border-white rounded-lg bg-white bg-opacity-0 hover:bg-opacity-30 px-2 cursor-pointer transition duration-200" onClick = {() => ScrollTo(gender_object.secondPageRef)}>{modal_text}</div>
    )
}




export default function Navbar({gender_object}) {
    if (gender_object){
    return (
        <div className="h-12 w-full fixed flex items-center px-5">
            DiscMeet
            <GenderBox gender_object={gender_object}/>
            <h1 className="ml-auto">Match Time In: 6:59:33</h1>
        </div>
    )
    }
    else {
        return (
            <div className="h-12 w-full fixed flex items-center px-5">
                DiscMeet
                <h1 className="ml-auto">Match Time In: 6:59:33</h1>
            </div>
        )
    }
}