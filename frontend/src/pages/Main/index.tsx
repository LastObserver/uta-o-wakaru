import * as React from 'react';
import * as style from './index.css';
import { connect } from 'react-redux';
import { getArtists } from '../../store/actions/songs';
import { IStore } from '../../store';
import { AnyAction } from 'redux';
import { IArtist } from '../../typings/songs';

export interface IMainPageDispatchToProps {
  getArtists(): AnyAction;
}

export interface IMainPageStateToProps {
  artists: IArtist[];
}

export type TMainPageProps = (
  IMainPageDispatchToProps & IMainPageStateToProps
);

export class MainPage extends React.Component<TMainPageProps> {

  public componentDidMount() {
    this.props.getArtists();
  }

  public render() {
    return (
      <section className={style.container}>
        It's a Main Page, trust me, lad!
      </section>
    )
  }
}

export const MainPageContainer = connect<
  IMainPageStateToProps,
  IMainPageDispatchToProps,
  {},
  IStore
>(
  (state: IStore) => ({
    artists: state.songs.artists,
  }),
  {
    getArtists,
  }
)(MainPage);