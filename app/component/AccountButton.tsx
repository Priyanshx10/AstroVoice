import React from 'react';

function AccountButton() {
  const handleAccountClick = () => {
    // Handle account click logic here
    alert('Login Required!');
  };

  return (
    <div onClick={handleAccountClick}>
      Account
    </div>
  );
}

export default AccountButton;