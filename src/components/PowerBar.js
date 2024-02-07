import "../styles/powerbar.css";

function PowerBar() {
  return (
    <div class='column reservoir'>
      <div
        class='card'
        id='${tribe}'
      >
        {/* <div class='card-image'> */}
        {/* <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" /> */}
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
        {/* </div> */}
      </div>
    </div>
  );
}

export default PowerBar;
