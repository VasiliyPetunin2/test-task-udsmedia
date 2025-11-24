import { useState } from "react";
import Icon from "@/components/ui/icon/Icon.jsx";
import { getRatingStarsConfig } from "@/utils/getRatingStarsConfig.js";
import { useResponsiveIconSize } from "@/hooks/useResponsiveIconSize.js";
import styles from "./card.module.scss";

const Card = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const { yellowStarsCount, halfStar, grayStarsCount } = getRatingStarsConfig(
    data.fivePointRating,
  );

  // Определяем адаптивные размеры для каждой иконки
  const homeSize = useResponsiveIconSize(20, 22);
  const pictureSize = useResponsiveIconSize(23, 19);
  const threeSixtySize = useResponsiveIconSize(32, 21);
  const cameraSize = useResponsiveIconSize(24, 16);
  const heartSize = useResponsiveIconSize(26, 24);
  const locationSize = useResponsiveIconSize(17, 21);
  const routeSize = useResponsiveIconSize(16, 17);
  const metroSize = useResponsiveIconSize(22, 14);
  const starSize = useResponsiveIconSize(15, 14);

  return (
    <article
      className={styles.card}
      onMouseEnter={() => setIsButtonVisible(true)}
      onMouseLeave={() => setIsButtonVisible(false)}
    >
      <div className={styles["card-img-wrapper"]}>
        <div className={styles["icon-home"]}>
          <Icon
            name="home"
            fillColor={"var(--color-primary)"}
            height={homeSize.height}
            width={homeSize.width}
          />
        </div>
        <div className={styles["buttons"]}>
          <button>
            <Icon
              name={"picture"}
              strokeColor={"var(--color-secondary)"}
              fillColor={"none"}
              height={pictureSize.height}
              width={pictureSize.width}
            />
          </button>
          <button>
            <Icon
              name={"360"}
              strokeColor={"var(--color-secondary)"}
              fillColor={"none"}
              height={threeSixtySize.height}
              width={threeSixtySize.width}
            />
          </button>
          <button>
            <Icon
              name={"camera"}
              strokeColor={"var(--color-secondary)"}
              fillColor={"none"}
              height={cameraSize.height}
              width={cameraSize.width}
            />
          </button>
        </div>
        <img src={data.imagePath} alt={data.name} className={styles.img} />
        <article className={styles.desc}>
          <p className={styles.text}>{data.description}</p>
        </article>
      </div>
      <div className={styles["card-info"]}>
        <h3
          className={`${styles["card-info-title"]} ${
            isLiked ? styles.highlight : ""
          }`}
        >
          {data.name}
        </h3>
        <button
          className={styles["card-info-button-like"]}
          onClick={() => setIsLiked((prevIsLiked) => !prevIsLiked)}
        >
          <Icon
            name={"heart"}
            strokeColor={
              isLiked ? "var(--color-highlight)" : "var(--color-secondary)"
            }
            fillColor={isLiked ? "var(--color-highlight)" : "none"}
            height={24}
            width={26}
          />
        </button>
        <button
          className={`${styles["card-info-button-go-to"]} ${
            isButtonVisible ? styles.show : ""
          }`}
        >
          Перейти
        </button>
        <div className={styles["card-subinfo-wrapper"]}>
          <figure className={styles["card-subinfo"]}>
            <Icon
              name={"location"}
              strokeColor={"var(--color-tertiary)"}
              height={locationSize.height}
              width={locationSize.width}
            />
            <figcaption className={styles["card-info-text"]}>
              {data.address}
            </figcaption>
          </figure>
          <figure className={styles["card-subinfo"]}>
            <Icon
              name={"route"}
              strokeColor={"var(--color-tertiary)"}
              height={routeSize.height}
              width={routeSize.width}
            />
            <figcaption className={styles["card-info-text"]}>
              {data.distanceToTheUser}
            </figcaption>
          </figure>
          <figure className={styles["card-subinfo"]}>
            <Icon
              name={"metro"}
              strokeColor={"var(--color-tertiary)"}
              height={metroSize.height}
              width={metroSize.width}
            />
            <figcaption className={styles["card-info-text"]}>
              {data.metro.station}, {data.metro.timeToWalkFromUsersPosition}
            </figcaption>
          </figure>
        </div>
        <div className={styles["card-rating"]}>
          <div className={styles["card-rating-stars"]}>
            {Array.from({ length: yellowStarsCount }, (_, idx) => (
              <Icon
                key={data.id + idx + "yellow"}
                name={"star"}
                fillColor={"#FDD91C"}
                height={starSize.height}
                width={starSize.width}
              />
            ))}
            {halfStar && (
              <Icon
                name={"halfstar"}
                height={starSize.height}
                width={starSize.width}
              />
            )}
            {Array.from({ length: grayStarsCount }, (_, idx) => (
              <Icon
                key={data.id + idx + "gray"}
                name={"star"}
                fillColor={"var(--color-quaternary)"}
                height={starSize.height}
                width={starSize.width}
              />
            ))}
          </div>
          <span className={styles["card-rating-score"]}>
            {data.fivePointRating}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
