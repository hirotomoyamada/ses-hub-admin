import styles from './Post.module.scss';

import * as functions from 'functions';
import { Matter, Resource } from 'types/post';

interface PropType {
  post: Matter | Resource;
  min?: boolean;
}

export const Header: React.FC<PropType> = ({ post, min }) => {
  return (
    <div className={styles.item_header}>
      <div className={styles.item_row}>
        <div
          className={`${styles.item_category} ${
            post?.display === 'public'
              ? styles.item_category_public
              : post?.display === 'private' && styles.item_category_private
          }`}>
          <span>
            {post?.display === 'public'
              ? '公開'
              : post?.display === 'private' && '非公開'}
          </span>
        </div>

        <div
          className={`${styles.item_category} ${styles.item_category_status} ${
            post?.status === '保留中'
              ? styles.item_category_status_reserve
              : post?.status === '提案中'
              ? styles.item_category_status_propo
              : post?.status === '面談中'
              ? styles.item_category_status_interview
              : post?.status === 'フォロー中'
              ? styles.item_category_status_follow
              : post?.status === '成約' && styles.item_category_status_end
          }`}>
          <span>{post?.status}</span>
        </div>

        {'industry' in post && post?.industry ? (
          <div
            className={`${styles.item_category} ${styles.item_category_industry}`}>
            <span>{post?.industry}</span>
          </div>
        ) : null}

        <div
          className={`${styles.item_category} ${styles.item_category_position}`}>
          <span>{post?.position}</span>
        </div>
      </div>

      {!min ? (
        <div className={styles.item_row}>
          <span className={styles.item_time}>
            作成：{functions.root.timestamp(post?.createAt)}
          </span>

          <span className={styles.item_time}>
            {post?.updateAt &&
              `更新：${functions.root.timestamp(post?.updateAt)}`}
          </span>
        </div>
      ) : null}
    </div>
  );
};
