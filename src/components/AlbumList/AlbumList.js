import React, {useEffect, useState} from 'react';
import Album from "./Album/Album";
import {albumService} from "../../services";

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumService.getAll().then(({data}) => setAlbums(data))
    }, [])
    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export default AlbumList;