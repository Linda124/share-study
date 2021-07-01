import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import * as api from '../../api/index.js';
import axios from 'axios';
// import { API_URL } from '../../api/index';
import DeleteIcon from '@material-ui/icons/Delete';
import {Typography, Paper } from '@material-ui/core';



// port { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import useStyles from './styles.js';
// import moment from 'moment';
// import { useDispatch } from 'react-redux';
// import { deleteReview, likeReview } from '../../../actions/reviews'

// const API = axios.create({ baseURL: 'http://localhost:3000' });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//       req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
  
//     return req;
// });

const FilesList = ({}) => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {

    const getFilesList = async () => {
      try {
        const { data } = await api.getFiles();
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await api.downloadFile(id);
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };


  const deleteFile = async (id, path, mimetype) => {
    try {
      const result = await api.deleteFile(id);
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return delete(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while deleting file. Try again later');
      }
    }
  };
  
//   const updateFile = async (id, path, mimetype) => {
//     try {
//       const { result } = await API.patch(`${API_URL}/edit/${id}`, {});
//       const split = path.split('/');
//       const filename = split[split.length - 1];
//       setErrorMsg('');
//       return postMessage(result.data, filename, mimetype);
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setErrorMsg('Error while editing file. Try again later');
//       }
//     }
//   };

//   export const updateFile = async (id, path, mimetype => {
//     const { id: _id } = req.params;
//     const review = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No review with that id`);

//     const updatedReview = await cs2030sReviewsMessage.findByIdAndUpdate(_id, { ...review, _id }, { new: true });

//     res.json(updatedReview);
// }

if (!user?.result?.name) {
    return (
      <Paper className={"classes.paper"}>
        <Typography variant="h6" align="center">
          Please sign in to download files.
        </Typography>
      </Paper>
    );
}
// if ( (user?.result?.name === file?.creator) ) {
    return (
        <div className="files-container">
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <table className="files-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Download File</th>
                <th>Delete File</th>
              </tr>
            </thead>
            <tbody>
              {filesList.length > 0 ? (
                filesList.map(
                  ({ _id, title, description, file_path, file_mimetype, name}) => (
                    <tr key={_id}>
                      <td className="file-title">{title}</td>
                      <td className="file-description">{description}</td>
                      <td>
                        <a
                          href="#/"
                          onClick={() =>
                            downloadFile(_id, file_path, file_mimetype)
                          }
                        >
                          Download
                        </a>
                      </td>
                      <td>
                      {/* {(user?.result?._id === name) && ( */}
                        <a
                          href=""
                          
                          onClick={() =>
                            deleteFile(_id, file_path, file_mimetype)
                          }
                        >
                          <DeleteIcon fontSize="small" />
                        </a> 
                      </td> 
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={4} style={{ fontWeight: '300' }}>
                    No files found. Please add some.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }

export default FilesList;