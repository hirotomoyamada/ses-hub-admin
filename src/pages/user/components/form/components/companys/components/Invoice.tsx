import styles from '../../../Form.module.scss';
import { useFormContext } from 'react-hook-form';
import { Data } from 'functions/_company';

export const Invoice: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>適格請求書発行事業者</span>

      <div className={styles.form_col}>
        <div>
          <div className={`${styles.form_select} ${styles.form_input_min}`}>
            <select
              className={`${styles.form_input} ${
                errors.invoice?.type && styles.form_input_error
              }`}
              {...register('invoice.type', {
                required: {
                  value: true,
                  message: '適格請求書発行事業者を選択してください',
                },
              })}>
              <option hidden value="">
                -
              </option>
              <option value="登録済み">登録済み</option>
              <option value="未登録">未登録</option>
              <option value="不明">不明</option>
            </select>
          </div>

          {errors.invoice?.type?.message && (
            <span className={styles.form_error}>
              {errors.invoice.type.message}
            </span>
          )}
        </div>

        {watch('invoice.type') === '登録済み' ? (
          <div>
            <div className={`${styles.form_row} ${styles.form_row_nowrap}`}>
              <span>T</span>

              <input
                className={`${styles.form_input} ${
                  errors.invoice?.no && styles.form_input_error
                }`}
                placeholder="1-0123-4567-8910"
                {...register('invoice.no', {
                  required: {
                    value: true,
                    message: '適格請求書発行事業者の登録番号を入力してください',
                  },
                  pattern: {
                    value: /^\d{1}-\d{4}-\d{4}-\d{4}$/,
                    message:
                      '正しい適格請求書発行事業者の登録番号を入力してください',
                  },
                  maxLength: {
                    value: 16,
                    message: '16文字以内で入力してください',
                  },
                })}
              />
            </div>

            {errors.invoice?.no?.message ? (
              <span className={styles.form_error}>
                {errors.invoice.no.message}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};
