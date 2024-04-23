import React from 'react';

const Credits = () => {
  const styles = {
    developerInfo: {
      textAlign: 'center',
      padding: '20px',
      marginTop: '50px',
      fontSize: '16px',
      color: '#666',
      width:'100%',
      backgroundColor: '#f4f4f4',
    }
  };
  return (
    <div class="footer" style={styles.developerInfo}>
      Website developed by <a target="_blank">Pepe Baselga-Garriga and Nicholas Josephson</a>
    </div>
  );
};

export default Credits;