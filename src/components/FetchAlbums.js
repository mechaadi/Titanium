import React, {useEffect } from "react";
import { fetchAlbums } from "../actions/albumActions";
import { fetchPosts } from "../actions/postActions";


import {connect} from 'react-redux';


 function FetchAlbums(props) {

  useEffect(() => {
    
    props.fetchAlbums();
    return()=>{

    }
  }, []);


  const albumsList = props.album.map(m => (
    <div key={m.id}>
      <h3>{m.title}</h3>
      <hr/>
    </div>
  ));

return <div>{albumsList}

</div>;


}

const mapStateToProps = (state, ownProps)=>{
    return {
        album: state.albums.items,
    }
}




export default connect(mapStateToProps, {fetchAlbums, fetchPosts})(FetchAlbums);



