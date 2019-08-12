import * as React from 'react';
import * as style from './index.css';
import axios from 'axios';
// import { connect } from 'react-redux';

export class MainPageContainer extends React.Component {

  public componentDidMount() {
    axios.get('http://localhost:4000/api/songs?artistId=5d517108e096450253b45103');
    axios.get('http://localhost:4000/api/song?songId=5d517118e096450253b45105');
    axios.get('http://localhost:4000/api/artists');
  }

  public render() {
    return (
      <section className={style.container}>
        It's a Main Page, trust me, lad!
      </section>
    )
  }
}

// export const MainPageContainer = connect<{}, {}, {}, {}>(
//   () => ({}), {}
// )(MainPage);