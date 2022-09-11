import classes from "./Author.module.css";

const Author = (props) => {
  return (
    <div class={`${classes.attribution} ${props.className}`}>
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      Coded by <a href="#">To Dat</a>.
    </div>
  );
};

export default Author;
