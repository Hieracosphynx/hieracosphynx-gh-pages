import { Fragment } from 'react';
import SocialLinksItems from './SocialLinksItems';
import Card from '../../UI/Card';

import classes from './SocialLinks.module.css';

const SOCIAL_LINKS = [
  {
    id: '1',
    link: 'https://github.com/MigsCortez',
    website: 'Github',
    username: 'MigsCortez',
  },
  {
    id: '2',
    link: 'https://github.com/Hieracosphynx',
    website: 'Github',
    username: 'Hieracosphynx',
  },
  {
    id: '3',
    link: 'https://www.linkedin.com/in/miguel-cortez/',
    website: 'LinkedIn',
    username: 'Miguel Cortez',
  },
];

const SocialLinks = () => {
  const linkList = SOCIAL_LINKS.map((social) => {
    return (
      <SocialLinksItems
        key={social.id}
        link={social.link}
        website={social.website}
        username={social.username}
      />
    );
  });

  return (
    <Card>
      <div className={classes.container}>
        <h3>Links</h3>
        <ul>{linkList}</ul>
      </div>
    </Card>
  );
};

export default SocialLinks;
