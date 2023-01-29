import styles from './Data.module.scss';
import root from '../../Side.module.scss';

import { Oval } from 'react-loader-spinner';

import { useSelector } from 'react-redux';

import * as rootSlice from 'features/root/rootSlice';

import { Header } from '../header/Header';
import { Account } from './components/account/Account';
import { Auth } from './components/Auth';
import { Payment } from './components/Payment';
import { Profile } from './components/Profile';
import { Provider } from './components/Provider';
import { Posts } from './components/posts/Posts';
import { Resume } from './components/resume/Resume';
import { Company, Person } from 'types/post';
import { Index } from 'features/root/initialState';
import { HandleIndex, HandleOpen, Type } from 'hooks/useSideFetch';
import { useNavigate } from 'react-router-dom';

interface PropType {
  user: Company | Person;
  index: Index;
  type: Type;
  target: 'data';
  handleOpen: HandleOpen;
  handleIndex: HandleIndex;
}

export const Data: React.FC<PropType> = ({
  user,
  index,
  type,
  handleOpen,
  target,
  handleIndex,
}) => {
  const navigate = useNavigate();
  const fetch = useSelector(rootSlice.load).list;

  const handleChange = (): void => {
    handleIndex('payment' in user ? 'companys' : 'persons');
    navigate(`/${'payment' in user ? 'companys' : 'persons'}/${user.uid}`);
  };

  return (
    <div className={root.side_type}>
      <Header type={type} target={target} handleOpen={handleOpen} />

      <div
        className={`${root.side_type_inner} ${
          type === target &&
          'payment' in user &&
          user?.type === 'parent' &&
          user?.payment?.children?.length
            ? root.side_type_inner_current_parent
            : type === target && root.side_type_inner_current
        }`}>
        {!fetch && type === 'data' ? (
          <div className={styles.data}>
            {(index === 'matters' ||
              index === 'resources' ||
              (user as Company).type === 'child') && (
              <Account
                user={
                  index === 'matters' || index === 'resources'
                    ? user
                    : 'parent' in user && user?.parent
                    ? user?.parent
                    : user
                }
                index={index}
                handleChange={handleChange}
              />
            )}

            <Auth index={index} user={user} />
            {'payment' in user && <Payment user={user} />}
            <Profile user={user} />
            {'resume' in user && <Resume user={user} />}
            <Provider user={user} />
            <Posts user={user} handleOpen={handleOpen} />
          </div>
        ) : type !== 'data' ? (
          <></>
        ) : (
          <div className={`${styles.data} ${styles.data_none}`}>
            <Oval color="#49b757" height={56} width={56} />
          </div>
        )}
      </div>
    </div>
  );
};
