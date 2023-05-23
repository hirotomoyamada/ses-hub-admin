import styles from './User.module.scss';
import { useEffect, useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import * as userSlice from 'features/user/userSlice';
import * as rootSlice from 'features/root/rootSlice';
import { Header } from 'components/header/user/Header';
import { Cover } from './components/cover/Cover';
import { Icon } from './components/icon/Icon';
import { Form } from './components/form/Form';
import * as functions from 'functions';
import { Company, Person } from 'types/post';
import { PageProvider } from 'components/provider/page/PageProvider';
import { fetchUser, editUser } from 'features/user/actions';

interface PropType {
  index: 'companys' | 'persons';
}

export type Data = functions.company.Data | functions.person.Data;

export const User: React.FC<PropType> = ({ index }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { uid } = useParams<{ uid: string }>();

  const user = useSelector(userSlice.user);
  const filter = useSelector(rootSlice.search).filter;

  const [cover, setCover] = useState(false);
  const [icon, setIcon] = useState(false);

  const methods = useForm<Data>({
    defaultValues:
      index === 'companys'
        ? functions.company.defaultValues(user as Company)
        : index === 'persons'
        ? functions.person.defaultValues(user as Person)
        : undefined,
  });

  useEffect(() => {
    dispatch(userSlice.resetUser());

    if (uid) dispatch(fetchUser({ index, uid }));
  }, [index, uid]);

  useEffect(() => {
    methods.reset(
      index === 'companys'
        ? functions.company.defaultValues(user as Company)
        : functions.person.defaultValues(user as Person),
    );
  }, [index, methods, user]);

  const handleClose = () => {
    const { key } = location;

    if (key !== 'default') {
      navigate(-1);
    } else {
      navigate(`/${index}`);
    }
  };

  const handleBack = () => {
    setCover(false);
    setIcon(false);
  };

  const handleEdit: SubmitHandler<Data> = (data): void => {
    if (index !== 'companys' && index !== 'persons') {
      return;
    }

    if (
      index === 'companys' &&
      'payment' in user &&
      'type' in data &&
      user.type !== data.type &&
      user.payment.price
    ) {
      dispatch(
        rootSlice.handleAnnounce({
          error:
            'このアカウントは、現在プランまたはオプションを契約中のため、個人・グループの編集できません。',
        }),
      );

      return;
    }

    if (
      index === 'companys' &&
      'payment' in user &&
      'type' in data &&
      user.type !== data.type &&
      user.payment?.children?.length
    ) {
      dispatch(
        rootSlice.handleAnnounce({
          error:
            'このアカウントは、グループアカウントを保有しているため、個人・グループの編集できません。',
        }),
      );

      return;
    }

    const profile: Company | Person | undefined =
      index === 'companys' && 'type' in data
        ? {
            ...user,
            ...functions.company.profile(data),
          }
        : index === 'persons' && 'state' in data
        ? {
            ...user,
            ...functions.person.profile(data),
          }
        : undefined;

    if (!profile) {
      dispatch(
        rootSlice.handleAnnounce({
          error: 'プロフィールの編集に失敗しました',
        }),
      );

      return;
    }

    dispatch(editUser({ index: index, user: profile, filter: filter }));
  };

  return (
    <FormProvider {...methods}>
      <PageProvider
        header={
          <Header
            user={user}
            icon={icon}
            cover={cover}
            handleBack={handleBack}
            handleClose={handleClose}
          />
        }
        side>
        <form
          id="user"
          className={styles.user}
          onSubmit={methods.handleSubmit(handleEdit)}>
          {(() => {
            switch (true) {
              case cover:
                return <Cover />;

              case icon:
                return <Icon index={index} />;

              default:
                return (
                  <Form
                    index={index}
                    user={user}
                    icon={icon}
                    cover={cover}
                    setIcon={setIcon}
                    setCover={setCover}
                  />
                );
            }
          })()}
        </form>
      </PageProvider>
    </FormProvider>
  );
};
