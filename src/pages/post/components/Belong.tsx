import styles from './Item.module.scss';
import root from '../Post.module.scss';

import { useFormContext } from 'react-hook-form';
import { Data } from 'functions/_resource';

export const Belong: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={`${root.post_col} ${root.post_col_mid}`}>
      <span className={root.post_tag}>所属</span>
      <div className={`${styles.item} ${styles.item_select}`}>
        <select
          placeholder="Hit me up 株式会社"
          className={`${styles.item_input} ${
            errors.belong && styles.item_input_error
          }`}
          {...register('belong', {
            required: {
              value: true,
              message: '所属を入力してください',
            },
          })}
        >
          <option hidden value="">
            -
          </option>
          <option value="弊社社員">弊社社員</option>
          <option value="1社先社員">1社先社員</option>
          <option value="直個人事業主">直個人事業主</option>
          <option value="1社先個人事業主">1社先個人事業主</option>
          <option value="その他">その他</option>
        </select>

        {errors?.belong?.message && (
          <span className={styles.item_error}>{errors.belong.message}</span>
        )}
      </div>
    </div>
  );
};
