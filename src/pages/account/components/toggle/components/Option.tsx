import React, { useState } from 'react';
import styles from '../Toggle.module.scss';
import { useFormContext } from 'react-hook-form';
import { Accounts } from 'features/user/initialState';

interface PropType {
  i: number;
  type: 'freelanceDirect';
  account: Accounts[number];
}

export const Option: React.FC<PropType> = ({ i, type, account }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { register, watch } = useFormContext();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const value = watch(`account[${i}].${type}`);

  return account?.uid ? (
    <div
      className={`
        ${styles.toggle}
        ${
          (!account?.uid || account?.payment?.price || account?.type === 'child') &&
          styles.toggle_disable
        }
      `}>
      {open && <div className={styles.toggle_overlay} onClick={() => setOpen(false)}></div>}

      <button
        type='button'
        onClick={() => setOpen(true)}
        className={`
          ${styles.toggle_btn}
          ${value === 'enable' && styles.toggle_btn_enable}
          ${value === 'disable' && styles.toggle_btn_disable}
        `}>
        {(() => {
          switch (value) {
            case 'enable':
              return '有効';

            case 'disable':
              return '無効';

            default:
              return '選択しない';
          }
        })()}
      </button>

      <div
        className={`
          ${styles.modal}
          ${styles.modal_option}
          ${!open && styles.modal_none}
        `}>
        <input
          type='radio'
          id={`enable${i}${type}`}
          value='enable'
          {...register(`account[${i}].${type}`)}
        />
        <label
          className={`
            ${styles.modal_btn}
            ${styles.modal_enable}
            ${(account?.payment?.price || account?.type === 'child') && styles.modal_none}
          `}
          htmlFor={`enable${i}${type}`}>
          有効
        </label>

        <input
          type='radio'
          id={`disable${i}${type}`}
          value='disable'
          {...register(`account[${i}].${type}`)}
        />
        <label
          className={`
            ${styles.modal_btn}
            ${styles.modal_disable}
            ${(account?.payment?.price || account?.type === 'child') && styles.modal_none}
          `}
          htmlFor={`disable${i}${type}`}>
          無効
        </label>

        <input
          type='radio'
          id={`none${i}${type}`}
          value='none'
          {...register(`account[${i}].${type}`)}
        />
        <label
          className={`
            ${styles.modal_btn}
            ${styles.toggle_none}
          `}
          htmlFor={`none${i}${type}`}>
          選択しない
        </label>
      </div>
    </div>
  ) : (
    <></>
  );
};
