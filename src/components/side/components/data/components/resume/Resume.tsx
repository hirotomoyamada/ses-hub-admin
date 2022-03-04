import root from "../../Data.module.scss";

import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { uploadResume } from "features/user/actions";
import * as userSlice from "features/user/userSlice";

import { File } from "./components/File";
import { Upload } from "./components/Upload";
import { Person } from "types/post";

interface PropType {
  user: Person;
}

export const Resume: React.FC<PropType> = ({ user }) => {
  const dispatch = useDispatch();

  const input = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setError(null);
      setSuccess(false);

      return;
    }

    if (file?.type !== "application/pdf") {
      setError("pdf のみアップロードできます");
      setSuccess(false);

      return;
    }

    if (file?.size > 0.4 * 1024 * 1024) {
      setError("400KB までアップロードできます");
      setSuccess(false);

      return;
    }

    setError(null);
    setSuccess(true);
  }, [file]);

  const handleUpload = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        const base64 = window.btoa(
          new Uint8Array(reader.result as ArrayBufferLike).reduce((p, c) => {
            return p + String.fromCharCode(c);
          }, "")
        );

        if (file) {
          dispatch(uploadResume({ uid: user.uid, file: base64, fetch: true }));
        }
      }

      handleCancel();
    };

    file && reader.readAsArrayBuffer(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target?.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleCancel = (): void => {
    if (input?.current) {
      input.current.value = "";
    }

    setFile(null);
    setError(null);
    setSuccess(false);
  };

  const handleDelete = () => {
    dispatch(userSlice.deleteResume(user.uid));
  };

  return (
    <div className={root.data_col}>
      <div className={`${root.data_item} ${root.data_item_col}`}>
        <span className={root.data_item_tag}>職務経歴書</span>

        <form
          onSubmit={handleUpload}
          className={`${root.data_item} ${root.data_item_col}`}
        >
          <File user={user} file={file} handleDelete={handleDelete} />

          <Upload
            user={user}
            input={input}
            success={success}
            error={error}
            handleChange={handleChange}
            handleCancel={handleCancel}
          />
        </form>
      </div>
    </div>
  );
};
