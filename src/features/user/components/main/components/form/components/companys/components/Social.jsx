import styles from "../../../Form.module.scss";
import { useFormContext } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const Social = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>SNS</span>

      <div className={styles.form_social}>
        <FontAwesomeIcon
          icon={faLine}
          className={`${styles.form_social_icon} ${styles.form_social_icon_line}`}
        />
        <span className={styles.form_social_url}>https://line.me/ti/p/</span>
        <input
          placeholder="RjZOXypTV1"
          className={`${styles.form_social_input} ${
            errors.line && styles.form_input_error
          }`}
          {...register("social.line", {
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            maxLength: {
              value: 144,
              message: "144文字以内で入力してください",
            },
          })}
        />
        {errors.line?.message && (
          <span className={styles.form_error}>{errors.line?.message}</span>
        )}
      </div>

      <div className={styles.form_social}>
        <FontAwesomeIcon
          icon={faTwitter}
          className={`${styles.form_social_icon} ${styles.form_social_icon_twitter}`}
        />
        <span className={styles.form_social_url}>https://twitter.com/</span>
        <input
          placeholder="Hitmeup2020"
          className={`${styles.form_social_input} ${
            errors.twitter && styles.form_input_error
          }`}
          {...register("social.twitter", {
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            maxLength: {
              value: 144,
              message: "144文字以内で入力してください",
            },
          })}
        />
        {errors.twitter?.message && (
          <span className={styles.form_error}>{errors.twitter?.message}</span>
        )}
      </div>

      <div className={styles.form_social}>
        <FontAwesomeIcon
          icon={faInstagram}
          className={`${styles.form_social_icon} ${styles.form_social_icon_instagram}`}
        />
        <span className={styles.form_social_url}>https://instagram.com/</span>
        <input
          placeholder="Hitmeup2020"
          className={`${styles.form_social_input} ${
            styles.form_social_input_other
          }  ${errors.instagram && styles.form_input_error}`}
          {...register("social.instagram", {
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            maxLength: {
              value: 144,
              message: "144文字以内で入力してください",
            },
          })}
        />
        {errors.instagram?.message && (
          <span className={styles.form_error}>{errors.instagram?.message}</span>
        )}
      </div>

      <div className={styles.form_social}>
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className={`${styles.form_social_icon} ${styles.form_social_icon_linkedIn}`}
        />
        <span className={styles.form_social_url}>https://linkedin.com/in/</span>
        <input
          placeholder="太郎-山田-12ab34567"
          className={`${styles.form_social_input} ${
            styles.form_social_input_other
          }  ${errors.linkedIn && styles.form_input_error}`}
          {...register("social.linkedIn", {
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            maxLength: {
              value: 144,
              message: "144文字以内で入力してください",
            },
          })}
        />
        {errors.linkedIn?.message && (
          <span className={styles.form_error}>{errors.linkedIn?.message}</span>
        )}
      </div>
    </div>
  );
};
