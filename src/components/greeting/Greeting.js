import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGreeting, fetchAsync } from '../../redux/reducers/greetingSlice';
// Greeting component
const Greeting = () => {
  const greeting = useSelector(selectGreeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  const container = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={container}>
      <header>
        <h1>Greeting App </h1>
      </header>

      <p style={{ marginTop: -30, fontSize: 16, color: 'gray' }}> You can see random greeting message every refresh</p>

      <div className="row">
        {' '}
        <span style={{ color: 'cadetblue', fontStyle: 'italic', fontSize: 24 }}>
          {greeting}
        </span>
      </div>
    </div>
  );
};

export default Greeting;
