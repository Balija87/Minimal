import React, { useState, useEffect } from 'react';
import './CommentBox.css'; // Stilizacija komponente
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const CommentBox = ({ showDelete }) => {
  const [name, setName] = useState(''); // Držimo trenutni unos imena
  const [comment, setComment] = useState(''); // Držimo trenutni unos komentara
  const [comments, setComments] = useState([]); // Držimo listu svih komentara
  const [rating, setRating] = useState(0); // Držimo trenutni rejting
  const [hover, setHover] = useState(null); // Držimo trenutni hover rejting

  // Učitavanje komentara iz backend servera pri inicijalizaciji komponente
  useEffect(() => {
    axios
      .get('http://localhost:5000/comments')
      .then((response) => setComments(response.data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, []);

  // Funkcija koja se poziva kada korisnik unese ime
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Funkcija koja se poziva kada korisnik unese komentar
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Funkcija koja se poziva kada korisnik pošalje komentar
  const handleSubmit = (event) => {
    event.preventDefault();

    // Ako je ime ili komentar prazan, ne šaljemo ga
    if (name.trim() === '' || comment.trim() === '') {
      alert('Molimo vas da unesete ime i komentar!');
      return;
    }

    // Dodajemo novi komentar u listu komentara
    const newComment = {
      name: name,
      text: comment,
      date: new Date().toLocaleString(), // Datum kada je komentar ostavljen
      rating: rating, // Dodajemo rejting
    };

    axios
      .post('http://localhost:5000/comments', newComment)
      .then((response) => {
        setComments([...comments, response.data]);
        setName('');
        setComment('');
        setRating(0);
      })
      .catch((error) => console.error('Error posting comment:', error));
  };

  // Funkcija za brisanje komentara
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/comments/${id}`)
      .then(() => {
        setComments(comments.filter((comment) => comment._id !== id));
      })
      .catch((error) => console.error('Error deleting comment:', error));
  };

  return (
    <div className="comment-box p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Knjiga utisaka</h2>

      {/* Forma za unos komentara */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Vaše ime"
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Ostavite vaš komentar..."
          rows="5"
          className="w-full p-2 border rounded mb-2"
        ></textarea>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  className="hidden"
                />
                <FaStar
                  className={`cursor-pointer ${
                    ratingValue <= (hover || rating)
                      ? 'text-yellow-500'
                      : 'text-gray-300'
                  }`}
                  size={30}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Pošaljite komentar
        </button>
      </form>

      {/* Prikazivanje svih komentara */}
      <div className="comments-list">
        <h3 className="text-xl font-semibold mb-2">Prethodni komentari:</h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} className="comment p-2 border-b mb-2">
              <p>
                <strong>Ime:</strong> {comment.name}
              </p>
              <p>
                <strong>Datum:</strong> {comment.date}
              </p>
              <p>{comment.text}</p>
              <div className="flex">
                {[...Array(5)].map((star, index) => (
                  <FaStar
                    key={index}
                    className={`${
                      index < comment.rating
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    size={20}
                  />
                ))}
              </div>
              {showDelete && (
                <button
                  onClick={() => handleDelete(comment._id)}
                  className="bg-red-500 text-white p-1 rounded mt-2"
                >
                  Obrišite
                </button>
              )}
            </div>
          ))
        ) : (
          <p>Nema komentara.</p>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
