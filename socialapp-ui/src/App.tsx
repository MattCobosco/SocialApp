import { Fragment } from 'react';
import { SocialAppLayout } from './common/components/Layout';
import { GlobalStyle } from './common/styledHelpers/global';
import { Routing } from './routes';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <SocialAppLayout>
        <Routing />
      </SocialAppLayout>
    </Fragment>
  );

}

export default App;
