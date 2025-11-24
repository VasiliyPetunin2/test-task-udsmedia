/**
 * Converts the rating to an icon configuration
 * @param {number} rating - rating from 0 to 5 (for example, 3.7)
 * @returns {Object} icon configuration for the render
 */
export const getRatingStarsConfig = (rating) => {
  let yellowStarsCount = Math.floor(rating);

  const fractionalPart = rating - yellowStarsCount;

  let halfStar = false;
  let grayStarsCount = 0;

  if (fractionalPart < 0.25) {
    grayStarsCount = 5 - yellowStarsCount;
  } else if (fractionalPart >= 0.75) {
    grayStarsCount = 5 - yellowStarsCount - 1;
    yellowStarsCount += 1;
  } else {
    halfStar = true;
    grayStarsCount = 5 - yellowStarsCount - 1;
  }

  return {
    yellowStarsCount,
    halfStar,
    grayStarsCount,
  };
};
