import  * as React from 'react';
import { RouteComponentProps, Switch, Route, withRouter } from 'react-router';
import { ROUTES } from '../routes';
import { MainPageContainer } from '../pages/Main';

export const Index: React.SFC<RouteComponentProps> = (props) => (
  <Switch>
    <Route exact path={ROUTES.MAIN_PAGE} component={MainPageContainer} />
  </Switch>
)

export const ContentWithRouter = withRouter(Index);
