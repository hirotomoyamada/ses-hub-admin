import styles from './Post.module.scss';
import { useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as postSlice from 'features/post/postSlice';
import * as rootSlice from 'features/root/rootSlice';
import { Header } from 'components/header/post/Header';
import * as functions from 'functions';
import { Matter, Resource } from 'types/post';
import * as Item from './components/Item';
import { PageProvider } from 'components/provider/page/PageProvider';
import { deletePost, editPost, fetchPost } from 'features/post/actions';
import { fetchUser } from 'features/user/actions';
import { Oval } from 'react-loader-spinner';
import * as userSlice from 'features/user/userSlice';

interface PropType {
  index: 'matters' | 'resources';
}

export type Data = functions.matter.Data | functions.resource.Data;

export const Post: React.FC<PropType> = ({ index }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { objectID } = useParams<{ objectID: string }>();

  const post = useSelector(postSlice.post);
  const user = useSelector(userSlice.user);

  const methods = useForm<Data>({
    defaultValues:
      index === 'matters'
        ? functions.matter.defaultValues(post as Matter)
        : index === 'resources'
        ? functions.resource.defaultValues(post as Resource)
        : undefined,
  });

  useEffect(() => {
    if (objectID) dispatch(fetchPost({ index, objectID }));

    return () => {
      dispatch(postSlice.selectPost({}));
    };
  }, [index, objectID]);

  useEffect(() => {
    const { state } = location;
    const disabled = (state as { disabled: boolean } | undefined)?.disabled;

    if (
      (!('uid' in user) || !disabled) &&
      'uid' in post &&
      post.uid !== user.uid
    ) {
      dispatch(userSlice.resetUser());
      dispatch(fetchUser({ index: 'companys', uid: post.uid }));
    }
  }, [post]);

  useEffect(() => {
    methods.reset(
      index === 'matters'
        ? functions.matter.defaultValues(post as Matter)
        : index === 'resources'
        ? functions.resource.defaultValues(post as Resource)
        : undefined,
    );
  }, [index, methods, post]);

  const handleClose = () => {
    const { key } = location;

    if (key !== 'default') {
      navigate(-1);
    } else {
      navigate(`/${index}`);
    }
  };

  const handleEdit: SubmitHandler<Data> = (data): void => {
    if (index !== 'matters' && index !== 'resources') {
      return;
    }

    const edit: Matter | Resource | undefined =
      index === 'matters' && 'title' in data
        ? {
            ...post,
            ...functions.matter.edit(data),
          }
        : index === 'resources' && 'roman' in data
        ? {
            ...post,
            ...functions.resource.edit(data),
          }
        : undefined;

    if (!edit) {
      dispatch(
        rootSlice.handleAnnounce({
          error: '投稿の編集に失敗しました',
        }),
      );

      return;
    }

    dispatch(editPost({ index, post: edit }));
  };

  const handleDelete = (): void => {
    if (index !== 'matters' && index !== 'resources') {
      return;
    }

    dispatch(deletePost({ index, post, handleClose }));
    dispatch(rootSlice.handleModal());
  };

  return (
    <FormProvider {...methods}>
      <PageProvider
        header={
          <Header handleClose={handleClose} handleDelete={handleDelete} />
        }
        side>
        {'objectID' in post ? (
          <form
            id="post"
            className={styles.post}
            onSubmit={methods.handleSubmit(handleEdit)}>
            {(() => {
              switch (index) {
                case 'matters':
                  return (
                    <>
                      <Item.Status />
                      <Item.Title />

                      <div
                        className={`${styles.post_grid} ${styles.post_grid_mid}`}>
                        <Item.Industry />
                        <Item.Position />
                      </div>

                      <Item.Body index={index} />

                      <div className={styles.post_grid}>
                        <Item.AreaLocation />
                        <Item.PlaceLocation />
                        <Item.Remote />
                      </div>

                      <div
                        className={`${styles.post_grid} ${styles.post_grid_mid}`}>
                        <Item.Period index={index} />
                        <Item.Times />
                      </div>

                      <div className={styles.post_col}>
                        <span className={styles.post_tag}>開発環境</span>

                        <div>
                          <Item.Handles index={index} />
                          <Item.Tools index={index} />
                        </div>
                      </div>

                      <div className={styles.post_col}>
                        <span className={styles.post_tag}>必須</span>

                        <Item.Requires />
                      </div>

                      <div className={styles.post_col}>
                        <span className={styles.post_tag}>歓迎</span>
                        <Item.Perfers />
                      </div>

                      <Item.Interviews />

                      <Item.Costs index={index} />

                      <div className={styles.post_grid}>
                        <Item.Adjustment />
                        <Item.Distribution />
                        <Item.Span />
                        <Item.Approval />
                      </div>

                      <Item.Note />
                      <Item.Memo index={index} />
                    </>
                  );

                case 'resources':
                  return (
                    <>
                      <Item.Status />
                      <Item.Roman />
                      <Item.Position />

                      <div
                        className={`${styles.post_grid} ${styles.post_grid_mid}`}>
                        <div
                          className={`${styles.post_grid} ${styles.post_grid_half}`}>
                          <Item.Sex />
                          <Item.Age />
                        </div>
                      </div>

                      <Item.Body index={index} />

                      <div className={styles.post_grid}>
                        <Item.Belong />
                        <Item.Station />
                      </div>

                      <div className={styles.post_grid}>
                        <Item.Period index={index} />
                      </div>

                      <Item.Costs index={index} />

                      <div className={styles.post_col}>
                        <span className={styles.post_tag}>開発環境</span>

                        <div>
                          <Item.Handles index={index} />
                          <Item.Tools index={index} />
                        </div>
                      </div>

                      <div className={styles.post_col}>
                        <span className={styles.post_tag}>スキル</span>

                        <Item.Skills />
                      </div>

                      <Item.Parallel />
                      <Item.Note />

                      <Item.Memo index={index} />
                    </>
                  );

                default:
                  return <div>エラーが発生しました</div>;
              }
            })()}
          </form>
        ) : (
          <div className={styles.post_fetch}>
            <Oval color="#49b757" height={56} width={56} />
          </div>
        )}
      </PageProvider>
    </FormProvider>
  );
};
