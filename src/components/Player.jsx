import { useState } from 'react';

function Player({ initialName, symbol }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  //   let playerName = <span className='player-name'>{name}</span>;

  //   if (isEditing) {
  //     playerName = <input type='text' required />;
  //   }

  return (
    <li>
      <span className='player'>
        {isEditing ? (
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        ) : (
          <span className='player-name'>{name}</span>
        )}

        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
