import classes from './SocialLinksItems.module.css';

const SocialLinksItems = (props) => {
  return (
    <div className={classes.container}>
      <li>
        <h3>{props.website}:</h3>
        <a href={props.link}>{props.username}</a>
      </li>
    </div>
  );
};

export default SocialLinksItems;
