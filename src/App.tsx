import { useCallback, useEffect, useMemo } from "react";
import { Dashboard } from "./view";
import styled from "styled-components";
import { useUser } from "hooks/use-user";
import { Button, ImageComponent } from "components";
import errorIllustration from "assets/illustrations/500.svg";
import { LOADING_STATUS } from "constant";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 780px) {
    min-height: 100vh;
    height: 100%;
    overflow: auto;
  }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

function App() {
  const { fetchLoginUser, loadingStatus } = useUser();

  useEffect(() => {
    fetchLoginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = useCallback(() => {
    window.location.reload();
  }, []);

  const renderDashboard = useMemo(() => {
    if (loadingStatus === LOADING_STATUS.REJECTED) {
      return (
        <ErrorScreen>
          <ImageComponent width={400} height={"auto"} src={errorIllustration} />
          <Button onClick={handleClick}>Reload</Button>
        </ErrorScreen>
      );
    }
    if (loadingStatus === LOADING_STATUS.LOADING) {
      return <LoaderWrapper>Loading</LoaderWrapper>;
    }
    return <Dashboard />;
  }, [handleClick, loadingStatus]);

  return <Container>{renderDashboard}</Container>;
}

export default App;
