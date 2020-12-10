const performancePage = () => {
  return `
    <section class="performance-page">
      <div class="primary">
        <p>Playback and performance</p>
        <p>Control your video viewing experience</p>
        <small>Playback settings apply to this browser only</small>
      </div>
      <div>
        <div class="user-options">
          <p>Info cards</p>
          <label class="checkbox input-options">
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
            <small>Show in-video info cards</small>
          </label>
        </div>
        <div class="user-options">
          <p>Subtitles and Closed Captions</p>
          <div>
            <label class="checkbox input-options">
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
              <small>Always show captions</small>
            </label>
            <label class="checkbox input-options">
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
              <small>Include auto-generated captions (when available)</small>
            </label>
          </div>
        </div>
        <div class="user-options">
          <p>AV1 settings</p>
          <div>
            <label class="radio input-options">
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark"></span>
              <small>Auto (recommended)</small>
            </label>
            <label class="radio input-options">
              <input type="radio" name="radio">
              <span class="checkmark"></span>
              <small>Prefer AV1 for SD</small>
            </label>
            <label class="radio input-options">
              <input type="radio" name="radio">
              <span class="checkmark"></span>
              <small>Always prefer AV1</small>
            </label>
          </div>
        </div>
      </div>
    </section>
  `
}

export default performancePage;
