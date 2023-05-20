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

function PreferenceBox ({preferences_object}) {

    const setModalText = (pref) => {

        let modal_text = '';

        switch (pref) {
            case 'Boys':
                modal_text = 'Boys ❤️👦';
              break;
            case 'Girls':
                modal_text = 'Girls ❤️👧';
              break;
            case 'People':
              modal_text = modal_text = 'People ❤️🧑';
              break;
            default:
              modal_text = 'unknown gender';
          }
        
          return modal_text;
    }

    return(
        <div className="flex">
        {preferences_object.preferences.map((preference) => (
            <div className="ml-5 border border-white rounded-lg bg-white bg-opacity-0 hover:bg-opacity-30 px-2 cursor-pointer transition duration-200" onClick={() => ScrollTo(preferences_object.thirdPageRef)}>{setModalText(preference)}</div>
        ))}
        </div>
    )
}

function InterestBox({interest_object}){
  return(
    <div className="flex">
      {interest_object.interests.map((interest) => (
          <div className="ml-5 border border-white rounded-lg bg-white bg-opacity-0 hover:bg-opacity-30 px-2 cursor-pointer transition duration-200" onClick={() => ScrollTo(interest_object.fourthPageRef)}>{interest}</div>
      ))}
    </div>
  )
}


export default function Navbar({pageOneRef, gender_object, preferences_object, interest_object}) {
    return (
        <div className="h-12 w-full fixed flex items-center px-5">
            <h1 className="cursor-pointer" onClick={() => ScrollTo(pageOneRef)}>DiscMeet</h1>
            {gender_object && <GenderBox gender_object={gender_object}/>}
            {preferences_object && preferences_object.preferences.length > 0 && <PreferenceBox preferences_object={preferences_object} />}
            {interest_object && interest_object.interests.length > 0 && <InterestBox interest_object={interest_object} />}
            <h1 className="ml-auto">Match Time In: 6:59:33</h1>
        </div>
    )

}