import root from '../../Account.module.scss';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { Individual } from './components/Individual';
import { Parent } from './components/Parent';
import { Option } from './components/Option';
import { Accounts } from 'features/user/initialState';

interface PropType {
  i: number;
  account: Accounts[number];
}

export const Toggle: React.FC<PropType> = ({ i, account }) => {
  const { setValue } = useFormContext();

  useEffect(() => {
    if (!account?.uid) {
      return;
    }

    setValue(
      `account[${i}].status`,
      account?.type !== 'child'
        ? account?.type === 'parent' && account?.payment?.account && account.payment.account > 0
          ? String(account?.payment?.account)
          : account?.payment?.status
        : 'canceled',
      {
        shouldValidate: true,
        shouldDirty: true,
      },
    );

    setValue(
      `account[${i}].freelanceDirect`,
      typeof account?.payment?.option?.freelanceDirect === 'boolean'
        ? account.payment.option.freelanceDirect
          ? 'enable'
          : 'disable'
        : 'none',
      {
        shouldValidate: true,
        shouldDirty: true,
      },
    );
  }, [account]);

  return (
    <div className={root.account_wrap}>
      {!account?.uid || account?.type === 'individual' ? (
        <Individual i={i} account={account} />
      ) : (
        <Parent i={i} account={account} />
      )}

      <Option i={i} type='freelanceDirect' account={account} />
    </div>
  );
};
