import './index.css';
import { uploads } from '../../utils/config';

// Components
import { Message } from '../../components/Message';
import { Link } from 'react-router-dom';
import { PhotoItem } from '../../components/PhotoItem/index.jsx';

// Hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';

// Redux
import { getPhoto, like, comment } from '../../slices/photoSlice';
import LikeContainer from '../../components/LikeContainer';

const Photo = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector((state) => state.photo);

  const [commentText, setCommentText] = useState('');

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  const handleLike = () => {
    dispatch(like(photo._id));

    resetMessage();
  }

  // Insert comment
  const handleComment = (e) => {
    e.preventDefault();

    const commentData = {
      comment: commentText,
      id: photo._id
    }

    dispatch(comment(commentData));

    setCommentText('');

    resetMessage();
  }

  if (loading) {
    return (
      <p>Carregando...</p>
    )
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} />
      {/* <div className="message-container"> */}
      {error && <Message msg={error} type='error' />}
      {error && <p>teste</p>}
      {message && <Message msg={message} type='success' />}
      {message && <p>sucess</p>}
      {/* </div> */}
      <div className="comments">
        {photo.comments && (
          <>
            <h3>Comentários: ({photo.comments.length})</h3>
            <form onSubmit={handleComment}>
              <input type='text' placeholder='Insira o seu comentário...' onChange={(e) => setCommentText(e.target.value)} value={commentText || ''} />
              <input type='submit' value='Enviar' />
            </form>

            {photo.comments.length === 0 && <p>Não há comentários</p>}
            {photo.comments.map((comment) => (
              <div className="comment" key={comment.comment}>
                <div className="author">
                  {comment.userImage && (
                    <img src={`${uploads}/users/${comment.userImage}`} alt={comment.userName} />
                  )}
                  <Link to={`/users/${comment.userId}`}>
                    <p>{comment.userName}</p>
                  </Link>
                </div>
                <p>{comment.comment}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Photo;
