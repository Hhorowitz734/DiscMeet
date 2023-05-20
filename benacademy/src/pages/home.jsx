import { React, useState, useRef } from "react";
import { useInView } from 'react-intersection-observer';

import Navbar from "../components/navbar";
import GenderOption from "../components/button";
import Selector from "../components/selector";
import ScrollBtn from "../components/scrollbtn";
import InterestChoice from "../components/interestchoice";

function Home() {

  //Interest selcted object

  class Interest {
    constructor(interests, fourthPageRef){
      this.interests = interests;
      this.fourthPageRef = fourthPageRef;
    }
  }

  const [interestsChosen, setInterestsChosen] = useState([]);
  const [interestObject, setInterestObject] = useState(null);
  
  function interestClicked(interest) {

    console.log(interestsChosen)

    const index = interestsChosen.indexOf(interest);
    const updatedInterests = [...interestsChosen];
    
    if (index !== -1) {
      updatedInterests.splice(index, 1);
      setInterestsChosen(updatedInterests);
      const interestObj = new Interest(updatedInterests, pageFourHook);
      setInterestObject(interestObj);
      
    } else if (interestsChosen.length < 4) {
      const interestObj = new Interest([...updatedInterests, interest], pageFourHook);
      setInterestObject(interestObj)
      setInterestsChosen([...updatedInterests, interest]);
      
    } 
    console.log(interestsChosen)
  }

  //Preference selected object

  class Preference {
    constructor(preferences, thirdPageRef) {
      this.preferences = preferences;
      this.thirdPageRef = thirdPageRef;
    }
  }

  const [preferencesChosen, setPreferencesChosen] = useState([]);
  const [preferenceObject, setPreferenceObject] = useState(null);

  function preferenceClicked(preference) {
    const index = preferencesChosen.indexOf(preference);
    const updatedPreferences = [...preferencesChosen];
    
    if (index !== -1) {
      updatedPreferences.splice(index, 1);
      setPreferencesChosen(updatedPreferences);
      let preferenceObj = new Preference(updatedPreferences, pageThreeHook);
      setPreferenceObject(preferenceObj);
    } else {
      setPreferencesChosen([...updatedPreferences, preference]);
      
      let preferenceObj = new Preference([...updatedPreferences, preference], pageThreeHook);
      setPreferenceObject(preferenceObj);
    }
  }
  

  //Gender selected object 
  class Gender {
    constructor(gender, secondPageRef) {
      this.gender = gender;
      this.secondPageRef = secondPageRef;
    }
  }
  const [genderObject, setGenderObject] = useState(null)
  
  
  //Function for gender button clicks
  const genderBtnClicked = (gender) => {
    const genderObject = new Gender(gender, pageTwoHook);
    setGenderObject(genderObject);
    setGender(gender);
    const scrollTopPosition = pageThreeHook.current.offsetTop - 200;
    window.scrollTo({ top: scrollTopPosition, behavior: 'smooth' });
  }
  
  //Ref Hooks defines
  const pageOneHook = useRef(null);
  const pageTwoHook = useRef(null);
  const pageThreeHook = useRef(null);
  const pageFourHook = useRef(null);
  const pageFiveHook = useRef(null);

  //Fade effects for text
  const [iAmText, inView] = useInView({
    triggerOnce: false, // Fade in only once when in view
    threshold: 0.5, // Adjust the threshold value as per your needs
  });

  const [boyBtn, btnInView] = useInView({
    triggerOnce: false, // Fade in only once when in view
    threshold: 0.5, // Adjust the threshold value as per your needs
  });

  const [preferencesChoosers, selectorInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  })

  const [interestChoosers, choosersInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  })

  //Page backgrounds
  const pageOneBg = `data:image/svg+xml;base64,${btoa(
    `<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#001220"></rect><path d="M0 244L20 254.2C40 264.3 80 284.7 120 301.2C160 317.7 200 330.3 240 327.7C280 325 320 307 360 297.3C400 287.7 440 286.3 480 281.2C520 276 560 267 600 266.5C640 266 680 274 720 284.3C760 294.7 800 307.3 840 312.3C880 317.3 920 314.7 940 313.3L960 312L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#6600ff"></path><path d="M0 281L20 287.2C40 293.3 80 305.7 120 310.7C160 315.7 200 313.3 240 311.5C280 309.7 320 308.3 360 307.3C400 306.3 440 305.7 480 307.7C520 309.7 560 314.3 600 308.7C640 303 680 287 720 288.2C760 289.3 800 307.7 840 319.3C880 331 920 336 940 338.5L960 341L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#6f15ff"></path><path d="M0 393L20 389.5C40 386 80 379 120 376.5C160 374 200 376 240 370C280 364 320 350 360 343.5C400 337 440 338 480 336.2C520 334.3 560 329.7 600 328.3C640 327 680 329 720 332.8C760 336.7 800 342.3 840 351.8C880 361.3 920 374.7 940 381.3L960 388L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#7723ff"></path><path d="M0 435L20 429.7C40 424.3 80 413.7 120 406.2C160 398.7 200 394.3 240 390.3C280 386.3 320 382.7 360 382.5C400 382.3 440 385.7 480 390C520 394.3 560 399.7 600 408.2C640 416.7 680 428.3 720 429.7C760 431 800 422 840 412.2C880 402.3 920 391.7 940 386.3L960 381L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#7f2dff"></path><path d="M0 424L20 423.3C40 422.7 80 421.3 120 422.8C160 424.3 200 428.7 240 428.7C280 428.7 320 424.3 360 428.8C400 433.3 440 446.7 480 455.7C520 464.7 560 469.3 600 466.8C640 464.3 680 454.7 720 448.8C760 443 800 441 840 444.8C880 448.7 920 458.3 940 463.2L960 468L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#8536ff"></path><path d="M0 483L20 485.5C40 488 80 493 120 494.8C160 496.7 200 495.3 240 495.7C280 496 320 498 360 495.2C400 492.3 440 484.7 480 479C520 473.3 560 469.7 600 472.5C640 475.3 680 484.7 720 491.7C760 498.7 800 503.3 840 503.5C880 503.7 920 499.3 940 497.2L960 495L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#8c3fff"></path></svg>`
  )}`;
  const pageTwoBg = `data:image/svg+xml;base64,${btoa(
    `<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#8C3FFF"></rect><path d="M0 244L20 254.2C40 264.3 80 284.7 120 301.2C160 317.7 200 330.3 240 327.7C280 325 320 307 360 297.3C400 287.7 440 286.3 480 281.2C520 276 560 267 600 266.5C640 266 680 274 720 284.3C760 294.7 800 307.3 840 312.3C880 317.3 920 314.7 940 313.3L960 312L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#812cff"></path><path d="M0 281L20 287.2C40 293.3 80 305.7 120 310.7C160 315.7 200 313.3 240 311.5C280 309.7 320 308.3 360 307.3C400 306.3 440 305.7 480 307.7C520 309.7 560 314.3 600 308.7C640 303 680 287 720 288.2C760 289.3 800 307.7 840 319.3C880 331 920 336 940 338.5L960 341L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#4b39d8"></path><path d="M0 393L20 389.5C40 386 80 379 120 376.5C160 374 200 376 240 370C280 364 320 350 360 343.5C400 337 440 338 480 336.2C520 334.3 560 329.7 600 328.3C640 327 680 329 720 332.8C760 336.7 800 342.3 840 351.8C880 361.3 920 374.7 940 381.3L960 388L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#1938ae"></path><path d="M0 435L20 429.7C40 424.3 80 413.7 120 406.2C160 398.7 200 394.3 240 390.3C280 386.3 320 382.7 360 382.5C400 382.3 440 385.7 480 390C520 394.3 560 399.7 600 408.2C640 416.7 680 428.3 720 429.7C760 431 800 422 840 412.2C880 402.3 920 391.7 940 386.3L960 381L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#003080"></path><path d="M0 424L20 423.3C40 422.7 80 421.3 120 422.8C160 424.3 200 428.7 240 428.7C280 428.7 320 424.3 360 428.8C400 433.3 440 446.7 480 455.7C520 464.7 560 469.3 600 466.8C640 464.3 680 454.7 720 448.8C760 443 800 441 840 444.8C880 448.7 920 458.3 940 463.2L960 468L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#002350"></path><path d="M0 483L20 485.5C40 488 80 493 120 494.8C160 496.7 200 495.3 240 495.7C280 496 320 498 360 495.2C400 492.3 440 484.7 480 479C520 473.3 560 469.7 600 472.5C640 475.3 680 484.7 720 491.7C760 498.7 800 503.3 840 503.5C880 503.7 920 499.3 940 497.2L960 495L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#001122"></path></svg>`
  )}`;
  const pageThreeBg = `data:image/svg+xml;base64,${btoa(
    `<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#001122"></rect><path d="M0 237L20 245.5C40 254 80 271 120 276.5C160 282 200 276 240 280.2C280 284.3 320 298.7 360 304.2C400 309.7 440 306.3 480 307.5C520 308.7 560 314.3 600 304C640 293.7 680 267.3 720 259.2C760 251 800 261 840 261.3C880 261.7 920 252.3 940 247.7L960 243L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#6600ff"></path><path d="M0 343L20 341.8C40 340.7 80 338.3 120 327.2C160 316 200 296 240 288.8C280 281.7 320 287.3 360 295.3C400 303.3 440 313.7 480 326.8C520 340 560 356 600 360C640 364 680 356 720 352.7C760 349.3 800 350.7 840 355.5C880 360.3 920 368.7 940 372.8L960 377L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#6f15ff"></path><path d="M0 391L20 383.7C40 376.3 80 361.7 120 359.8C160 358 200 369 240 374.8C280 380.7 320 381.3 360 377.7C400 374 440 366 480 357.7C520 349.3 560 340.7 600 348.2C640 355.7 680 379.3 720 387.3C760 395.3 800 387.7 840 381.7C880 375.7 920 371.3 940 369.2L960 367L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#7723ff"></path><path d="M0 396L20 402.8C40 409.7 80 423.3 120 431C160 438.7 200 440.3 240 432C280 423.7 320 405.3 360 400.7C400 396 440 405 480 413C520 421 560 428 600 426.8C640 425.7 680 416.3 720 414.7C760 413 800 419 840 424.5C880 430 920 435 940 437.5L960 440L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#7f2dff"></path><path d="M0 469L20 459.3C40 449.7 80 430.3 120 426.5C160 422.7 200 434.3 240 444.2C280 454 320 462 360 462.7C400 463.3 440 456.7 480 454.8C520 453 560 456 600 450.8C640 445.7 680 432.3 720 432.7C760 433 800 447 840 455.5C880 464 920 467 940 468.5L960 470L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#8536ff"></path><path d="M0 511L20 504C40 497 80 483 120 481.5C160 480 200 491 240 490.8C280 490.7 320 479.3 360 477.7C400 476 440 484 480 489.7C520 495.3 560 498.7 600 494.5C640 490.3 680 478.7 720 480.2C760 481.7 800 496.3 840 500.3C880 504.3 920 497.7 940 494.3L960 491L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#8c3fff"></path></svg>`
  )}`;
  const pageFourBg =  `data:image/svg+xml;base64,${btoa(
    `<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#8C3FFF"></rect><path d="M0 237L20 245.5C40 254 80 271 120 276.5C160 282 200 276 240 280.2C280 284.3 320 298.7 360 304.2C400 309.7 440 306.3 480 307.5C520 308.7 560 314.3 600 304C640 293.7 680 267.3 720 259.2C760 251 800 261 840 261.3C880 261.7 920 252.3 940 247.7L960 243L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#812cff"></path><path d="M0 343L20 341.8C40 340.7 80 338.3 120 327.2C160 316 200 296 240 288.8C280 281.7 320 287.3 360 295.3C400 303.3 440 313.7 480 326.8C520 340 560 356 600 360C640 364 680 356 720 352.7C760 349.3 800 350.7 840 355.5C880 360.3 920 368.7 940 372.8L960 377L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#7c26ff"></path><path d="M0 391L20 383.7C40 376.3 80 361.7 120 359.8C160 358 200 369 240 374.8C280 380.7 320 381.3 360 377.7C400 374 440 366 480 357.7C520 349.3 560 340.7 600 348.2C640 355.7 680 379.3 720 387.3C760 395.3 800 387.7 840 381.7C880 375.7 920 371.3 940 369.2L960 367L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#7720ff"></path><path d="M0 396L20 402.8C40 409.7 80 423.3 120 431C160 438.7 200 440.3 240 432C280 423.7 320 405.3 360 400.7C400 396 440 405 480 413C520 421 560 428 600 426.8C640 425.7 680 416.3 720 414.7C760 413 800 419 840 424.5C880 430 920 435 940 437.5L960 440L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#7118ff"></path><path d="M0 469L20 459.3C40 449.7 80 430.3 120 426.5C160 422.7 200 434.3 240 444.2C280 454 320 462 360 462.7C400 463.3 440 456.7 480 454.8C520 453 560 456 600 450.8C640 445.7 680 432.3 720 432.7C760 433 800 447 840 455.5C880 464 920 467 940 468.5L960 470L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#6c0eff"></path><path d="M0 511L20 504C40 497 80 483 120 481.5C160 480 200 491 240 490.8C280 490.7 320 479.3 360 477.7C400 476 440 484 480 489.7C520 495.3 560 498.7 600 494.5C640 490.3 680 478.7 720 480.2C760 481.7 800 496.3 840 500.3C880 504.3 920 497.7 940 494.3L960 491L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#6600ff"></path></svg>`
  )}`;
  const pageFiveBg = `data:image/svg+xml;base64,${btoa(
  `<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#6600FF"></rect><path d="M0 340L20 337.5C40 335 80 330 120 313.2C160 296.3 200 267.7 240 263.8C280 260 320 281 360 290.7C400 300.3 440 298.7 480 295.8C520 293 560 289 600 276.5C640 264 680 243 720 243.8C760 244.7 800 267.3 840 281.2C880 295 920 300 940 302.5L960 305L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#7417ff"></path><path d="M0 338L20 331.5C40 325 80 312 120 306.8C160 301.7 200 304.3 240 308.7C280 313 320 319 360 320.8C400 322.7 440 320.3 480 327.5C520 334.7 560 351.3 600 344.2C640 337 680 306 720 299C760 292 800 309 840 320.7C880 332.3 920 338.7 940 341.8L960 345L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#8537ff"></path><path d="M0 362L20 364.8C40 367.7 80 373.3 120 369C160 364.7 200 350.3 240 345C280 339.7 320 343.3 360 340.3C400 337.3 440 327.7 480 326.5C520 325.3 560 332.7 600 339.2C640 345.7 680 351.3 720 361.3C760 371.3 800 385.7 840 386.8C880 388 920 376 940 370L960 364L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#934eff"></path><path d="M0 374L20 377.5C40 381 80 388 120 390.3C160 392.7 200 390.3 240 394.3C280 398.3 320 408.7 360 405.3C400 402 440 385 480 387.7C520 390.3 560 412.7 600 419.3C640 426 680 417 720 417.8C760 418.7 800 429.3 840 429.3C880 429.3 920 418.7 940 413.3L960 408L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#a062ff"></path><path d="M0 438L20 437.7C40 437.3 80 436.7 120 437C160 437.3 200 438.7 240 444.5C280 450.3 320 460.7 360 465C400 469.3 440 467.7 480 468.2C520 468.7 560 471.3 600 472.5C640 473.7 680 473.3 720 467.2C760 461 800 449 840 447.3C880 445.7 920 454.3 940 458.7L960 463L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#ad75ff"></path><path d="M0 502L20 500.2C40 498.3 80 494.7 120 495.8C160 497 200 503 240 498.8C280 494.7 320 480.3 360 479.5C400 478.7 440 491.3 480 494.7C520 498 560 492 600 486.2C640 480.3 680 474.7 720 474.8C760 475 800 481 840 485.7C880 490.3 920 493.7 940 495.3L960 497L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#b887ff"></path></svg>`
  )}`;

    //useState hooks for form data
  const [gender, setGender] = useState(null);

  return (
    <div>

      <Navbar pageOneRef = {pageOneHook} gender_object={genderObject} preferences_object={preferenceObject} interest_object={interestObject}/>

      <div 
        className = "w-full h-screen flex flex-col justify-center" ref = {pageOneHook} style={{
        backgroundImage: `url(${pageOneBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      } 
      }>
        <h1 className={`text-8xl text-center transition-opacity duration-500`}
          style={{ transform: 'translateY(-200%)' }}>Let's find your match</h1>
        <div className="text-white text-4xl text-center w-full justify-center flex" 
          style={{ transform: 'translateY(-240%)' }}>
          <ScrollBtn destinationPage={pageTwoHook} />
        </div>

      </div>

      <div 
        className = "w-full h-screen flex flex-col justify-center" style={{
        backgroundImage: `url(${pageTwoBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }} 
      ref = {pageTwoHook}>
        <h1 className={`text-6xl text-center transition-opacity duration-1000 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translateY(-550%)' }}
         ref = {iAmText} >I'm a...</h1>


        <div className="flex mt-4 w-full items-center justify-center" style={{ transform: 'translateY(-300%)' }} ref = {boyBtn}>
        <GenderOption
        gender="male"
        selectedGender={gender}
        btnInView={btnInView}
        genderBtnClicked={genderBtnClicked}
        label="Boy"
        emoji="👦"
      />
      <GenderOption
        gender="female"
        selectedGender={gender}
        btnInView={btnInView}
        genderBtnClicked={genderBtnClicked}
        label="Girl"
        emoji="👧"
      />
      <GenderOption
        gender="other"
        selectedGender={gender}
        btnInView={btnInView}
        genderBtnClicked={genderBtnClicked}
        label="Other"
        emoji="🧑"
      />
        </div>

      </div>

      <div 
        className = "w-full h-screen flex flex-col justify-center items-center" style={{
        backgroundImage: `url(${pageThreeBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }} ref = {pageThreeHook}>
        <h1 className={`text-6xl text-center mt-20 transition-opacity duration-1000 ${selectorInView ? 'opacity-100' : 'opacity-0'}`} 
        style={{ transform: 'translateY(-550%)' }}>I'm looking for...</h1>
        <div className={`flex mt-4 w-full items-center justify-center transition duration-1000 ${selectorInView ? 'opacity-100' : 'opacity-0'}`} style={{ transform: 'translateY(-300%)' }} ref={preferencesChoosers}>
          <Selector preferences = {preferencesChosen} preference = 'Boys' label = 'Boys' emoji = '👦' preferenceSelectionFunc = {preferenceClicked} />
          <Selector preferences = {preferencesChosen} preference = 'Girls' label = 'Girls' emoji = '👧' preferenceSelectionFunc = {preferenceClicked} />
          <Selector preferences = {preferencesChosen} preference = 'People' label = 'People' emoji = '🧑' preferenceSelectionFunc = {preferenceClicked} />
        </div>
        <div style={{ transform: 'translateY(-400%)' }}><ScrollBtn destinationPage={pageFourHook}/></div>

      </div>

      <div 
        className = "w-full h-screen flex flex-col justify-center items-center" ref = {pageFourHook} style={{
        backgroundImage: `url(${pageFourBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
         <h1 className={`text-6xl text-center mt-20 transition-opacity duration-1000 ${choosersInView ? 'opacity-100' : 'opacity-0'}`} 
        style={{ transform: 'translateY(-480%)' }}>My interests are...</h1>

        <div className={`flex mt-4 w-full flex-wrap items-center justify-center transition duration-1000 ${choosersInView ? 'opacity-100' : 'opacity-0'}`} style={{ transform: 'translateY(-110%)' }} ref = {interestChoosers}>
          <InterestChoice label = 'Gaming' emoji = '🎮' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Sports' emoji='⚽️' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Cooking' emoji='🍳' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Music' emoji='🎵' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Reading' emoji='📚' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Traveling' emoji='🏝️' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Photography' emoji='📷' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Art' emoji='🎨' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Writing' emoji='✍️' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Science' emoji='🔬' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Fashion' emoji='👗' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Hiking' emoji='🥾' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Gardening' emoji='🌱' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Dancing' emoji='💃' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Film' emoji='🎬' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Yoga' emoji='🧘‍♀️' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
          <InterestChoice label='Coding' emoji='💻' interests = {interestsChosen} interestClickedFunc={interestClicked}/>
        </div>
        <div style={{ transform: 'translateY(-480%)' }}><ScrollBtn destinationPage={pageFiveHook}/></div>
      </div>

      <div 
        className = "w-full h-screen flex flex-col justify-center items-center" ref = {pageFiveHook} style={{
        backgroundImage: `url(${pageFiveBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}></div>

    </div>
  );
  }
  


export default Home;