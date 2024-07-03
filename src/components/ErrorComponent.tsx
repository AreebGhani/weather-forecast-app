import { errorStyles as styles } from "../modules";

type Props = {
  error: string | null;
};

const ErrorComponent: React.FC<Props> = ({ error }: Props) => {
  if (!error) return null;

  return (
    <div className={styles.error}>
      <p>{error}</p>
    </div>
  );
};

export default ErrorComponent;
