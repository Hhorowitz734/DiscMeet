

export default function Selector ({preference, preferences, label, emoji, preferenceSelectionFunc}) {

    let selectorInView = true;

    console.log(preferences)

    return (
        <div
          className={`mx-5 cursor-pointer border-2 border-white p-2 rounded-lg ${preferences.indexOf(preference) !== -1 ? 'bg-emerald-500 bg-opacity-40 hover:bg-opacity-20' : 'bg-emerald-500 bg-opacity-0 hover:bg-opacity-20'} transition-opacity duration-1000 ${selectorInView ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => preferenceSelectionFunc(preference)}
        >
          <h1 className="text-6xl">
            {label} {emoji}
          </h1>
        </div>
      );
}