import React, { useEffect } from "react";
import { fetchAlbums } from "../actions/albumActions";
import { fetchPosts } from "../actions/postActions";

import { connect } from "react-redux";
import ContextDemo from "./ContextDemo";

export const albumContext = React.createContext();


function FetchAlbums(props) {

  useEffect(() => {
    props.fetchAlbums();
    return () => {};
  }, []);

  const albumsList = props.album.map(m => (
    <div key={m.id}>
      <h3>{m.title}</h3>
      <hr />
    </div>
  ));

  return <div>
      {albumsList}
      <br/><br/>
      <albumContext.Provider value={'COOL'}>
       <h1>CONTEXT AND REDUCER DEMO</h1>
      <ContextDemo/>
      </albumContext.Provider>

      <hr/>
     
      </div>;
}

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.albums.items
  };
};

export default connect(mapStateToProps, { fetchAlbums, fetchPosts })(
  FetchAlbums
);
