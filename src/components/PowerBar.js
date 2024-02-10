import "../styles/powerbar.css";

function PowerBar({ character }) {
  return (
    <div class='column reservoir'>
      <div
        class='card'
        id='${tribe}'
      >
        <article>
          <input
            type='radio'
            name='switch-color'
            class='${energy}'
            id='${energy}'
            checked
          />
          <div class='chart'>
            <div class='bar'>
              <div class='face top'>
                <div class='filling-bar'></div>
              </div>
              <div class='face side-0'>
                <div class='filling-bar'></div>
              </div>
              <div class='face floor'>
                <div class='filling-bar'></div>
              </div>
              <div class='face side-a'></div>
              <div class='face side-b'></div>
              <div class='face side-1'>
                <div class='filling-bar'></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default PowerBar;
