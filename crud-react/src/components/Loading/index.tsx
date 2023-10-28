import { Spinner } from "phosphor-react";
import { LoadingContainer } from "./styles";

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;
