import root from "../../Data.module.scss";

import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { uploadResume } from "../../../../../../features/user/functions/uploadResume";
import * as userSlice from "../../../../../../features/user/userSlice";

import { File } from "./components/File";
import { Upload } from "./components/Upload";

export const Resume = ({ user }) => {
  const dispatch = useDispatch();

  const input = useRef();
  const [resume, setResume] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resume) {
      setError(null);
      setSuccess(false);

      return;
    }

    if (resume?.type !== "application/pdf") {
      setError("pdf のみアップロードできます");
      setSuccess(false);

      return;
    }

    if (resume?.size > 0.4 * 1024 * 1024) {
      setError("400KB までアップロードできます");
      setSuccess(false);

      return;
    }

    setError(null);
    setSuccess(true);
  }, [resume]);

  const handleUpload = (e) => {
    e.preventDefault();

    const reader = new FileReader();

    reader.onload = () => {
      const base64 = window.btoa(
        new Uint8Array(reader.result).reduce((p, c) => {
          return p + String.fromCharCode(c);
        }, "")
      );

      dispatch(uploadResume({ uid: user.uid, file: base64, fetch: true }));

      handleCancel();
    };

    reader.readAsArrayBuffer(resume);
  };

  const handleChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleCancel = () => {
    input.current.value = null;
    setResume(null);
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
          <File user={user} resume={resume} handleDelete={handleDelete} />

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
