import React from 'react';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';

const Tags = ({ tags, tagSlugs, lang }) => {
  const langPath = lang ? `/${lang}` : '';
  return (
    <div className={styles['tags']}>
      <ul className={styles['tags__list']}>
        {tagSlugs.map((slug, i) => (
          <li className={styles['tags__list-item']} key={tags[i]}>
            <Link to={`${langPath}${slug}`} className={styles['tags__list-item-link']}>
              {tags[i]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Tags;
