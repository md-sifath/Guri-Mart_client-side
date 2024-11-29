import e from 'express';
import { useState } from 'react';

function ReviewWindow({ productName, ProductId, onSubmit }) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  function handleReviewChange(e) {
    setReview(e.target.value);
  }
  function handleRatingChange(rate) {
    setRating(rate);
  }

  function handleSubmit(e) {
    e.preventdefault();
  }
  return <div></div>;
}

export default ReviewWindow;
