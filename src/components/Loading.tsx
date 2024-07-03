import { loaderStyles as styles } from "../modules";

type Props = object;

const Loading: React.FC<Props> = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
