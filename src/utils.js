export const onUserCountChange = data => {
  let { adults, child } = data;
  let small = 0,
    medium = 0,
    large = 0;
  // calulate large pizza
  if (Math.floor(child / 2) && adults) {
    if (Math.floor(child / 2) > adults) {
      const newlarge = adults;
      child -= 2 * newlarge;
      adults = 0;
      large += newlarge;
    } else {
      const newlarge = Math.floor(child / 2);
      child -= 2 * newlarge;
      adults -= newlarge;
      large += newlarge;
    }
  }
  if (Math.floor(child / 4)) {
    const newlarge = Math.floor(child / 4);
    child -= 4 * newlarge;
    large += newlarge;
  }
  if (Math.floor(adults / 2)) {
    const newlarge = Math.floor(adults / 2);
    adults -= 2 * newlarge;
    large += newlarge;
  }
  // calulate medium pizza
  if (Math.floor(child / 2)) {
    const newMedium = Math.floor(child / 2);
    child -= 2 * newMedium;
    medium += newMedium;
  }
  if (adults) {
    const newMedium = adults;
    adults = 0;
    medium += newMedium;
  }
  // calculate small pizza
  if (child) {
    const newSmall = child;
    child = 0;
    small += newSmall;
  }
  // console.log("adults", adults, "child", child);
  // console.log(" small=", small, "large=", large, "medium=", medium);
  return { small, large, medium };
};

export const onPizzaCountChange = data => {
  let { small, medium, large, child, adults, type, operation } = data;
  if (operation === "inc") {
    if (type === "large") {
      adults += 2;
    } else if (type === "medium") {
      adults++;
    } else if (type === "small") {
      child++;
    }
  } else {
    if (type === "large") {
      if (adults <= 0) {
        child -= 4;
      } else if (adults <= 1) {
        adults--;
        child -= 2;
      } else {
        adults -= 4;
      }
    } else if (type === "medium") {
      if (adults <= 1) {
        child -= 2;
      } else {
        adults--;
      }
    } else if (type === "small") {
      child--;
    }
  }
  // // calulate large pizza
  // if (large) {
  //   newAdults += 2 * large;
  //   large = 0;
  // }
  // if (medium) {
  //   newAdults += medium;
  //   medium = 0;
  // }
  // if (small) {
  //   newChild += small;
  //   small = 0;
  // }
  console.log(" small=", small, "large=", large, "medium=", medium);
  console.log("adults", adults, "child", child);
  return { adults, child };
};
