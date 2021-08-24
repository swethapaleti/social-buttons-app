function Button(props) {
  //   Write your code here.
  return <button className={`button ${props.className}`}>{props.text}</button>;
}

const element = (
  //   Write your code here.
  <div className="social-buttons-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like-button" text="Like" />
        <Button className="comment-button" text="Comment" />
        <Button className="share-button" text="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
