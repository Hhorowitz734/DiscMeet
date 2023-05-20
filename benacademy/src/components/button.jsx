const GenderOption = ({ gender, selectedGender, btnInView, genderBtnClicked, label, emoji }) => {
    return (
      <div
        className={`mx-5 cursor-pointer border-2 border-white p-2 rounded-lg ${gender === selectedGender ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-0'}  hover:${gender === selectedGender ? 'bg-opacity-50' : 'bg-opacity-30'} transition-opacity duration-1000 ${btnInView ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => genderBtnClicked(gender)}
      >
        <h1 className="text-6xl">
          {label} {emoji}
        </h1>
      </div>
    );
  };
  
  export default GenderOption;
  