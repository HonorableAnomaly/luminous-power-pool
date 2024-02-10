import "../styles/powerbar.css";

function PowerBar({ character }) {
  return (
    <div className='column reservoir'>
      <div
        className='card'
        id={character.tribe}
      >
        <article>
          <input
            type='radio'
            name='switch-color'
            className={character.power}
            id={character.power}
            checked
          />
          <div className='chart'>
            <div className='bar'>
              <div className='face top'>
                <div className='filling-bar'></div>
              </div>
              <div className='face side-0'>
                <div className='filling-bar'></div>
              </div>
              <div className='face floor'>
                <div className='filling-bar'></div>
              </div>
              <div className='face side-a'></div>
              <div className='face side-b'></div>
              <div className='face side-1'>
                <div className='filling-bar'></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default PowerBar;
