import styles from '../../Form.module.scss';

import { Name } from './components/Name';
import { Body } from './components/Body';
import { Person } from './components/Person';
import { Tel } from './components/Tel';
import { Address } from './components/Address';
import { More } from './components/More';
import { Social } from './components/Social';
import { Url } from './components/Url';
import { Type } from './components/Type';
import { Invoice } from './components/Invoice';

export const Companys: React.FC = () => {
  return (
    <div className={styles.form_container}>
      <Type />
      <Name />
      <Person />
      <Body />
      <Invoice />
      <More />
      <Address />
      <Tel />
      <Url />
      <Social />
    </div>
  );
};
