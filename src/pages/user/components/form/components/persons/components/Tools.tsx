import styles from '../../../Form.module.scss';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { useFormContext, useFieldArray, Controller } from 'react-hook-form';
import { Data } from 'functions/_person';
import { Autocomplete } from './Autocomplete';

const options = [
  { label: 'AWS', value: 'AWS' },
  { label: 'Linux', value: 'Linux' },
  { label: 'WindowsServer', value: 'WindowsServer' },
  { label: 'UNIX', value: 'UNIX' },
  { label: 'Azure', value: 'Azure' },
  { label: 'Oracle', value: 'Oracle' },
  { label: 'Google Cloud Platform', value: 'Google Cloud Platform' },
  { label: 'Kubernetes', value: 'Kubernetes' },
  { label: 'Fargate', value: 'Fargate' },
  { label: 'Photoshop', value: 'Photoshop' },
  { label: 'Illustrator', value: 'Illustrator' },
  { label: 'Sketch', value: 'Sketch' },
  { label: 'Figma', value: 'Figma' },
  { label: 'Adobe XD', value: 'Adobe XD' },
  { label: 'Maya', value: 'Maya' },
  { label: 'After Effects', value: 'After Effects' },
  { label: 'Adobe Premiere', value: 'Adobe Premiere' },
  { label: 'Flash', value: 'Flash' },
  { label: 'SAI', value: 'SAI' },
  { label: 'CLIP STUDIO PAINT', value: 'CLIP STUDIO PAINT' },
  { label: 'Blender', value: 'Blender' },
  { label: '3ds Max', value: '3ds Max' },
  { label: 'SAP', value: 'SAP' },
  { label: 'Salesforce', value: 'Salesforce' },
  { label: 'MySQL', value: 'MySQL' },
  { label: 'Abstract', value: 'Abstract' },
  { label: 'Mackerel', value: 'Mackerel' },
  { label: 'Office365', value: 'Office365' },
  { label: 'CodePipeline', value: 'CodePipeline' },
  { label: 'SageMaker', value: 'SageMaker' },
  { label: 'Fluentd', value: 'Fluentd' },
  { label: 'CodeDeploy', value: 'CodeDeploy' },
  { label: 'Cisco', value: 'Cisco' },
  { label: 'Tensorflow', value: 'Tensorflow' },
  { label: 'Keras', value: 'Keras' },
  { label: 'Pytorch', value: 'Pytorch' },
  { label: 'NumPy', value: 'NumPy' },
  { label: 'Hibernate', value: 'Hibernate' },
  { label: 'PowerShell', value: 'PowerShell' },
  { label: 'Active Directory', value: 'Active Directory' },
  { label: 'ファイヤーウォール', value: 'ファイヤーウォール' },
  { label: 'Company', value: 'Company' },
  { label: 'Exchange', value: 'Exchange' },
  { label: 'Docker', value: 'Docker' },
  { label: 'Firebase', value: 'Firebase' },
  { label: 'MAツール', value: 'MAツール' },
  { label: 'Tableau', value: 'Tableau' },
  { label: 'JIRA', value: 'JIRA' },
  { label: 'Slack', value: 'Slack' },
  { label: 'Zoom', value: 'Zoom' },
  { label: 'Microsoft Teams', value: 'Microsoft Teams' },
  { label: 'Excel', value: 'Excel' },
  { label: 'PowerPoint', value: 'PowerPoint' },
];

export const Tools: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Data>();

  const {
    fields: toolsFields,
    append: toolsAppend,
    remove: toolsRemove,
  } = useFieldArray({
    control,
    name: 'tools',
  });

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>ツール</span>
      <div className={styles.form_grid}>
        {toolsFields.map((field, i) => (
          <Controller
            control={control}
            name={`tools.${i}.tool` as const}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <div key={field.id} className={styles.form_item}>
                <Autocomplete
                  ref={ref}
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="ツール"
                  error={!!errors.tools?.[i]?.tool}
                  options={options}
                />

                <div className={styles.form_btn}>
                  {i !== 0 && (
                    <button
                      type="button"
                      className={styles.form_btn_remove}
                      onClick={() => toolsRemove(i)}>
                      <RemoveIcon className={styles.form_btn_icon} />
                    </button>
                  )}
                  {i === toolsFields.length - 1 && i < 7 && (
                    <button
                      type="button"
                      className={styles.form_btn_add}
                      onClick={() => toolsAppend({ tool: '' })}>
                      <AddIcon className={styles.form_btn_icon} />
                    </button>
                  )}
                </div>

                {errors.tools?.[i]?.tool?.message && (
                  <span className={styles.form_error}>
                    {errors.tools[i].tool?.message}
                  </span>
                )}
              </div>
            )}
          />
        ))}
      </div>
    </div>
  );
};
