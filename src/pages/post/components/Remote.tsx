import styles from './Item.module.scss';
import root from '../Post.module.scss';

import { useFormContext } from 'react-hook-form';
import { Data } from 'functions/_matter';

export const Remote: React.FC = () => {
  const { register } = useFormContext<Data>();

  return (
    <div className={root.post_col}>
      <span className={root.post_tag}>リモート</span>
      <div className={`${styles.item} ${styles.item_select}`}>
        <select className={styles.item_input} {...register('remote')}>
          <option value={'あり'}>あり</option>
          <option value={'なし'}>なし</option>
        </select>
      </div>
    </div>
  );
};
