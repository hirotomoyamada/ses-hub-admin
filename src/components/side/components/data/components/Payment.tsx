import React, { useState } from 'react';
import styles from '../Data.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as functions from 'functions';
import { Company } from 'types/post';

interface PropType {
  user: Company;
}

export const Payment: React.FC<PropType> = ({ user }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className={styles.data_col}>
      {user?.payment?.id && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>ID</span>
          <CopyToClipboard text={user?.payment?.id} onCopy={handleCopy}>
            <button
              className={`${styles.data_item_text} ${styles.data_item_btn} ${
                copy && styles.data_item_btn_copy
              }`}>
              {user?.payment?.id}
            </button>
          </CopyToClipboard>
        </div>
      )}

      {user?.payment?.link && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>Stripe Customer</span>
          <a
            href={user?.payment?.link}
            target='_blank'
            rel='noreferrer noopener'
            className={`${styles.data_item_text} ${styles.data_item_text_link}`}>
            {user?.payment?.link}
          </a>
        </div>
      )}

      <div className={styles.data_item}>
        <span className={styles.data_item_tag}>タイプ</span>
        <span className={styles.data_item_text}>
          {user?.type === 'individual'
            ? '個人'
            : user?.type === 'parent'
            ? 'グループ\n(\nメイン\n)'
            : 'グループ\n(\nサブ\n)'}
        </span>
      </div>

      <div className={styles.data_item}>
        <span className={styles.data_item_tag}>プラン</span>

        {!user?.payment?.price && user?.payment?.status !== 'canceled' && (
          <span className={`${styles.data_item_tag} ${styles.data_item_tag_extra}`}>
            エキストラ
          </span>
        )}

        <span className={styles.data_item_text}>
          {user?.payment?.status === 'active'
            ? 'レギュラー'
            : user?.payment?.status === 'trialing'
            ? 'フリートライアル'
            : 'リミテッド'}
          {user?.type === 'parent' && user?.payment?.account
            ? `\n(\n${user?.payment?.account}人\n)\n`
            : ''}
        </span>
      </div>

      {user?.payment?.start && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>開始</span>
          <span className={styles.data_item_text}>
            {functions.root.timestamp(user?.payment?.start)}
          </span>
        </div>
      )}

      {user?.payment?.end && (
        <div className={styles.data_item}>
          <span className={styles.data_item_tag}>終了</span>
          <span className={styles.data_item_text}>
            {functions.root.timestamp(user?.payment?.end)}
          </span>
        </div>
      )}

      <div className={styles.data_item}>
        <span className={styles.data_item_tag}>フリートライアル</span>
        <span className={styles.data_item_text}>{!user?.payment?.trial ? '済' : '未'}</span>
      </div>

      <div className={styles.data_item}>
        <span className={styles.data_item_tag}>Freelance Direct</span>
        <span className={styles.data_item_text}>
          {user?.payment?.option?.freelanceDirect ? '済' : '未'}
        </span>
      </div>
    </div>
  );
};
