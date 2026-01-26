import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Success = () => {

  const [countdown, setCountdown] = useState(10); 
const navigate = useNavigate();

useEffect(() => {
const timeOutId = setInterval(() => {
  setCountdown(prevCount => {
    if (prevCount <= 1) {
      clearInterval(timeOutId);
      navigate('/');
    }
    return prevCount - 1;
  })
}, 1000);
return () => clearInterval(timeOutId);
}, [navigate])

return<>
<section>
  <div className="notFound">
    <div className="container">
      <img src="/sandwich.png" alt="success" />
      <h1>Redirecting to Home in {countdown} seconds.....</h1>
      <Link to="/">Go to Home Now<HiOutlineArrowNarrowRight/></Link>
    </div>
  </div>
</section>
</>
}

export default Success